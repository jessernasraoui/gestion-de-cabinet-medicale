import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AjouterConsultationComponent } from '../ajouter-consultation/ajouter-consultation.component';
import { DataService } from 'src/app/shared/service/data.service';
import { Consultation } from 'src/app/shared/model/consultation';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DeleteConsultationComponent } from '../delete-consultation/delete-consultation.component';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit  {
  form !:FormGroup;

   
   consultationArr : Consultation[]=[];
   displayedColumns = [ 'nom',  'raisons', 'traitement','date','action'];
  dataSource!: MatTableDataSource<Consultation>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   consultobj:Consultation={ id:'',
    nom : '',
    maladie:'',
    traitement:'', date:''}
id!:string;
     nom !: string;
     maladie!:string;
      traitment !: string;
      date!:string;
  constructor(public dialog : MatDialog,
    private dataApi:DataService,
    private router:Router){  }
    resetForm() {
      this.id = '';
      this.nom = '';
      this.maladie = '';
      this.traitment = '';
      this.date = '';
    }
   
     
  ngOnInit(): void {
    this.getAllConsultations();
  }
ajouterConsultation() {
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus=false;
  dialogConfig.data={
    title:'Nouveau Consultation',
    buttonName:'Ajouter'
  }
  const dialogRef= this.dialog.open(AjouterConsultationComponent,dialogConfig )
  dialogRef.afterClosed().subscribe(data =>{
    if(data){
      this.dataApi.ajouterConsultation(data)
    }
  })
    }
    modifierConsultation(row:any) {
      if(row.id==null||row.nom==null){
        return;
      }
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=false;
      dialogConfig.autoFocus=false;
      dialogConfig.data=row;
      dialogConfig.data.title="Modifier Consultation"
      dialogConfig.data.buttonName="Modifier"

      const dialogRef= this.dialog.open(AjouterConsultationComponent,dialogConfig )
      dialogRef.afterClosed().subscribe(data =>{
        if(data){
          this.dataApi.modifierConsultation(data)
        }
      })
        }
       supprimerConsultation(row:any) {
          const dialogConfig=new MatDialogConfig();
          dialogConfig.disableClose=false;
          dialogConfig.autoFocus=false;
          dialogConfig.data={
            title:'Supprimer Consultation',
            buttonName:'Supprimer'
          }
          const dialogRef= this.dialog.open(DeleteConsultationComponent,dialogConfig )
          dialogRef.afterClosed().subscribe(data =>{
            if(data){
              this.dataApi.supprimerConsultation(row.id)
            }
          })
            }
           detailConsultation(row:any){
window.open('dashboard/consultations/'+row.id,'_blank')
            }
    getAllConsultations(){
      this.dataApi.getAllConsultations().subscribe(res =>{
        this.consultationArr=res.map((e:any)=>{
          const data=e.payload.doc.data();
          data.id=e.payload.doc.id;
          return data;
        })
        this.dataSource=new MatTableDataSource(this.consultationArr)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }
    applyFilter(filterValue: any) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }

}




  
 
 








