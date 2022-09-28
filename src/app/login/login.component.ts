import { Component, ElementRef, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from '../shared/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private router:Router,
    private auth:AuthenticationService,
    private toast:HotToastService) { }

  ngOnInit(): void {
  }
  log(data:NgModel){
    console.log(data)
  }
  login(email:NgModel,password:NgModel){
    this.auth.login(email.viewModel,password.viewModel).pipe(
      this.toast.observe({
        success:"Logged in Successfully",
        loading:"Logging In",
        error:"There was an error"
      })

    ).subscribe(()=>{
      this.router.navigate(['/'])

    })
  }

}
