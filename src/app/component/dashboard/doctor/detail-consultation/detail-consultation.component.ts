import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-detail-consultation',
  templateUrl: './detail-consultation.component.html',
  styleUrls: ['./detail-consultation.component.css']
})
export class DetailConsultationComponent implements OnInit {
connsultationObj !:any;
  id!:any;
constructor(private route:ActivatedRoute,private dataApi:DataService){
  this.id=route.snapshot.paramMap.get('id');
}
  ngOnInit(): void {
    this.  getConsultationById()

  }
  getConsultationById()
  {
    this.dataApi.getConsultationById(this.id).subscribe(res =>{
      this.connsultationObj=res;
      console.log(this.connsultationObj)
    })

  }

}
