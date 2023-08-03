import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { SecretaryComponent } from './component/dashboard/secretary/secretary.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ConsultationComponent } from './component/dashboard/doctor/consultation/consultation.component';
import { MedicamentsComponent } from './component/dashboard/doctor/medicaments/medicaments.component';
import { CertificatComponent } from './component/dashboard/doctor/certificat/certificat.component';
import { AjouterConsultationComponent } from './component/dashboard/doctor/ajouter-consultation/ajouter-consultation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFirestore}from '@angular/fire/compat/firestore';
import { AddConsultComponent } from './component/dashboard/doctor/add-consult/add-consult.component';
import { DeleteConsultationComponent } from './component/dashboard/doctor/delete-consultation/delete-consultation.component';
import { DetailConsultationComponent } from './component/dashboard/doctor/detail-consultation/detail-consultation.component';
import { LoginComponent } from './component/dashboard/auth/login/login.component';
import { RendezVousComponent } from './component/dashboard/secretary/rendez-vous/rendez-vous.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    SecretaryComponent,
    SidebarComponent,
    ConsultationComponent,
    MedicamentsComponent,
    CertificatComponent,
    AjouterConsultationComponent,
    AddConsultComponent,
    DeleteConsultationComponent,
    DetailConsultationComponent,
    LoginComponent,
    RendezVousComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AjouterConsultationComponent]
})
export class AppModule { }
