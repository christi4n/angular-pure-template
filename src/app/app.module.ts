import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Implement Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Router } from '@angular/router'

// Import ng-bootstrap-form-validation to display error messages in forms
import { NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import {CUSTOM_ERRORS} from "./custom-errors";

/* Import custom module */
import { LayoutModule } from './shared/layout/layout.module';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ComponentsComponent } from './pages/components/components.component';
import { AboutComponent } from './pages/about/about.component';
import { DownloadComponent } from './pages/download/download.component';
import { ExternalLinkDirective } from './external-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent,
    ComponentsComponent,
    AboutComponent,
    DownloadComponent,
    ExternalLinkDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LayoutModule,
    RouterModule,
    FormsModule, // Needed if you need to use forms inside components
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
