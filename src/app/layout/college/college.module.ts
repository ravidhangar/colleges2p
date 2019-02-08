import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeComponent } from './college.component';
import { CollegeRoutingModule } from './college-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CollegeRoutingModule
  ],
  declarations: [CollegeComponent]
})
export class CollegeModule { }
