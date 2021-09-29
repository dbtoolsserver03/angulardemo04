import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// 引入表单表单相关的模块,才可以用双向数据绑定
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent

  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
