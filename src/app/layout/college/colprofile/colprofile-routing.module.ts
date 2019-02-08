import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColprofileComponent } from './colprofile.component';
const routes: Routes = [{
	path:'' , component:ColprofileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColprofileRoutingModule { }
