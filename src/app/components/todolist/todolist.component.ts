import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword:string="";
  public todolist:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  doAdd(e:any){
    if(e.keyCode==13){

debugger;
      if(this.todolistHasKeyword(this.todolist,this.keyword)) {
        alert("数据已经存在");

      } else{
             this.todolist.push(
        {title:this.keyword,status:0} //0表示待办事项,1表示已完成事项
        );
      }
       this.keyword="";
    }

  }
  deleteData(key:any){
    this.todolist.splice(key,1);
  }

  todolistHasKeyword(todolist:any,keyword:any){

    if(!keyword){
      return false;
    }
    // 异步会有问题
    // todolist.forEach(value => {
    //   if(value.title==keyword){
    //     return true;
    //   }
    // });

    for(var i=0; i<todolist.length;i++){
      if(todolist[i].title==keyword) {
        return true;
      }
    }
    return false;
  }
}
