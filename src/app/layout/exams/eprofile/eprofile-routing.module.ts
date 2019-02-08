import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EprofileComponent } from './eprofile.component';

const routes: Routes = [{
	path:'' , component:EprofileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EprofileRoutingModule { }
