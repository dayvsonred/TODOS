
import { TransLoginComponent } from './trans-login/trans-login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ClienteComponent } from './cliente/cliente.component';



const appRoutes: Routes = [
  { path: 'cliente', component: ClienteComponent }, //canActivate: [AuthGuard]
  { path: 'loginFast/:toke/:rota', component: TransLoginComponent  },
  { path: '', pathMatch: 'full', component: ClienteComponent  },
  { path: 'signin', component: TransLoginComponent  },
  { path: '**', redirectTo: 'loginFast' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
