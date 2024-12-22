import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { FieldsetModule } from 'primeng/fieldset';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SkeletonModule } from 'primeng/skeleton';
import { CalendarModule } from 'primeng/calendar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { AutoFocusModule } from 'primeng/autofocus';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';  
import { SplitterModule } from 'primeng/splitter';
import { EditorModule } from 'primeng/editor';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { SidebarModule } from 'primeng/sidebar';
import { ChartModule } from 'primeng/chart';
import { SliderModule } from 'primeng/slider';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { GridstackModule } from 'gridstack/dist/angular';
import { ContextMenuModule } from 'primeng/contextmenu';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    TagModule,
    ChipModule,
    SliderModule,
    CommonModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    MultiSelectModule,
    FieldsetModule,
    AutoCompleteModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
    RippleModule,
    SkeletonModule,
    CalendarModule,
    SplitButtonModule,
    MenuModule,
    BreadcrumbModule,
    TimelineModule,
    CardModule,
    AutoFocusModule,
    PanelModule,
    AccordionModule,
    TabViewModule,
    DividerModule,
    SplitterModule,
    EditorModule,
    ImageModule,
    AvatarModule,
    AvatarGroupModule,
    PanelMenuModule,
    StepsModule,
    SidebarModule,
    GridstackModule,
    ChartModule,
    ProgressBarModule,
    ContextMenuModule,
    HighlightJsModule,
    TooltipModule,
    ProgressSpinnerModule,
    InputMaskModule,
  ],
  providers: [MessageService, ConfirmationService, MessagesModule],
})
export class PrimeNgModule {}
