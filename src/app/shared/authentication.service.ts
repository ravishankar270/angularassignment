import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { updateProfile } from '@firebase/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser=authState(this.auth)
  constructor(private auth:Auth) { }

  login(username:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,username,password))
  }
  logout(){
    return from(this.auth.signOut())
  }
  signUp(name:string,email:string,password:string){
    console.log(email)
    return from(createUserWithEmailAndPassword(this.auth,email,password)).pipe(
      switchMap(({user})=> updateProfile(user,{displayName:name}))
    )
  }
}
