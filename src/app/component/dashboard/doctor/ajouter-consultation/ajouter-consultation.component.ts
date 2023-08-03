import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajouter-consultation',
  templateUrl: './ajouter-consultation.component.html',
  styleUrls: ['./ajouter-consultation.component.css']
})
export class AjouterConsultationComponent implements OnInit {
form !:FormGroup;

title !: string;
  nom !: string;
raisons!:string;
 traitement !: string;
 date!:string;
  id !: string;
  buttonName !: string;
constructor(private fb:FormBuilder,
  @Inject(MAT_DIALOG_DATA) data:any,
  private dialogRef : MatDialogRef<AjouterConsultationComponent>
  ){
    this.buttonName=data.buttonName
    this.title=data.title
    this.id=data.id
    this.nom=data.nom
    this.raisons=data.raisons
    this.date=data.date
    this.traitement=data.traitement
    
    
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.id, []],
      nom : [this.nom, [Validators.required]],
      raisons : [this.raisons, [Validators.required, Validators.email]],
      traitement : [this.traitement, [Validators.required, Validators.email]],
      date : [this.date, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],

    })
  }
  enregistrer(){
    this.dialogRef.close(this.form.value);
  }
  annuler(){
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close(this.form.value);

    
  }
}
