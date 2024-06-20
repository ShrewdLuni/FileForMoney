import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CreateComponent } from './features/create/create.component';
import { OrdersComponent } from './features/orders/orders.component';
import { ProfileComponent } from './features/profile/profile.component';

import { PaymentComponent } from './features/payment/payment.component';
import { ErrorComponent } from './features/error/error.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarLayoutComponent } from './shared/components/navbarLayout/navbarLayout.component';


export const routes: Routes = [
    { path: '', component: NavbarLayoutComponent,children: [{ path: '', component: HomeComponent },]},
    { path: 'dashboard', component: NavbarLayoutComponent,children: [{ path: '', component: DashboardComponent },]},
    { path: 'create', component: NavbarLayoutComponent,children: [{ path: '', component: CreateComponent },]},
    { path: 'orders', component: NavbarLayoutComponent,children: [{ path: '', component: OrdersComponent },]},
    { path: 'profile', component: NavbarLayoutComponent,children: [{ path: '', component: ProfileComponent },]},

    { path: 'payment', component: PaymentComponent },
    { path: '**', component: ErrorComponent },//fix: router
];
