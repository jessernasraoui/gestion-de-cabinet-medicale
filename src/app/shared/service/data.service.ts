import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs :AngularFirestore) {}
  ajouterConsultation(consultation:any){
    consultation.id=this.afs.createId();
    return this.afs.collection('/consultations').add(consultation);
  }
  getAllConsultations(){
    return this.afs.collection('/consultations').snapshotChanges();
  }
  modifierConsultation(consultation:any){
    return this.afs.collection('/consultations').doc(consultation.id).update(consultation);

  }
  supprimerConsultation(id:string){
    return this.afs.collection('/consultations').doc(id).delete();

  }
  getConsultationById(id:string)
{
  return this.afs.collection('consultations').doc(id).valueChanges();
}
}
