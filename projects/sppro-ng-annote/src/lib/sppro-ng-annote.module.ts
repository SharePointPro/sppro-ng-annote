import { NgModule } from '@angular/core';
import { NgAnnoteComponent } from './ng-annote/ng-annote.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorPhotoshopModule } from 'ngx-color/photoshop'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgAnnoteComponent,
    ToolbarComponent],
  imports: [
    FontAwesomeModule,
    ColorPhotoshopModule,
    CommonModule
  ],
  exports: [NgAnnoteComponent]
})
export class SpproNgAnnoteModule { }
