import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})
export class NotfoundComponent implements OnInit{ 
  private readonly actRoute = inject(ActivatedRoute);
  private readonly location = inject(Location);

  public url!: string;

  ngOnInit(): void {
    // @ts-ignore
    console.log(this.actRoute.url.value);
    this.url = '';
    // @ts-ignore
    this.actRoute.url.value.forEach(
      (segment) => {
        console.log(segment.path);
        this.url = this.url + `/${segment.path}`
      }
    );
  }

  back() {
    this.location.back()
  }
}