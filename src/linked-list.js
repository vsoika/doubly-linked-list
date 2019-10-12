const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        this.list = [];
    }

    append(data) {
        const newInstance = new Node(data);

        if (this._head === null) {
            this._head = newInstance;
            this._tail = newInstance;
        } else {
            this._tail = newInstance;
        }

        this.length++;
        this.list.push(newInstance);

        return this;
    }

    head() {
     if (this.list.length === 0) {
         return null;
     }
     return this.list[0].data;
    }

    tail() {
        if (this.list.length === 0) {
            return null;
        }
      return this.list[this.list.length-1].data;
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data) {
        const newInstance = new Node(data);
        this.list.splice(index, 0, newInstance);
        return this;
    }

    isEmpty() {
        return this.list.length === 0 ? true : false;
        
    }

    clear() {
         this.list.length = 0;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        this.list.splice(index, 1);
        return this;
    }

    reverse() {
        this.list.reverse();
        this._head = this.list[0];
        this._tail = this.list[this.length-1];
        return this;
    }

    indexOf(data) {
        function findNode(node) {
           return node.data === data;
            
        }
       return this.list.findIndex(findNode);
    }
}

module.exports = LinkedList;
