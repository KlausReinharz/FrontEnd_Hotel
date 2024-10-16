import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { NgZorroAntdModule } from 'src/app/DemoNgZorroAntdModule';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,

  ]
})
export class CustomerModule { }
