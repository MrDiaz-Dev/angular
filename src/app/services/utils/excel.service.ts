import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}

  exportExcel(data: any[], fileName: string) {
    // Eliminar el campo 'id' de cada elemento en 'data'
    data.forEach((element) => delete element.id);

    // Importar la librería 'xlsx' y generar el archivo Excel
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      // Definir el tipo y la extensión del archivo Excel
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';

      // Crear un Blob con el contenido del archivo Excel
      const excelData: Blob = new Blob([excelBuffer], {
        type: EXCEL_TYPE,
      });

      // Guardar el archivo Excel usando FileSaver
      FileSaver.saveAs(
        excelData,
        fileName + new Date(Date.now()).toLocaleDateString() + EXCEL_EXTENSION
      );
    });
  }

  exportarCSV(data: any[], fileName: string) {
    const dataToExport = [];

    const headers = Object.keys(data[0]);

    dataToExport.push(headers);

    data.forEach((item) => {
      dataToExport.push(Object.values(item));
    });

    let csvContent = '';

    dataToExport.forEach((row) => {
      csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8,',
    });
    const objUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objUrl;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(objUrl);
  }

  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   let EXCEL_TYPE =
  //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //   let EXCEL_EXTENSION = '.xlsx';
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE,
  //   });
  //   FileSaver.saveAs(
  //     data,
  //     fileName +
  //       '_export_' +
  //       new Date(Date.now()).toLocaleDateString() +
  //       EXCEL_EXTENSION
  //   );
  // }
}
