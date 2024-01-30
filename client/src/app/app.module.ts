import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
