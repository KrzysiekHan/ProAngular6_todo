import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model = new Model();
  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if ((newItem !== '') && !this.checkIfExists(newItem)) {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
  checkIfExists(item) {
    let containsItem;
    this.model.items.forEach(element => {
      if (element.action === item) {
      containsItem = true;
      }
    });

    if (containsItem) {
      return true;
    } else {
      return false;
    }
  }
}
