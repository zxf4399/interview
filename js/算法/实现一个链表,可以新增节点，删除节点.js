// https://www.cnblogs.com/ahuntsun-blog/p/12433173.html

// 节点
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// 单链表
class LinkList {
  constructor() {
    this.size = 0 // 长度
    this.head = null
  }

  // 是否为空
  isEmpty() {
    return this.size === 0
  }

  // 插入元素
  append(data) {
    let newNode = new Node(data)

    if (this.size === 0) {
      this.head = newNode
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }

    this.size++
  }

  indexOf(data) {
    let current = this.head
    let index = 0

    while (current) {
      if (current.data === data) {
        return index
      }

      current = current.next
      index++
    }

    return -1
  }

  removeAt(position) {
    if (position < 0 || position >= this.size) return null

    let current = this.head

    if (position === 0) {
      this.head = this.head.next
    } else {
      let index = 0
      let previous = null

      while (index < position) {
        previous = current
        current = current.next
        index++
      }

      previous.next = current.next
    }

    this.size--

    return current.data
  }

  remove(data) {
    return this.removeAt(this.indexOf(data))
  }
}

let list = new LinkList()

list.append('aaa')
list.append('bbb')
list.append('ccc')

console.log(list)
console.log(list.remove('aaa'))
console.log(list)
