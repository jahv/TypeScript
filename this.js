var obj = {
    name: "JAHV",
    sayLater: function () {
        console.log("" + this.name);
    }
};
obj.sayLater();
/**/
var obj1 = {
    name: "JAHV1",
    sayLater: function () {
        setTimeout(function () {
            console.log("" + this.name); //Undefined
        }, 1000);
    }
};
obj1.sayLater();
/**/
//Work around
var obj2 = {
    name: "JAHV1",
    sayLater: function () {
        var self = this;
        setTimeout(function () {
            console.log("" + self.name); //JAHV1
        }, 1000);
    }
};
obj2.sayLater();
/**/
//With fat arrow
var obj3 = {
    name: "JAHV2",
    sayLater: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this);
            console.log("" + _this.name); //JAHV2
        }, 1000);
    }
};
obj3.sayLater();
