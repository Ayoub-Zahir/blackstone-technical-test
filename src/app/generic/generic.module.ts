import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRoutingModule } from './generic-routing.module';
import { GenericComponent } from './generic.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GenericComponent
  ],
  imports: [
    CommonModule,
    GenericRoutingModule,
    SharedModule
  ]
})
export class GenericModule { }
