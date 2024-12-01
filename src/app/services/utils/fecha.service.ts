import { Injectable } from '@angular/core';

import { utcToZonedTime, format } from 'date-fns-tz';

@Injectable({
  providedIn: 'root',
})
export class FechaService {
  constructor() {}

  formatFecha(fecha: string, tipo = 1): string {
    // console.log('LA FECHA');
    // console.log(fecha);
    if (!fecha || fecha == null || fecha == undefined || fecha === '')
      return 'N/A';
    const fechaAbsolut = this.fechaAbsoluta(fecha);

    if (fechaAbsolut === null) return 'N/A';

    if (tipo == 2) return format(fechaAbsolut, 'yyyy-MM-dd');
    return format(fechaAbsolut, 'dd/MM/yyyy');
  }

  fechaAbsoluta(fecha: string): Date | null {
    // console.log('LA FECHA ABSOLUTA => ', fecha);
    if (!fecha || fecha == null || fecha == undefined || fecha === '')
      return null;

    // @ts-ignore
    if (fecha instanceof Date) return fecha;

    let partesFecha;
    let partesHora;
    if (fecha.includes('T')) {
      partesFecha = fecha?.split('T')[0]?.split('-')
        ? fecha?.split('T')[0]?.split('-')
        : null;
      partesHora = fecha?.split('T')[1]?.split(':')
        ? fecha?.split('T')[1]?.split(':')
        : null;
    } else {
      partesFecha = fecha?.split(' ')[0]?.split('-')
        ? fecha?.split(' ')[0]?.split('-')
        : null;
      partesHora = fecha?.split(' ')[1]?.split(':')
        ? fecha?.split(' ')[1]?.split(':')
        : null;
    }
    const ano = partesFecha ? parseInt(partesFecha[0]) : null;
    const mes = partesFecha ? parseInt(partesFecha[1]) - 1 : null;
    const dia = partesFecha ? parseInt(partesFecha[2]) : null;
    const hora = partesHora ? parseInt(partesHora[0]) : 0;
    const minutos = partesHora ? parseInt(partesHora[1]) : 0;

    // console.log(`${dia} / ${mes + 1} / ${ano} - ${hora}:${minutos}`);

    if (ano === null || mes === null || dia === null) return null;

    const laFechaAbsoluta = new Date(ano, mes, dia, hora, minutos);

    // console.log(laFechaAbsoluta);
    return laFechaAbsoluta;
  }

  fechaAbsolutaToString(fecha: Date): string | null {
    // console.log('LA FECHA ABSOLUTA A ENVIAR => ', fecha);
    if (!fecha || fecha == null || fecha == undefined) return null;
    // console.log('LA FECHA ABSOLUTA A ENVIAR');

    if (typeof fecha === 'string') return fecha;

    const ano = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const laFechaAbsolutaToSend = `${ano}-${mes}-${dia}T${hora}:${minutos}:00+00:00`;
    // console.log(laFechaAbsolutaToSend);

    return laFechaAbsolutaToSend;
  }

  validarFechaFin(fechaInicio, fechaFin) {
    // Convertir las fechas a milisegundos usando Date.parse()

    if (fechaInicio === null || fechaInicio === undefined || fechaInicio === '')
      return false;
    if (fechaFin === null || fechaFin === undefined || fechaFin === '')
      return false;

    const fechaInicioMs = fechaInicio.getTime();
    const fechaFinMs = fechaFin.getTime();

    // console.log('las fechas son validas?', fechaFinMs ,' > ', fechaInicioMs , ' => ', fechaFinMs > fechaInicioMs);

    // Comparar las fechas
    return fechaFinMs > fechaInicioMs;
  }

  formatDatesBeforeSend(body) {
    console.log('body before dates', body);

    for (const key in body) {
      if (Object.prototype.hasOwnProperty.call(body, key)) {
        const element = body[key];
        if (element instanceof Date) {
          body[key] = this.fechaAbsolutaToString(element);
        }
      }
    }

    console.log('body after dates', body);

    return body;
  }

  fechaAbosultaOnLoad(body) {
    console.log('before dates', body);

    for (const key in body) {
      if (Object.prototype.hasOwnProperty.call(body, key)) {
        const element = body[key];
        // verificar que el valor sea un string y que tenga la estructura de una fecha
        if (
          typeof element === 'string' &&
          element.includes('T') &&
          element.includes('-') &&
          element.includes(':')
        ) {
          body[key] = this.fechaAbsoluta(element);
        }
      }
    }

    console.log('after dates', body);

    return body;
  }
}
