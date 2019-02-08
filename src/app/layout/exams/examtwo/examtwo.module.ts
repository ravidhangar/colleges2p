import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamtwoComponent } from './examtwo.component';

import { ExamtwoRoutingModule } from './examtwo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExamtwoRoutingModule
  ],
  declarations: [ExamtwoComponent]
})
export class ExamtwoModule { }
