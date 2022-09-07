import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardGaleryComponent } from './components/dashboard-galery/dashboard-galery.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    FormInputComponent,
    DashboardCardComponent,
    DashboardGaleryComponent,
    LoginFormComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
