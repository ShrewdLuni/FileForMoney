import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CreateComponent } from './features/create/create.component';
import { OrdersComponent } from './features/orders/orders.component';
import { ProfileComponent } from './features/profile/profile.component';

import { PaymentComponent } from './features/payment/payment.component';
import { ErrorComponent } from './features/error/error.component';
import { HomeComponent } from './features/home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreateComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'profile', component: ProfileComponent },
    
    { path: 'payment', component: PaymentComponent },
    { path: '**', component: ErrorComponent },//fix: router
];
