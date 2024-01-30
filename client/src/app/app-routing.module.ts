import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./component/todo-list/todo-list.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", pathMatch: "full", redirectTo: "todo-list" },
      { path: "todo-list", component: TodoListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
