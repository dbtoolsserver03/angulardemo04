import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// 引入表单表单相关的模块,才可以用双向数据绑定
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

// 引入并且配置服务
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent

  ],
  imports: [
    BrowserModule,FormsModule
  ],

  // 配置服务
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
