import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    standalone: true,
    imports: [BreadcrumbModule]
})
export class BreadcrumbsComponent implements OnInit{

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public segmentos: string[];

  public breadcrumbItems: MenuItem[];


  ngOnInit(): void {
    this.segmentos = this.activatedRoute.snapshot.url.map(segmento => segmento.path);
    console.log(this.segmentos);
    this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Electronics' });
        this.breadcrumbItems.push({ label: 'Computer' });
        this.breadcrumbItems.push({ label: 'Notebook' });
        this.breadcrumbItems.push({ label: 'Accessories' });
        this.breadcrumbItems.push({ label: 'Backpacks' });
        this.breadcrumbItems.push({ label: 'Item' });

    this.activatedRoute.data.subscribe(params => {
      console.log(params);
    });

    this.router.events.subscribe((event: any) => {
      const url = event.routerEvent.urlAfterRedirects;
      console.log(event.routerEvent.urlAfterRedirects)
    })
  }
}
