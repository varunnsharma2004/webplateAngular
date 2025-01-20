import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-gard.guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'  
    },
    {
        path:'login',
        loadComponent:()=>import('./auth/login/login.component').then(m=>m.LoginComponent)
    },
    {
        path:'Profile',
        loadComponent:()=>import('./pages/profile/profile.component').then(m=>m.ProfileComponent),
        canActivate:[AuthGuard]
    },
    {
        path:"Users",
        loadComponent:()=>import('./pages/users/users.component').then(m=>m.UsersComponent),
        canActivate:[AuthGuard]
    },
    {
        path:"product",
        loadComponent:()=>import('./pages/product/product.component').then(m=>m.ProductComponent),
        canActivate:[AuthGuard]
    }
];
