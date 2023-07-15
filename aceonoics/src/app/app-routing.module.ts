import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: '/users' },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },

  { path: '', pathMatch: 'full', redirectTo: '/user' },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },

  { path: '', pathMatch: 'full', redirectTo: '/create-user' },
  {
    path: 'create-user',
    loadChildren: () =>
      import('./pages/create-user/create-user.module').then(
        (m) => m.CreateUserModule
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: '/update-user' },
  {
    path: 'update-user',
    loadChildren: () =>
      import('./pages/update-user/update-user.module').then(
        (m) => m.UpdateUserModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
