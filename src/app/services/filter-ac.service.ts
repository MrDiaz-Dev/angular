import { Injectable } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Injectable({
  providedIn: 'root',
})
export class FilterACService {
  constructor() {}

  filterObjectsAC(
    event: AutoCompleteCompleteEvent,
    array: any[],
    campo: string
  ) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (array as any[]).length; i++) {
      let objeto = (array as any[])[i];
      if (objeto[campo] != null) {
        if (objeto[campo].toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(objeto);
        }
      }
    }

    return filtered;
  }
}
