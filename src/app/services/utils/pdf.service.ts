import { Injectable, inject } from '@angular/core';
import html2pdf from 'html2pdf.js';
// import {
//   LineaPresupuesto,
//   Presupuesto,
// } from '../interfaces/presupuesto.interface';
// import { Cliente } from '../interfaces/cliente.interface';
// import { FacturaEmitida, FacturaRecibida, LineaFacturaEmitida } from '../interfaces/facturas.interface';
// import { Proveedor } from '../interfaces/proveedor.interface';
import { FechaService } from './fecha.service';
import { Empresa } from '../../interfaces/empresa';
import { GridStackOptions, GridStack } from 'gridstack';
import {
  GridstackComponent,
  gsCreateNgComponents,
  NgGridStackWidget,
  nodesCB,
  BaseWidget,
  GridCompHTMLElement,
} from 'gridstack/dist/angular';
import { format } from 'date-fns';

interface PdfOptions {
  headers?: string[];
  title?: string;
  fileName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  private readonly fechaService = inject(FechaService);

  private readonly HTML5start = `

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Conva Tools</title>
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link
          id="theme-css"
          rel="stylesheet"
          type="text/css"
          href="assets/layout/styles/tema/themes/saga/saga-purple/theme.scss"
        />

        <!-- Font Awesome -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
  `;

  private readonly HTML5stylesForTable = `
      <style>
        table {
          font-size: 0.7rem;
          border: 1px solid var(--surface-border);
          border-radius: 0.5rem;
        }
        tr {
          border-bottom: 1px solid var(--surface-border);
        }
        th, td {
          padding: 0.5rem;
          min-width: 6rem;
        }
      </style>
  `;

  private readonly HTML5end = `
    </html>
  `;

  printContainerPlanPDF(grid) {
    html2pdf()
      .set({
        format: 'a2',
      })
      .from(grid)
      .save();
    // html2pdf(grid, { filename: 'containerPlan' });
  }

  printPDFTable(tableData: Array<Record<string, any>>, opt: PdfOptions = {}) {
    tableData.forEach((linea) => {
      delete linea['id'];
    });

    console.log(opt);

    // console.log(tableData);
    // Object.keys(tableData[0]).forEach((key) => {
    //   console.log(key);
    // });

    let html = ``.concat(this.HTML5start, this.HTML5stylesForTable);

    html = html.concat(`
      <body>  
        <div id="pdfContent" class="col-12 grid pt-0">
          <div class="col-12 py-0">
          <br >
          <br >
          <br >

          <h2 class="">${opt?.title ?? 'Export Data'}</h1>

          <div class="card px-0 py-0 no-borders">
            <table class="col-12 px-1 mb-3">
              <tr>
    `);

    if (opt?.headers) {
      opt.headers?.forEach((header) => {
        html = html.concat(`
                <th class="text-center" >${header}</th>
        `);
      });
    } else {
      Object.keys(tableData[0]).forEach((key) => {
        html = html.concat(`
                <th class="text-center" >${key}</th>
        `);
      });
    }

    html = html.concat(`
              </tr>
    `);

    tableData.forEach((linea) => {
      html = html.concat(`
              <tr>
      `);

      Object.keys(linea).forEach((key) => {
        html = html.concat(`
                <td class="text-center" >${linea[key]}</td>
        `);
      });

      html = html.concat(`
              </tr>
      `);
    });

    html = html.concat(`
            </table>
          </div>
        </div>
      </body>
    `);

    let aux = document.createElement('div');
    aux.innerHTML = html;

    let pdfOpt = {
      // margin: 1,
      filename:
        (opt?.fileName ?? 'export_data_' + format(new Date(), 'yyyy-MM-dd')) +
        '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
    };
    html2pdf().from(aux).set(pdfOpt).save();
  }

  printCharts(charts, tableData, opt: PdfOptions = {}) {
    console.log('tableData => ', tableData);

    let html = ``.concat(this.HTML5start, this.HTML5stylesForTable);
    html = html.concat(`
      <body> 
        <div id="pdfContent" class="col-12 grid pt-0">
          <div class="col-12 py-0">
            <br >
  
            <h2 class="">${opt?.title ?? 'Charts Data'}</h1>
  
            <div class="col-12">
              <img 
                id="charts" 
                style="width: auto; height: auto; margin: 0 auto; max-height: 400px; max-width: 100%;" 
              />   
            </div>  
    `);

    html = html.concat(`
            <table class="col-12 px-1 mb-3">
              <tr>
    `);

    opt.headers ??= Object.keys(tableData[0]);

    opt.headers?.forEach((header) => {
      html = html.concat(`
                <th class="text-center" >${header}</th>
      `);
    });

    html = html.concat(`
              </tr>
    `);

    tableData.forEach((linea) => {
      html = html.concat(`
              <tr>
      `);

      Object.keys(linea).forEach((key) => {
        html = html.concat(`
                <td class="text-center" >${linea[key]}</td>
        `);
      });

      html = html.concat(`
              </tr>
      `);
    });

    html = html.concat(`
            </table>
          </div>
        </div>
      </body>
    `);

    let pdfOpt = {
      // margin: 1,
      filename:
        (opt?.fileName ?? 'export_data_' + format(new Date(), 'yyyy-MM-dd')) +
        '.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait',
        autoPaging: 'text', // Crucial for handling text flow across pages
      },
      margin: 0.25, // Set appropriate margins
    };

    let aux = document.createElement('div');
    aux.innerHTML = html;

    let chartsImgElement: HTMLImageElement = aux.querySelector('#charts');
    if (chartsImgElement) {
      chartsImgElement.src = charts;
    } else {
      console.error(
        'El elemento con ID "charts" no se encontró dentro de aux.'
      );
    }

    html2pdf().from(aux).set(pdfOpt).save();
  }

  printCharts2(charts, tableData, opt: PdfOptions = {}) {
    console.log('tableData => ', tableData);

    let html = ``.concat(this.HTML5start, this.HTML5stylesForTable);
    html = html.concat(`
      <body> 
        <div id="pdfContent" class="col-12 grid pt-0">
          <div class="col-12 py-0">
            <br >
  
            <h2 class="">${opt?.title ?? 'Charts Data'}</h1>
  
            <div class="col-12">
              <img 
                id="charts" 
                style="width: auto; height: auto; margin: 0 auto; max-height: 400px; max-width: 100%;" 
              />   
            </div>  
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
    `);

    html = html.concat(`
            <table class="col-12 px-1 mb-3">
              <tr>
    `);

    opt.headers ??= Object.keys(tableData[0]);

    opt.headers?.forEach((header) => {
      html = html.concat(`
                <th class="text-center" >${header}</th>
      `);
    });

    html = html.concat(`
              </tr>
    `);

    tableData.forEach((linea) => {
      html = html.concat(`
              <tr>
      `);

      Object.keys(linea).forEach((key) => {
        html = html.concat(`
                <td class="text-center" >${linea[key]}</td>
        `);
      });

      html = html.concat(`
              </tr>
      `);
    });

    html = html.concat(`
            </table>
          </div>
        </div>
      </body>
    `);

    let pdfOpt = {
      // margin: 1,
      filename:
        (opt?.fileName ?? 'export_data_' + format(new Date(), 'yyyy-MM-dd')) +
        '.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait',
        autoPaging: 'text', // Crucial for handling text flow across pages
      },
      margin: 0.25, // Set appropriate margins
    };

    let aux = document.createElement('div');
    aux.innerHTML = html;

    let chartsImgElement: HTMLImageElement = aux.querySelector('#charts');
    if (chartsImgElement) {
      chartsImgElement.src = charts;
    } else {
      console.error(
        'El elemento con ID "charts" no se encontró dentro de aux.'
      );
    }

    html2pdf().from(aux).set(pdfOpt).save();
  }

  printAllCharts(charts, tableData, opt: PdfOptions = {}) {
    console.log('tableData => ', tableData);

    let html = ``.concat(this.HTML5start, this.HTML5stylesForTable);
    html = html.concat(`
      <style>
        th, td {
          padding: 0.25rem !important;
          max-width: 5rem !important;
          min-width: 5rem !important;
        }
        table {
          font-size: 0.7rem;
          max-width: 100% !important;
        }
      </style>
      <body> 
        <div id="pdfContent" class="col-12 grid pt-0">
          <div class="col-12 py-0">
            <br >
  
            <h2 class="">${opt?.title ?? 'Charts Data'}</h1>
  
            <div class="col-12">
              <img 
                id="charts" 
                style="width: auto; height: auto; margin: 0 auto; max-height: 8000px; max-width: 100%;" 
              />   
            </div>  
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >
            <br >

    `);

    html = html.concat(`

            <h2 class="">Charts Data</h1>
            <table class="px-1 mb-3">
              <tr>
    `);

    opt.headers ??= Object.keys(tableData[0]);

    opt.headers?.forEach((header) => {
      html = html.concat(`
                <th class="text-center" >${header}</th>
      `);
    });

    html = html.concat(`
              </tr>
    `);

    tableData.forEach((linea) => {
      html = html.concat(`
              <tr>
      `);

      Object.keys(linea).forEach((key) => {
        html = html.concat(`
                <td class="text-center" >${linea[key]}</td>
        `);
      });

      html = html.concat(`
              </tr> 
      `);
    });

    html = html.concat(`
            </table>
          </div>
        </div>
      </body>
    `);

    let pdfOpt = {
      // margin: 1,
      pagebreak: { avoid: "table", mode: "css" }  ,
      filename:
        (opt?.fileName ?? 'export_data_' + format(new Date(), 'yyyy-MM-dd')) +
        '.pdf',
      image: { type: 'jpeg', quality: 1 },
      // pagebreak: { avoid: "tr", mode: "css", before: "#nextpage1", after: "1cm" },
      html2canvas: { scale: 3 },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait',
        autoPaging: 'text', // Crucial for handling text flow across pages
      },
      margin: 0.25, // Set appropriate margins
    };

    let aux = document.createElement('div');
    aux.innerHTML = html;

    let chartsImgElement: HTMLImageElement = aux.querySelector('#charts');
    if (chartsImgElement) {
      chartsImgElement.src = charts;
    } else {
      console.error(
        'El elemento con ID "charts" no se encontró dentro de aux.'
      );
    }

    html2pdf().from(aux).set(pdfOpt).save();
  }
}
