Array.prototype.powerOf = function(n) {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i]**n;
    }
  };
  