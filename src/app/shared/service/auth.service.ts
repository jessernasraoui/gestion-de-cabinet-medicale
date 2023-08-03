import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'  
})
export class AuthService {
errorMessage !: string;
  constructor
  (private auth:AngularFireAuth,private router:Router) {}
   
    login(username :string,password:string,role:string)
    {this.auth
      .signInWithEmailAndPassword(username,password)
      .then(result =>{
       this.auth.authState.subscribe(async user =>{
           if(user){
            localStorage.setItem('user',JSON.stringify(user));
         await   this.router.navigate(['/dashboard/consultations']);
location.reload();           }

  
       })
      })
      .catch(err=>{
        this.errorMessage='adresse ou mot de passe incorrecte'
      })

    }
    async logOut(){
      localStorage.setItem('user','null');
      await this.router.navigate([''])
      location.reload()
    }
    isUserLoggedIn(){
      const user =JSON.parse(localStorage.getItem('user')!);
      return user!== null ? true:false;

    }
}
