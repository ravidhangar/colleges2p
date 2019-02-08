import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamoneComponent } from './examone.component';
const routes: Routes = [{
	path:'' , component:ExamoneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamoneRoutingModule { }
