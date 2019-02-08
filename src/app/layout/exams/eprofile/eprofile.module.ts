import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EprofileComponent } from './eprofile.component';

import { EprofileRoutingModule } from './eprofile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EprofileRoutingModule
  ],
  declarations: [EprofileComponent]
})
export class EprofileModule { }
