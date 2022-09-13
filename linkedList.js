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

    
}

class Node {

    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  
}