import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class FechaService {
  constructor() {}

  formatFechaString(fecha: string | Date, tipo = 1, na = true): string {
    if (
      !fecha ||
      fecha == null ||
      fecha == undefined ||
      fecha === '' ||
      fecha === ''
    ) {
      if (na) return '';
      return '';
    }

    // si la fecha es un objeto Date entonces la convertimos a string usando el fechaAbsolutaToString
    if (typeof fecha === 'object') {
      fecha = this.fechaAbsolutaToString(fecha)!;
    }

    let partesFecha;
    let partesHora;

    // si la fecha fue formateada antes
    // entonces la fecha viene en formato dd/MM/yyyy y debemos convertirla a yyyy-MM-dd
    if (fecha.includes('/')) {
      fecha = fecha.replace('/', '-').replace('/', '-');
      // ahora la fecha esta en formato dd-MM-yyyy
      // debe estar en formato yyyy-MM-dd
      partesFecha = fecha.split('-');
      let ano = parseInt(partesFecha[2]);
      let mes = parseInt(partesFecha[1]);
      let dia = parseInt(partesFecha[0]);
      fecha = `${ano}-${mes}-${dia}`;
      partesFecha = fecha.split('-');
      partesHora = null;
    } else if (fecha.includes('T')) {
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

    // console.log('PARTES DE LA FECHA => ', partesFecha);

    const ano = partesFecha ? parseInt(partesFecha[0]) : null;
    const mes = partesFecha ? parseInt(partesFecha[1]) - 1 : null;
    const dia = partesFecha ? parseInt(partesFecha[2]) : null;

    // if (tipo === 2) return formatDate(fechaAbsolut, 'dd-MM-yyyy', 'es_ES');
    // return formatDate(fechaAbsolut, 'dd/MM/yyyy', 'es_ES');

    if (!!!ano || !!!mes || !!!dia) return '';
    if (tipo === 2) return `${dia}-${mes + 1}-${ano}`;
    if (tipo === 3) {
      const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ];
      return `${dia} de ${meses[mes]} del ${ano}`;
    }
    return `${dia}/${mes + 1}/${ano}`;
  }

  // ------------------

  fechaAbsoluta(fecha: string): Date | null {
    // console.log('--FECHA ABSOLUTA-------------------------');
    // console.log('LA FECHA A PROCESAR => ', fecha);
    if (
      !fecha ||
      fecha == null ||
      fecha == undefined ||
      fecha === '' ||
      fecha === ''
    )
      return null;

    if (typeof fecha === 'object') return fecha;

    let partesFecha;
    let partesHora;

    // si la fecha fue formateada antes
    // entonces la fecha viene en formato dd/MM/yyyy y debemos convertirla a yyyy-MM-dd
    if (fecha.includes('/')) {
      fecha = fecha.replace('/', '-').replace('/', '-');
      // ahora la fecha esta en formato dd-MM-yyyy
      // debe estar en formato yyyy-MM-dd
      partesFecha = fecha.split('-');
      let ano = parseInt(partesFecha[2]);
      let mes = parseInt(partesFecha[1]);
      let dia = parseInt(partesFecha[0]);
      fecha = `${ano}-${mes}-${dia}`;
      partesFecha = fecha.split('-');
      partesHora = null;
    } else if (fecha.includes('T')) {
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

    // console.log('PARTES DE LA FECHA => ', partesFecha);

    const ano = partesFecha ? parseInt(partesFecha[0]) : null;
    const mes = partesFecha ? parseInt(partesFecha[1]) - 1 : null;
    const dia = partesFecha ? parseInt(partesFecha[2]) : null;
    const hora = partesHora ? parseInt(partesHora[0]) : 0;
    const minutos = partesHora ? parseInt(partesHora[1]) : 0;

    // console.log(
    //   `${dia} / ${mes ? mes + 1 : mes} / ${ano} - ${hora}:${minutos}`
    // );

    if (ano === null || mes === null || dia === null) return null;

    const laFechaAbsoluta = new Date(ano, mes, dia, hora, minutos);
    // console.log('LA FECHA ABSOLUTA => ', laFechaAbsoluta);
    // console.log(
    //   '-------------------------------------------------------------'
    // );
    return laFechaAbsoluta;
  }

  fechaAbsolutaToString(fecha: Date): string | null {
    // console.log('LA FECHA ABSOLUTA A ENVIAR => ', fecha);
    if (!fecha || fecha == null || fecha == undefined) return null;
    if (typeof fecha === 'string') return fecha;
    // console.log('LA FECHA ABSOLUTA A ENVIAR');
    const ano = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const laFechaAbsolutaToSend = `${ano}-${mes}-${dia}T${hora}:${minutos}:00+00:00`;
    // console.log('EL STRING A ENVIAR => ', laFechaAbsolutaToSend);

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
}
