class LinkedList {

    constructor(head = null) {
        this.head = head;
    }
  
    prepend(value) {
        let newNode = new Node(value, this.head);
    }

    append(value) {
        if (head === null) {
            this.prepend(value);
        } else {
            let tmp = head;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }

            tmp.nextNode = new Node(value, null);
        }
    }

    size() {
        let count = 0;
        let tmp = head;
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
        let tmp = head;
        while (tmp.nextNode !== null) {
            tmp = tmp.nextNode;
        }

        return tmp;
    }

    at(index) {
        let listIndex = 0;
        let tmp = head;
        while (tmp !== null && listIndex < index) {
            tmp = tmp.nextNode;
            listIndex++;
        }

        return tmp;
    }
}

class Node {

    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  
}