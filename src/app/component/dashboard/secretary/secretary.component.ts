import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent {
  constructor(private route:Router){
    
  }
  navigate(){
    this.route.navigate(['/secretary/rendezvous'])
  }

}
