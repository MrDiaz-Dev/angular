import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  private pageModeBS = new BehaviorSubject<any>({});
  readonly pageMode = this.pageModeBS.asObservable();

  private pageModeControlerVisibleBS = new BehaviorSubject<any>({});
  readonly pageModeControlerVisible =
    this.pageModeControlerVisibleBS.asObservable();

  constructor(router: Router) {
    // let context = JSON.parse(sessionStorage.getItem('context'));
    // this.setPageMode(null);
    this.setPageModeControlerVisible(false);

    let contextRecovered = JSON.parse(sessionStorage.getItem('context'));

    if (contextRecovered) {
      this.setPageMode(contextRecovered.pageMode);
      this.setPageModeControlerVisible(contextRecovered.pageModeControlerVisible);
    }

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('event', event);
        // detectar si el primer segmento de la url es 'external-data'
        let url = event['url'];
        let urlSegments = url.split('/');
        let firstSegment = urlSegments[1];
        // this.setPageMode(null);
        if (firstSegment === 'tms' || firstSegment === 'tms-menu') {
          this.setPageMode('TMS');
          console.log('es TMS');
        } else if (
          firstSegment === 'warehouse' ||
          firstSegment === 'warehouse-menu'
        ) {
          this.setPageMode('Warehouse');
          console.log('es Warehouse');
        } else if (
          firstSegment === 'external-data' ||
          firstSegment === 'external-data-menu'
        ) {
          this.setPageMode('External Data');
          console.log('es external');
        } else if (firstSegment === 'inventory') {
          this.setPageMode('Inventory');
          console.log('es Inventory');
        }
      });
  }

  setPageMode(pageMode: string) {
    this.pageModeBS.next(pageMode);
    sessionStorage.setItem(
      'context',
      JSON.stringify({
        pageMode: pageMode,
        pageModeControlerVisible: false,
      })
    );
  }

  setPageModeControlerVisible(visible: boolean) {
    this.pageModeControlerVisibleBS.next(visible);
  }
}
