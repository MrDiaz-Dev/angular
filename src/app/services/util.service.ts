import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  controlAndFormatIRIs(body: any): any {
    let newBody = structuredClone(body);

    for (const property in newBody) {
      if (newBody[property] != null) {
        let newCampo;
        switch (property) {
          case 'idPais':
            newCampo = newBody[property].toString().includes('/')
              ? newBody[property]
              : '/api/paises/' + newBody[property];
            newBody[property] = newCampo;
            break;
          case 'idTipo':
            newCampo = newBody[property].toString().includes('/')
              ? newBody[property]
              : '/api/tipos-trabajadores/' + newBody[property];
            newBody[property] = newCampo;
            break;
          default:
            newBody; // do nothing
        }
      } else {
        // delete newBody[property];
        newBody[property] = null;
      }
    }

    // console.log('newBody => ', newBody);

    return newBody;
  }

  controlTypes(body: any): any {
    let newBody = structuredClone(body);

    for (const property in newBody) {
      if (newBody[property] != null) {
        switch (property) {
          case 'telefono1':
            if (typeof newBody[property] === 'string') {
              // convertir un string '999 999 999' en un entero 999999999
              // o un strinf '999 9__ ___' en un entero 9999
              // o un string '99 99999999 99' en un entero 999999999999
              // o un string '99 999999__ __' en un entero 99999999
              newBody[property] = parseInt(
                newBody[property].replace(/\D/g, ''),
              );
            }
            break;
          default:
            newBody; // do nothing
        }
      } else {
        // delete newBody[property];
        newBody[property] = null;
      }
    }

    // console.log('newBody => ', newBody);

    return newBody;
  }
}
