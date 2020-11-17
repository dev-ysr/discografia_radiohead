import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { DiscosComponent } from './components/discos/discos.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'discos', component: DiscosComponent },
    // { path: '**', component: HomeComponent },
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
