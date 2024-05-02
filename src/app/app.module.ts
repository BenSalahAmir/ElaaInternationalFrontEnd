import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './BackOffice/Public/side-bar/side-bar.component';
import { TopHeaderComponent } from './BackOffice/Public/top-header/top-header.component';
import { FooterComponent } from './BackOffice/Public/footer/footer.component';
import { DashbordComponent } from './BackOffice/dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddContratComponent } from './BackOffice/Contrat/add-contrat/add-contrat.component';
import { ListContratComponent } from './BackOffice/Contrat/list-contrat/list-contrat.component';
import { UpdateContratComponent } from './BackOffice/Contrat/update-contrat/update-contrat.component';
import { SaveContratFromExelComponent } from './BackOffice/Contrat/save-contrat-from-exel/save-contrat-from-exel.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ListReservationComponent } from './BackOffice/Reservation/list-reservation/list-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopHeaderComponent,
    FooterComponent,
    DashbordComponent,
    AddContratComponent,
    ListContratComponent,
    UpdateContratComponent,
    SaveContratFromExelComponent,
    LoginComponent,
    RegisterComponent,
    ListReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule 

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
