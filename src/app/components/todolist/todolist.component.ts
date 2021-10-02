import { Component, OnInit } from '@angular/core';
// 引入服务
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword:string="";
  public todolist:any[]=[];

  constructor(public storage:StorageService) {

  }
  ngOnInit(): void {
    var todolist=this.storage.get("todolist");
    if(todolist){
      this.todolist=todolist;
    }
  }

  doAdd(e:any){
    if(e.keyCode==13){

      if(this.todolistHasKeyword(this.todolist,this.keyword)) {
        alert("数据已经存在");

      } else{
            //false表示待办事项,true表示已完成事项
            this.todolist.push({title:this.keyword,status:false});
            this.storage.set("todolist",this.todolist);
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
  checkboxChange() {
    this.storage.set("todolist",this.todolist);
  }
}
