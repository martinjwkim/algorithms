class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Trie {
  constructor() {
    this.root = null;
  }

  insert(value, curr=this.root) {

    if (!this.root) {
      this.root = new Node(value);
      return this;
    } else {
      if (value < curr.val) {
        if (curr.left) {
          this.insert(value, curr.left)
        } else {
          curr.left = new Node(value);
          return this;
        }
      } else {
        if (curr.right) {
          this.insert(value, curr.right)
        } else {
          curr.right = new Node(value);
          return this;
        }
      }
      return this;
    }
  }

  search(value, curr=this.root) {
    if (!curr) return false;
    if (curr.val === value) return true;
    if (value < curr.val) {
      this.search(value, curr.left)
    } else {
      this.search(value, curr.right)
    }
  }

  startsWith(value, curr=this.root) {
    if (!curr) return false;
    if (curr.val.slice(0,value.length) === value) return true;
    if (value < curr.val) {
      this.startsWith(value, curr.left)
    } else {
      this.startsWith(value, curr.right)
    }
  }
}