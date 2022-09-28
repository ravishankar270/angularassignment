import { EventEmitter, Injectable,OnInit } from '@angular/core';
import { TodoModel } from './todo.model';
import { AuthenticationService } from './authentication.service';
// import {AngularFireAuth} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
  obj:{user:string,todos:TodoModel[]}={user:"",
      todos:[]}
  isEdit=false;
  id=-1
  user:string=''
  event:EventEmitter<'change'>=new EventEmitter<'change'>()
  edit:EventEmitter<boolean>=new EventEmitter<boolean>()
  constructor() { }

  alltodos:TodoModel[]=[];
  // obj={}

  ngOnInit(): void {
  
  }

  addTodo(todo:TodoModel){
    this.alltodos.push(todo)
    this.event.emit('change')
  }
  deleteTodo(id:number){
    this.alltodos.splice(id,1)
    this.obj=JSON.parse(localStorage.getItem(this.user) || '{}')
    this.obj.todos=this.alltodos
    localStorage.setItem(this.user,JSON.stringify(this.obj))

  }
  update(id:number,title:String,desc:String){
    this.alltodos[id]=new TodoModel(title,desc)
    this.obj=JSON.parse(localStorage.getItem(this.user) || '{}')
    this.obj.todos=this.alltodos
    localStorage.setItem(this.user,JSON.stringify(this.obj))
  }
  
}
