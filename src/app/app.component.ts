import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj:Object={}
  constructor(public auth:AuthenticationService,private router:Router,private todoService:TodoService){

  }
   logout(name:String){
    this.auth.logout().subscribe(()=>{
      this.obj={
        user:name,
        todos:this.todoService.alltodos
      }
      // localStorage.setItem("todos",JSON.stringify(this.obj))
      this.router.navigate(['/login'])
    })
  }
}
