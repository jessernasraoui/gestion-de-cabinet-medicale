import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { SecretaryComponent } from './component/dashboard/secretary/secretary.component';
import { MedicamentsComponent } from './component/dashboard/doctor/medicaments/medicaments.component';
import { CertificatComponent } from './component/dashboard/doctor/certificat/certificat.component';
import { ConsultationComponent } from './component/dashboard/doctor/consultation/consultation.component';
import { AjouterConsultationComponent } from './component/dashboard/doctor/ajouter-consultation/ajouter-consultation.component';
import { AddConsultComponent } from './component/dashboard/doctor/add-consult/add-consult.component';
import { DetailConsultationComponent } from './component/dashboard/doctor/detail-consultation/detail-consultation.component';
import { LoginComponent } from './component/dashboard/auth/login/login.component';
import { AuthguardGuard } from './shared/guard/authguard.guard';
import { RendezVousComponent } from './component/dashboard/secretary/rendez-vous/rendez-vous.component';

const routes: Routes = [
  
  {path : 'dashboard', children :
  [
    {path : 'medicament',component:MedicamentsComponent},
    {path : 'certificats', component:CertificatComponent},

    {path : 'consultations', component: ConsultationComponent},
    {path : 'consultations/:id', component: DetailConsultationComponent},

 
],canActivate:[AuthguardGuard] },
{path:'login',component:LoginComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path:'secretary',component:SecretaryComponent, children:[  {path:'rendezvous',component:RendezVousComponent}
]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
