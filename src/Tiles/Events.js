
export class Event {
    constructor(id, position, action){
        this.id = id;
        this.position = position;
        this.action = action;
    }

    execute(){
        this.action();
    }
}