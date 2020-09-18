import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementComponent } from './element.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ElementComponent],
  imports: [
    CommonModule,
    ElementRoutingModule,
    SharedModule
  ]
})
export class ElementModule { }
