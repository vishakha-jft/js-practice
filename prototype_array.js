Array.prototype.powerOf = function(n) {
    this.forEach( function(elem,idx){
      this[idx] =  this[idx]**n
    }, this)
  }

Array.prototype.rotate = function(n){
  let counter=0
  while(counter<=n){
  temp=this[0]
  this.forEach( function(elem, idx){
    this[idx]=this[idx+1]
  },this)
  this[this.length-1]=temp
}
counter++;
}

var arr=[1,2,3,4,5,6,7,8];
arr.powerOf(3);
console.log(arr);
arr.rotate(4);
console.log(arr)
        