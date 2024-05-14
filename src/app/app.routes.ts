import { Routes } from '@angular/router';
import { CreateComponent } from './features/create/create.component';
import { ErrorComponent } from './features/error/error.component';

export const routes: Routes = [
    { path: '', component: CreateComponent },
    { path: '**', component: ErrorComponent },//fix: router
];
