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

  insert(value, curr) {

    if (!this.root) {
      this.root = new Node(value);
      return this;
    } else {
      if (!curr) curr = this.root;
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

  search(value) {

  }
}