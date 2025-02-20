import { CommonModule, getLocaleWeekEndRange } from '@angular/common';
import { R3BoundTarget, R3TargetBinder } from '@angular/compiler';
import { Component } from '@angular/core';
import { CheckboxRequiredValidator, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
export interface TodoItem{
  id:number  
  task:string,
  completed:boolean
}

@Component({
  standalone:true,
  selector: 'app-todo',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoList:TodoItem[]=[];
  newTask: string='';

  addTask():void{
    if (this.newTask.trim()!='') {
      const newTodoItem: TodoItem={
        id:Date.now(),
        task:this.newTask,
        completed:false,

      } //to add the todoitem in todolist
      this.todoList.push(newTodoItem)
      this.newTask=''
    }
  }
    toggleCompleted(index:number):void{
    this.todoList[index].completed = !this.todoList[index].completed
    
    
    console.log(this.todoList)
    
  } 

    deleteTask(id:number):void{
    this.todoList =this.todoList.filter(item=>item.id!==id)
  }

}


