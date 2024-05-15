import { Routes } from '@angular/router';
import { CreateComponent } from './features/create/create.component';
import { ErrorComponent } from './features/error/error.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: CreateComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: ErrorComponent },//fix: router
];
