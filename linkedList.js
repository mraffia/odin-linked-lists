class LinkedList {

    constructor(head = null) {
        this.head = head;
    }
  
    prepend(value) {
        let newNode = new Node(value, this.head);
    }

    append(value) {
        if (this.head === null) {
            this.prepend(value);
        } else {
            let tmp = this.head;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }

            tmp.nextNode = new Node(value, null);
        }
    }

    size() {
        let count = 0;
        let tmp = this.head;
        while (tmp.nextNode !== null) {
            tmp = tmp.nextNode;
            count++;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        if (this.head === null) {
            return this.head;
        } else {
            let tmp = this.head;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }

            return tmp;
        }
    }

    at(index) {
        let listIndex = 0;
        let tmp = this.head;
        while (tmp !== null && listIndex < index) {
            tmp = tmp.nextNode;
            listIndex++;
        }

        return tmp;
    }

    pop() {
        if (this.head === null) {
            return null;
        } else {
            let tmp = this.head;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }

            tmp = null;
        }
    }

    contains(value) {
        let tmp = this.head;
        while (tmp !== null && !(tmp.value === value)) {
            tmp = tmp.nextNode;
        }

        if (value === tmp.value) {
            return true;
        } else {
            return false;
        }
    }
}

class Node {

    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  
}