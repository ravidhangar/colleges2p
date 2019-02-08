import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamoneComponent } from './examone.component';

import { ExamoneRoutingModule } from './examone-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExamoneRoutingModule
  ],
  declarations: [ExamoneComponent]
})
export class ExamoneModule { }
