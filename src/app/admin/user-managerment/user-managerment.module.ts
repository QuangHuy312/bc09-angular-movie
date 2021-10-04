import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagermentRoutingModule } from './user-managerment-routing.module';
import { UserManagermentComponent } from './user-managerment.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserManagermentComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserManagermentRoutingModule
  ]
})
export class UserManagermentModule { }
