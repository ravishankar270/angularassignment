import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthenticationService,private toast:HotToastService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp(name:string,email:string,password:string){
    this.auth.signUp(name,email,password).pipe(
      this.toast.observe({
        success:"Signed Up",
        loading:"Signing You Up",
        error:(err)=>`${err?.message}`
      })
    ).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }

}
