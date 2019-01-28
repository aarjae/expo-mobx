import {observable, computed, autorun} from "mobx";

class Store {
    constructor() {
        autorun(() => console.log(this.requests))
    }

    @observable requests = [1, 2, 3];

    add(request) {
        this.requests.push(request);
    }

    remove() {
        this.requests.pop();
    }
    
}

const store = new Store();
export default store;