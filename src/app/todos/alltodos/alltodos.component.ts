import { Component, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { TodoModel } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.css']
})
export class AlltodosComponent implements OnInit {
  
  myTodos:TodoModel[]=[]
  constructor(private todoservice:TodoService,public auth:AuthenticationService) { }
  obj={user:"",
      todos:[]}
  ngOnInit(): void {
    // this.myTodos=this.todoservice.alltodos  
    // this.todoservice.event.subscribe((e)=>{
    //   this.myTodos=this.todoservice.alltodos 
    //   console.log(this.myTodos)
    // })
    this.auth.currentUser.subscribe((user:any)=>{
      console.log(user)
      if(!localStorage.getItem(user.displayName)){
        localStorage.setItem(user.displayName,JSON.stringify({user:user.displayName,todos:[]}))
      }
      this.obj=JSON.parse(localStorage.getItem(user.displayName) || '{}')
      if(this.obj.user===user?.displayName)
      {this.todoservice.alltodos=this.obj.todos
      console.log(this.todoservice.alltodos)
      this.todoservice.event.emit('change')
      this.myTodos=this.todoservice.alltodos
      this.todoservice.user=user?.displayName
      }
      
    })
      
}
delete(id:number){
  this.todoservice.deleteTodo(id)
}

update(id:number){
  this.todoservice.isEdit=true
  this.todoservice.id=id
  this.todoservice.edit.emit(this.todoservice.isEdit)
}

}
