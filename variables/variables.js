var x = 100;
console.log(x);
//string
var s1 = "Working with typescript";
var s2 = "Ganesh";
console.log(s1);
console.log(s2);
//Assignment1 Day-3
//using boolean
var z = true;
console.log(z);
//using any
var a = 100;
var b = "ramesh";
var c = true;
console.log(a);
console.log(b);
console.log(c);
//using array of strings
var arr = ["Ganesh", "ramesh", "Suresh"];
console.log(arr);
//heterogenous array
var heterogenous = [
    [101, "ramesh", true],
    [102, "Ganesh", false]
];
console.log(heterogenous);
//Assignment-2
//various pop-ups available in typescript
var values = 100;
alert(values);
console.log(values);
var values1 = prompt("values1");
console.log(values1);
var result = confirm("question");
console.log(result);
//Assignment-3
var Direction;
(function (Direction) {
    Direction[Direction["east"] = 0] = "east";
    Direction[Direction["west"] = 1] = "west";
    Direction[Direction["south"] = 2] = "south";
    Direction[Direction["north"] = 3] = "north";
})(Direction || (Direction = {}));
console.log(Direction.east);
console.log(Direction.west);
console.log(Direction.south);
console.log(Direction.north);
console.log(Direction[0]);
console.log(Direction[1]);
console.log(Direction[2]);
console.log(Direction[3]);
