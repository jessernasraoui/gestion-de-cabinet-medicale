import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
errorMessage!:string;
form!:FormGroup
  username: any ='';
  password: any ='';
  role:any='';
  constructor(private authApi:AuthService,private fb :FormBuilder){
this.form=this.fb.group({
  username:[this.username,[Validators.required]],
  password:[this.password,[Validators.required]]
})
  }
  ngOnInit(): void {  }
  login(){
    this.authApi.login(this.form.value.username,this.form.value.password,this.form.value.role);
    this.errorMessage=this.authApi.errorMessage
  }

}
