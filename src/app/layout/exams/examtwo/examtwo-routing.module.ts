import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamtwoComponent } from './examtwo.component';
const routes: Routes = [{
	path:'' , component:ExamtwoComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamtwoRoutingModule { }
