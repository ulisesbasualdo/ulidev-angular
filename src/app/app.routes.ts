import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component : HomeComponent},
    { path: 'servicios', component : ServicesComponent},
    { path: 'portfolio', component : PortfolioComponent},
    { path: 'contacto', component : ContactComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
