/** A FIFO collection */
export class Queue<T> {
  private data: T[] = [];
  push(item: T) { this.data.push(item); }
  pop(): T { return this.data.shift() }
}

