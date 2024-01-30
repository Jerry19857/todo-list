import { Component } from "@angular/core";

interface ITodoList {
  task: string;
  date: string;
  time: string;
  status: boolean;
}

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent {
  todoLists: ITodoList[] = [
    {
      task: "ตื่นนอน",
      date: "31/01/2023",
      time: "09.00",
      status: false,
    },
  ];
}
