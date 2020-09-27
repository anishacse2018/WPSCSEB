/* Premitive types call by value*/
/*var a=7;
var b=a;
console.log("a: "+a);
console.log("b: "+b);
b=5;
console.log("after b update:");
console.log("a: "+a);
console.log("b: "+b);*/

/* output->
a: 7
b: 7
after b update:
a: 7
b: 5(b is not modified since it is call by value(premitive data types))
*/

/*var a={x:7};
var b=a;
console.log(a);
console.log(b);
b.x=5;
console.log("after b.x update:");
console.log(a);
console.log(b);*/

/*output->
{x: 7}
{x: 7}
after b.x update:
{x: 5}(b is modified since it is call by reference(object data types))
{x: 5}
*/
/*
function changePrimitive(primValue){
	console.log("in changePrimitive...")
	console.log("before:");
	console.log(primValue);
	primValue=5;
	console.log("after:");
	console.log(primValue);
}
var value=7;
changePrimitive(value);
console.log("after changePrimitive,orig value:");
console.log(value);*/

/*output->
in changePrimitive...
before:
7
after:
5
after changePrimitive,orig value:
7
*/

function changeObject(objValue){
	console.log("in changeObject...")
	console.log("before:");
	console.log(objValue);
	objValue.x=5;
	console.log("after:");
	console.log(objValue);
}
var value={x:7};
changeObject(value);
console.log("after changeObject,orig value:");
console.log(value);


/*output->
in changeObject...
before:
{x: 7}
after:
{x: 5}
after changeObject,orig value:
{x: 5}
*/