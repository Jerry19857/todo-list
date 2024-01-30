import {Component, OnInit} from "@angular/core";
import {TodoListService} from "../../service/todo-list.service";
import {ITodoList} from "../../service/todo-list.model";


@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit{

  constructor(private todoListService: TodoListService) {
  }


  todoLists: ITodoList[] = [];

  ngOnInit(): void {
    this.todoListService.getTodoList().subscribe((todoList) => {
      this.todoLists = todoList;
    });
  }
}
