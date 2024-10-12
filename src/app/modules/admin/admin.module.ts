import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/DemoNgZorroAntdModule';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostRoomComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class AdminModule { }
