class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class WordDictionary {
  constructor() {
    this.list = [];
  }

  addWord(word) {
    if (!this.list[word.length]) {
      this.list[word.length] = new Trie();
    }

    this.list[word.length].insert(word);
  }

  search(word) {
    if (!this.list[word.length]) return false;

    return this.list[word.length].search(word);
  }
}

class Trie {
  constructor() {
    this.root = null;
  }

  insert(value, curr = this.root) {

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

  search(value, curr = this.root) {
    if (!curr) return false;

    let dot = false;

    for (let i = 0; i < value.length; i++) {
      if (value[i] === '.') dot = true;
      else if (dot && value[i] !== curr.val[i]) return this.search(value, curr.left) || this.search(value, curr.right)
      else if (!dot && value[i] !== curr.val[i]) return value[i] < curr.val[i] ? this.search(value, curr.left) : this.search(value, curr.right)
    }

    return true;
  }
}