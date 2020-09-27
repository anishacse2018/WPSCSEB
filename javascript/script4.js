/*function test()
{
	console.log(this);
	this.myName="Anisha";
}
test();
console.log(window.myName);
*/
/*function Circle(radius){
	this.radius=radius;
	this.getArea=
	function(){
     return Math.PI*Math.pow(this.radius,2);
	};
}
var myCircle=new Circle(10);
console.log(myCircle.getArea());*/



/*	this.radius=radius;
}
Circle.prototype.getArea=
	function(){
     return Math.PI*Math.pow(this.radius,2);
	}
var myCircle=new Circle(10);
console.log(myCircle);*/

/* Whenever we create a new object, we are forced to define a entire method.
Again, if we want to make use of that object, we need to define everything again leading to redundant code.
So,what we can do is make use of the prototype keyword. On doing this , the functions we write are stored in __proto__.
This __proto__ is present in every function, so instead of writing the same method for every object that has been created, every 
object can access the __proto__ methods.*/
 
/*output->
Circle {radius: 10}
radius: 10
__proto__:
getArea: ƒ ()
constructor: ƒ Circle(radius)
__proto__: Object */

/*var literalCircle={
	radius:10,
	getArea:function(){
      console.log(this);
      return Math.PI*Math.pow(this.radius,2);
	}
};
console.log(literalCircle.getArea());
/* object literal here is literalCircle*/
/*output->
{radius: 10, getArea: ƒ}
314.1592653589793*/

/*var literalCircle={
	radius:10,
	getArea:function(){
      console.log(this);
    var increaseRadius=function(){
    	this.radius=20;
    }
    increaseRadius();
    return Math.PI*Math.pow(this.radius,2);
}
};
console.log(literalCircle.getArea());*/

/*output->
{radius: 10, getArea: ƒ}
getArea: ƒ ()radius: 10
__proto__: Object
314.1592653589793
Even though we wrote increaseRadius function, the value of the radius doesnt change.
This is because it considers this.radius to be aglobal object and not an object of literal Circle. To avoid this, we can write
the next code which is shown below.
 */
 /*var literalCircle={
	radius:10,
	getArea:function(){
		var self=this;
      console.log(this);
    var increaseRadius=function(){
    	self.radius=20;
    }
    increaseRadius();
    console.log(this.radius);
    return Math.PI*Math.pow(this.radius,2);
}
};
console.log(literalCircle.getArea());
*/
/*output->
{radius: 10, getArea: ƒ}
 20
 1256.6370614359173
Here goes the modified output as we have used the self keyword here instead of this keyword. 
 */
 /*var array=new Array();
 array[0]="Anisha";
 array[1]=2;
 array[2]=function(name){
 	console.log("Hello "+ name);
 };
 array[3]={course:"HTML,CSS & JS"};
 console.log(array);
 /*console.log(array[2]("Anisha"));*/
 /*array[2](array[0]);
 console.log(array[3].course);
*/
 /*output->
4) ["Anisha", 2, ƒ, {…}]0: "Anisha"1: 22: ƒ (name)3: {course: "HTML,CSS & JS"}length: 4__proto__: Array(0)
Hello Anisha
HTML,CSS & JS
*/

/*var names=["Yaakov","John","Joe"];
console.log(names);

/*output->
["Yaakov", "John", "Joe"]
*/

/*var names=["Yaakov","John","Joe"];
for(var i=0;i<names.length;i++)
{
	console.log("Hello "+names[i]);
}

output->
Hello Yaakov
Hello John
Hello Joe
*/
/*var names=["Yaakov","John","Joe"];
for(var i=0;i<names.length;i++)
{
	console.log("Hello "+names[i]);
}
names[100]="Jim";
for(var i=0;i<names.length;i++)
{
	console.log("Hello "+names[i]);
}*/
/*output->
Hello Yaakov
Hello John
Hello Joe
Hello Yaakov
Hello John
Hello Joe
(97 times) Hello undefined
Hello Jim
*/

/*var names2=["Yaakov","John","Joe"];
var myObj={
    name:"Yaakov",
    course:"HTML/CSS/JS",
    platform:"Coursera"
};
for(var prop in myObj){
console.log(prop+": "+myObj[prop]);
}
*/
/*output->
name: Yaakov
course: HTML/CSS/JS
platform: Coursera
*/
/*var names2=["Yaakov","John","Joe"];
for(var name in names2){
console.log("Hello "+names2[name]);
}*/

/*output->
Hello Yaakov
Hello John
Hello Joe
*/

/*names2.greeting="Hi!";
for(var name in names2){
console.log("Hello "+names2[name]);
}*/

/*output->
Hello Yaakov
Hello John
Hello Joe
Hello Hi!

Even Hello Hi! is printed because even the property greetings of the object is also invoked.
*/

/*function makeMultiplier(multiplier){
	function b(){
		console.log("Multiplier is "+ multiplier);
	}
	b();
	return (
		function(x){
            return multiplier*x;
		}
);
}

var doubleAll=makeMultiplier(2);
console.log(doubleAll(10));//its own exec env*/
(function(window){
var anishaGreeter={};
anishaGreeter.name="Anisha";
var greeting="hello ";
anishaGreeter.sayHello=function(){
	console.log(greeting +anishaGreeter.name);
}
window.anishaGreeter=anishaGreeter;
})(window);