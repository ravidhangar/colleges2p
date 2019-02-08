import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColprofileComponent } from './colprofile.component';
import { ColprofileRoutingModule } from './colprofile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ColprofileRoutingModule
  ],
  declarations: [ColprofileComponent]
})
export class ColprofileModule { }
