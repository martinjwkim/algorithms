class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class WordDictionary {
  constructor() {
    this.root = null;
  }

  addWord(value, curr = this.root) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    if (value < curr.val) {
      if (curr.left) {
        this.insert(value, curr.left)
      } else {
        curr.left = new Node(value);
        return;
      }
    } else {
      if (curr.right) {
        this.insert(value, curr.right)
      } else {
        curr.right = new Node(value);
        return;
      }
    }
  }

  search(value, curr=this.root) {
    if (!curr) return false;
    if (curr.val === value) return true;
  
    return value < curr.val ? this.search(value, curr.left) : this.search(value, curr.right)
  }
}
