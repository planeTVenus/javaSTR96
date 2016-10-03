/*var setup = function () {
    alert(1);
    return function () {
        alert(2);
    };
};
// использование функции setup
var my = setup(); // выведет диалог с текстом “1”
my(); // выведет диалог с текстом “2”*/
////////////////////////


var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    };
};
var next = setup();
next(); 
next();
next();
/////////////////////////////////

var scareMe = function () {
    alert("Boo!");
    scareMe = function () {
        alert("Double boo!");
    };
};
scareMe(); 
scareMe(); 

/////////////////////////////////
(function () {
    alert('watch out!');
}());
/////////////////////////


(function () {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
    alert(msg);
}()); 