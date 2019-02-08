import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeInfoComponent } from './college-info.component';
import { CollegeInfoRoutingModule } from './college-info-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CollegeInfoRoutingModule
  ],
  declarations: [CollegeInfoComponent]
})
export class CollegeInfoModule { }
