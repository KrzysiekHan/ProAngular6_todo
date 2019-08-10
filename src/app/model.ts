export class Model {
    user;
    items;
    constructor() {
        this.user = 'Krzychu';
        this.items = [new TodoItem('Buy Flowers', false),
        new TodoItem('Get Shoes', false),
        new TodoItem('Collect Tickets', true),
        new TodoItem('Call Joe', false)];
    }
}
export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
