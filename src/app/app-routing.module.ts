import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuards } from './guards/auth.guards';
import { RegisterGuard } from './guards/register.guard';

const routes: Routes = [
    {path: '', component: DashboardComponent, canActivate: [AuthGuards]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]},
    {path: 'client/add', component: AddClientComponent, canActivate: [AuthGuards]},
    {path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuards]},
    {path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuards]},
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuards]},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuards, RegisterGuard]
})
export class AppRoutingModule { }
