import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AjouterConsultationComponent } from '../ajouter-consultation/ajouter-consultation.component';

@Component({
  selector: 'app-delete-consultation',
  templateUrl: './delete-consultation.component.html',
  styleUrls: ['./delete-consultation.component.css']
})
export class DeleteConsultationComponent implements OnInit {

title!:string

  constructor(
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef : MatDialogRef<DeleteConsultationComponent>
    ){
      this.title=data.title
    }
  ngOnInit(): void {
  }

  annuler(){
    this.dialogRef.close();
  }
  supprimerConsultation(){
    const supprimerConsultation=true;
    this.dialogRef.close(supprimerConsultation)
  }
}
