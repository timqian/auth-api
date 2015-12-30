const obj = {
  a: 3,
  fu: function() {
    console.log(this.a);
  }
};

obj.fu();
