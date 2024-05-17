import { Routes } from '@angular/router';
import { CreateComponent } from './features/create/create.component';
import { ErrorComponent } from './features/error/error.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PaymentComponent } from './features/payment/payment.component';

export const routes: Routes = [
    { path: '', component: CreateComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'payment', component: PaymentComponent },
    { path: '**', component: ErrorComponent },//fix: router
];
