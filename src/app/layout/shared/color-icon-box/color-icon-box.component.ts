import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-icon-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="divClass"
      [ngStyle]="{
        'min-width': justIcon ? minWidth : '',
        'min-height': justIcon ? minHeight : '',
        'max-width': justIcon ? maxWidth : '',
        'max-height': justIcon ? maxHeight : '',
        'width': justIcon ? 'fit-content' : '',
        'font-size': fontSize,
      }"
      >
      @if (icon) {
        <i [class]="iClass" [ngClass]="{ 'pr-0': !justIcon }"></i>
      }
      @if (!justIcon) {
        <span [class]="spanClass"
          ><ng-content></ng-content
        ></span>
      }
    </div>
    `,
})
export class ColorIconBoxComponent implements OnInit {
  @Input() icon: string = null;
  @Input() justIcon: boolean = false;
  @Input() color: string = 'blue';
  @Input() minWidth: string = '2.5rem';
  @Input() minHeight: string = '2.5rem';
  @Input() maxWidth: string = '2.5rem';
  @Input() maxHeight: string = '2.5rem';
  // @Input() borderRadius: string = '0.5rem';
  @Input() fontSize: string = null;
  @Input() contentPading: string = null;
  @Input() contentPadingClass: string = 'p-2';

  divClass: string = `flex align-items-center justify-content-center bg-${this.color}-100 border-round`;
  iClass: string = `${this.icon} text-${this.color}-500 text-xl`;
  spanClass: string = `${this.contentPadingClass}`;

  ngOnInit(): void {
    this.divClass = `flex align-items-center justify-content-center bg-${this.color}-100 text-${this.color}-500 border-round`;
    this.iClass = `${this.icon} text-${this.color}-500 ${
      this.fontSize ? '' : 'text-xl'
    }
    ${this.justIcon ? '' : 'p-2'}`;
    this.spanClass = `${
      this.contentPading ? this.contentPading : this.contentPadingClass
    }`;
  }
}
