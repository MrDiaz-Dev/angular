import { Component, OnInit, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, ConfirmDialogModule, ToastModule],
})
export class AppComponent implements OnInit {
  private readonly primengConfig = inject(PrimeNGConfig);
  private readonly layoutService = inject(LayoutService);

  color = localStorage.getItem('colorScheme') || 'light';

  theme = localStorage.getItem('theme') || 'saga-purple';

  ngOnInit() {
    this.primengConfig.ripple = true;

    //optional configuration with the default configuration
    this.layoutService.config = {
      ripple: false, //toggles ripple on and off
      inputStyle: 'outlined', //default style for input elements
      menuMode: 'static', //layout mode of the menu, valid values are "static" and "overlay"
      colorScheme: 'light', //color scheme of the template, valid values are "light" and "dark"
      theme: 'saga-purple', //default component theme for PrimeNG
      scale: 14, //size of the body font size to scale the whole application
    };

    this.primengConfig.setTranslation({
      accept: 'Aceptar',
      reject: 'Cancelar',
      dayNames: [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      today: 'Hoy',
      clear: 'Borrar',
      addRule: 'Agregar regla',
      am: 'AM',
      apply: 'Aplicar',
      cancel: 'Cancelar',
      choose: 'Escoger',
      chooseDate: 'Elige fecha',
      chooseMonth: 'Elige el mes',
      chooseYear: 'Elige Año',
      contains: 'Contenga',
      dateAfter: 'Fecha después de',
      dateBefore: 'Fecha antes de',
      dateFormat: 'dd/mm/yy',
      dateIs: 'Fecha igual a',
      dateIsNot: 'Fecha diferente a',
      emptyFilterMessage: 'Sin opciones disponibles',
      emptyMessage: 'No se han encontrado resultados',
      emptySearchMessage: 'Sin opciones disponibles',
      emptySelectionMessage: 'Ningún artículo seleccionado',
      endsWith: 'Termine con',
      equals: 'Igual a',
      fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      firstDayOfWeek: 1,
      gt: 'Mayor que',
      gte: 'Mayor o igual a',
      lt: 'Menor que',
      lte: 'Menor o igual a',
      matchAll: 'Coincidir todo',
      matchAny: 'Coincidir con cualquiera',
      medium: 'Medio',
      nextDecade: 'Próxima década',
      nextHour: 'próxima hora',
      nextMinute: 'Siguiente minuto',
      nextMonth: 'Próximo mes',
      nextSecond: 'Siguiente segundo',
      nextYear: 'El próximo año',
      noFilter: 'Sin filtro',
      notContains: 'No contenga',
      notEquals: 'Diferente a',
      passwordPrompt: 'Escriba una contraseña',
      pending: 'Pendiente',
      pm: 'PM',
      prevDecade: 'Década anterior',
      prevHour: 'Hora anterior',
      prevMinute: 'Minuto anterior',
      prevMonth: 'Mes anterior',
      prevSecond: 'Anterior Segundo',
      prevYear: 'Año anterior',
      removeRule: 'Eliminar regla',
      searchMessage: '{0} resultados están disponibles',
      selectionMessage: '{0} elementos seleccionados',
      startsWith: 'Comience con',
      strong: 'Fuerte',
      upload: 'Subir',
      weak: 'Débil',
      weekHeader: 'Sem',

      aria: {
        cancelEdit: 'Cancelar editado',
        close: 'Cerrar',
        collapseRow: 'Reducir Fila',
        editRow: 'Editar fila',
        expandRow: 'Expandir Fila',
        falseLabel: 'Falso',
        filterConstraint: 'Restricción de filtro',
        filterOperator: 'Operador de filtro',
        firstPageLabel: 'Primera Página',
        gridView: 'Vista de cuadrícula',
        hideFilterMenu: 'Ocultar menú del filtro',
        jumpToPageDropdownLabel: 'Ir al menú desplegable de página',
        jumpToPageInputLabel: 'Ir a la entrada de página',
        lastPageLabel: 'Última Página',
        listView: 'Vista de lista',
        moveAllToSource: 'Mover todo al origen',
        moveAllToTarget: 'Mover todo al objetivo',
        moveBottom: 'Desplazarse hacia abajo',
        moveDown: 'Bajar',
        moveTop: 'Mover arriba',
        moveToSource: 'Mover al origen',
        moveToTarget: 'Mover al objetivo',
        moveUp: 'Subir',
        navigation: 'Navegación',
        next: 'Siguiente',
        nextPageLabel: 'Siguiente Página',
        nullLabel: 'No seleccionado',
        pageLabel: 'Página {page}',
        previous: 'Anterior',
        previousPageLabel: 'Página Anterior',
        removeLabel: 'Eliminar',
        rotateLeft: 'Girar a la izquierda',
        rotateRight: 'Girar a la derecha',
        rowsPerPageLabel: 'Filas por página',
        saveEdit: 'Guardar editado',
        scrollTop: 'Desplazarse hacia arriba',
        selectAll: 'Seleccionar todos',
        selectRow: 'Seleccionar fila',
        showFilterMenu: 'Mostrar menú del filtro',
        slide: 'Deslizar',
        slideNumber: '{slideNumber}',
        star: '1 estrella',
        stars: '{star} estrellas',
        trueLabel: 'Verdadero',
        unselectAll: 'Deseleccionar todos',
        unselectRow: 'Desmarcar fila',
        zoomImage: 'Ampliar imagen',
        zoomIn: 'Ampliar',
        zoomOut: 'Reducir',
      },
    });
  }
}
