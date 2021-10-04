import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagermentComponent } from './user-managerment.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagermentComponent, // layout component
    children: [
      {
        path: '',
        component: UserListComponent,
      },

      // {path:"add",component:AddUserComponent}
      // {path:"update", component:UpdateUserComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagermentRoutingModule {}
