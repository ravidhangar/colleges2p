import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeInfoComponent } from './college-info.component';

const routes: Routes = [{
	path:'' , component: CollegeInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeInfoRoutingModule { }
