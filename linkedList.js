class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
  
    prepend(value) {
        this.head = new Node(value, this.head);
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
        let count = 1;
        let tmp = this.head;
        while (tmp !== null) {
            tmp = tmp.nextNode;
            count++;
        }

        return count;
    }

    theHead() {
        return this.head;
    }

    tail() {
        if (this.head === null) {
            return null;
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
            while (tmp.nextNode.nextNode !== null) {
                tmp = tmp.nextNode;
            }

            tmp.nextNode = null;
        }
    }

    contains(value) {
        let tmp = this.head;
        while (tmp !== null && !(tmp.value === value)) {
            tmp = tmp.nextNode;
        }

        if (tmp === null) {
            return false;
        } else if (value === tmp.value) {
            return true;
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
        let theList;

        if (tmp === null) {
            theList = `${tmp}`;
        } else {
            theList = `( ${tmp.value} )`;
        }

        while (tmp !== null) {
            tmp = tmp.nextNode;

            if (tmp === null) {
                theList = theList + ` -> ${tmp}`;
            } else {
                theList = theList + ` -> ( ${tmp.value} )`;
            }
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

// TEST
let linkin = new LinkedList();

// toString
console.log(linkin.toString());

// prepend
linkin.prepend("1");
console.log(linkin.toString());
linkin.prepend("2");
console.log(linkin.toString());

// append
linkin.append("3");
console.log(linkin.toString());
linkin.append("4");
console.log(linkin.toString());

// size
console.log(linkin.size());

// theHead
console.log(linkin.theHead());

// tail
console.log(linkin.tail());

// at
console.log(linkin.at(0));
console.log(linkin.at(1));
console.log(linkin.at(2));
console.log(linkin.at(3));
console.log(linkin.at(4));

// pop
linkin.pop();
console.log(linkin.toString());
linkin.pop();
console.log(linkin.toString());

// contains
console.log(linkin.contains("1"));
console.log(linkin.contains("3"));