import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import {} from '@angular/fire'
import { TodoService } from 'src/app/shared/todo.service';
import { TodoModel } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent implements OnInit {
  obj:{user:String,todos:TodoModel[]}={user:"",
  todos:[]
}
isEdit=false
title:String="";
desc:String="";
// id=-1
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.edit.subscribe((edit)=>{
      this.isEdit=edit
      this.title=this.todoService.alltodos[this.todoService.id].title
      this.desc=this.todoService.alltodos[this.todoService.id].desc
    })
  }

  add(){
    this.todoService.addTodo(new TodoModel(this.title,this.desc))
    this.obj=JSON.parse(localStorage.getItem(this.todoService.user)|| '{}')
    this.obj.todos=this.todoService.alltodos
    localStorage.setItem(this.todoService.user,JSON.stringify(this.obj))
    // console.log(title.viewModel,desc.viewModel)
    // this.event.emit('change')
    // this.todoService.event.subscribe((e)=>{
    //   this.title=""
    //   this.desc=""
    // })
    this.title=""
    this.desc=""
  }
  update(){
    
    this.todoService.update(this.todoService.id,this.title,this.desc)
    this.todoService.edit.emit(false)
    this.title=''
    this.desc=''
  }
}
