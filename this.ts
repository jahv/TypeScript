let obj = {
  name: "JAHV",
  sayLater: function() {
    console.log(`${this.name}`);
  }
};
obj.sayLater();

/**/
let obj1 = {
  name: "JAHV1",
  sayLater: function () {
    setTimeout(function () {
      console.log(`${this.name}`); //Undefined
    }, 1000);
  }
};
obj1.sayLater();


/**/
//Work around
let obj2 = {
  name: "JAHV1",
  sayLater: function () {
    let self = this;
    setTimeout(function () {
      console.log(`${self.name}`); //JAHV1
    }, 1000);
  }
};
obj2.sayLater();

/**/
//With fat arrow
let obj3 = {
  name: "JAHV2",
  sayLater: function () {
    setTimeout(() => {
      console.log(this);
      console.log(`${this.name}`); //JAHV2
    }, 1000);
  }
};
obj3.sayLater();
