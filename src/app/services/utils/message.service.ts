import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

interface alert {
  severity: SweetAlertIcon;
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomMessageService {
  private readonly messageService = inject(MessageService);

  add(message: alert) {
    // let messageConfig: SweetAlertOptions = {
    //   title: `<strong>${message.summary}</strong>`,
    //   icon: message.severity,
    //   text: message.detail,
    //   showCloseButton: true,
    //   showConfirmButton: false,
    //   toast: true,
    //   position: 'top-right',
    //   timer: 4000,
    //   background: '#343e4d',
    //   color: '#ffffff',
    // };
    // Swal.fire(messageConfig);

    this.messageService.add({
      severity: message.severity,
      summary: message.summary,
      detail: message.detail,
    });
  }

  error(detail, summary = 'ERROR') {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
    });
  }

  success(detail, summary = 'SUCCESS') {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: detail,
    });
  }

  info(detail, summary = 'INFO') {
    this.messageService.add({
      severity: 'info',
      summary: summary,
      detail: detail,
    });
  }

  alert(detail, summary = 'ALERT') {
    this.messageService.add({
      severity: 'warn',
      summary: summary,
      detail: detail,
    });
  }
}
