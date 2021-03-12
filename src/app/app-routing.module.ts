import { NgModule } from '@angular/core';

// Modulos 
import { PagesRoutingModule } from './pages/pages.routing';

import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/aut.routing';


const routes: Routes = [
    
    { path: '', redirectTo: 'dashboard',  pathMatch: 'full'},
    { path: '**', component: NopagefoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot( routes ),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }