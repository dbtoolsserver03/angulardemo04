//1.创建服务
//2.在app.module.ts里面引入service并且声明
//3.在用到的组件里引入服务,在构造函数里初始化




import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from 'src/app/services/storage.service';


// 不推荐
//var storage = new StorageService();
//console.log(storage);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword:string="";
  public historyList:any[]=[];

  constructor(public storage:StorageService) {
    // let s:any=this.storage.get();
    // console.log(s);

  }

  ngOnInit(): void {

    console.log("页面刷新会触发这个生命周期函数");
    var searchlist=this.storage.get("searchlist");
    if(searchlist){
      this.historyList=searchlist;
    }
  }

  doSearch(){
    debugger;
    if(this.historyList.indexOf(this.keyword)==-1){
      this.historyList.push(this.keyword);
      this.storage.set("searchlist",this.historyList);
    }

    this.keyword="";
    console.log(this.keyword);
  }
  deleteHistory(key:any){
    this.historyList.splice(key,1);
    this.storage.set("searchlist",this.historyList);
  }
}
