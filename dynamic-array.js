class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    this.data[this.length] = val;
    this.length++;
  }


  pop() {

    // Your code here
    if (this.length === 0){
      this.length = 0
      return undefined;
    }
    const popped = this.data[this.length - 1]

    delete this.data[this.length - 1];
    this.length--;

    return popped;
  }

  shift() {

    // Your code here
    if (this.length === 0){
      this.length = 0
      return undefined;
    }

    let shift = this.data[0];
    delete this.data[0];

    for(let i = 0; i < this.data.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    return shift;
  }

  unshift(val) {

    // Your code here
    if (this.length === 0) this.data[0] = val;
    for(let i = this.length; i >= 0; i--){
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
    this.length++;

  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.length; i++){
      if (this.data[i] === val) return i;
    }
    return -1;

  }

  resize() {

    // Your code here
    if (this.length === this.capacity){
      let resized = new Array(this.capacity * 2);
    for (let i = 0; i < this.data.length; i++) {
        resized[i] = this.data[i];
    }
    this.data = resized;
    this.capacity *= 2;

    }



  }



}


module.exports = DynamicArray;
