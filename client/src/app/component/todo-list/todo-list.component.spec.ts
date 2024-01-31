
import { TodoListComponent } from './todo-list.component';
import {TodoListService} from "../../service/todo-list.service";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let todoListService : TodoListService;
    beforeEach(async () => {
        component = new TodoListComponent(todoListService);
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
