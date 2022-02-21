import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

const userRoutes: Routes = [
  {
    path: 'users',
    children: [
      { path: '', component: UsersComponent }
    ]
  }
];

export const UserRouting = RouterModule.forChild(userRoutes);