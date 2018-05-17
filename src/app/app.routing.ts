import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AddNewClientComponent} from './components/add-new-client/add-new-client.component';

const appRoutes: Routes = [{
  path : '',
  redirectTo: '/login',
  pathMatch: 'full'
},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'client',
    component: AddNewClientComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
