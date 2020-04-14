import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home';
import { AboutComponent } from './pages/about';
import { PricingComponent } from './pages/pricing';
import { ContactComponent } from './pages/contact';
import { ComponentsComponent } from './pages/components';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
