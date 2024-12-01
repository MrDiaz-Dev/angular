import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class FileProcessService {
  private readonly http = inject(HttpClient);

  miInputFile = null;

  excel: string | ArrayBuffer = null;

  processing: boolean = false;

  processFile(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log();
      // convertir excel en json
      let fileReader = new FileReader();

      this.http.get(filePath, { responseType: 'blob' }).subscribe(
        (response) => {
          console.log('response => ', response);
          fileReader.readAsArrayBuffer(response);

          fileReader.onload = () => {
            this.excel = fileReader.result as ArrayBuffer;

            let data = new Uint8Array(this.excel as ArrayBuffer);
            let workbook = XLSX.read(data, { type: 'array' });

            let worksheet = workbook.Sheets[workbook.SheetNames[0]];
            let jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            console.log('jsonData => ', jsonData);

            let cabecera = jsonData[0];

            let jsonArray = [];

            jsonData.forEach((row, index) => {
              if (index === 0) return;

              let jsonObj = {};

              //@ts-ignore
              for (let i = 0; i < cabecera.length; i++) {
                // console.log(`row[${i}] => `, row[i]);
                if (row[i] === undefined || row[i] === '') {
                  row[i] = null;
                }

                if (
                  (row[i] != null && cabecera[i] === 'LFDAT') ||
                  cabecera[i] === 'PREQ_DATE'
                ) {
                  let fecha = new Date(
                    Math.round((row[i] - (25567 + 2)) * 86400 * 1000)
                  );
                  let fechaString = fecha.toISOString().split('T')[0];
                  row[i] = fechaString;
                }

                //@ts-ignore
                jsonObj[cabecera[i]] = row[i];
              }

              jsonArray.push(jsonObj);
            });

            // console.log('jsonData => ', jsonData);s
            console.log('jsonArray => ', jsonArray);

            resolve(jsonArray);
          };
        },
        (error) => {
          console.log('error => ', error);
          reject(error);
        }
      );
    });
  }
}
