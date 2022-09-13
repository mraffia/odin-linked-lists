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

    find(value) {
        let listIndex = 0;
        let tmp = this.head;
        while (tmp !== null && !(tmp.value === value)) {
            tmp = tmp.nextNode;
            listIndex++;
        }

        if (tmp === null) {
            return null;
        } else {
            return listIndex;
        }
    }

    toString() {
        let tmp = this.head;
        let theList = `( ${tmp.value} )`;
        while (tmp !== null) {
            tmp = tmp.nextNode;
            theList = theList + ` -> ( ${tmp.value} )`;
        }

        return theList;
    }

    insertAt(value, index) {
        if (this.head === null) {
            return null;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        let listIndex = 0;
        let prev = null;
        let cur = this.head;

        while (cur !== null && listIndex < index) {
            prev = cur;
            cur = cur.nextNode;
            listIndex++;
        }

        if (cur !== null) {
            prev.next = new Node(value, cur);
        }
    }

    removeAt(index) {
        if (this.head === null) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }

        let listIndex = 0;
        let prev = null;
        let cur = this.head;

        while (cur !== null && listIndex < index) {
            prev = cur;
            cur = cur.nextNode;
            listIndex++;
        }

        if (cur === null) {
            return null;
        }

        prev.nextNode = cur.nextNode;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
}