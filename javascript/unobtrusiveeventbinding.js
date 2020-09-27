/*function sayHello(event)
{
	//console.log(this);//This statement prints a window object
    this.textContent="Said it!";//This statement works because "this" is pointing to the button object 
     var name= document.getElementById("name").value;
     var message="<h2>Hello "+name+"!</h2>";
     /*
       if we want to increase the size of the Hello anisha message to h2, then if we do the below thing:-
       var messsage= "<h2>Hello"+name+"!</h2>" , then it considers h2 to be a part of the string and not a html element.
       So, to treat h2 as html element and not as a string, we use innerHTML tag instead of using textContent. 
       document.getElementById("content").innerHTML=message;
     */
     //document.getElementById("content").textContent=message;
   /*  document.getElementById("content").innerHTML=message;
     if(name==="student"){
     	//var title=document.getElementById("title");
     	/*The above statement can be written but if we want to use it like how we do in css by 
     selecting an element, we use the method query selector.
     	*/
     	//var title=document.querySelector("#title").textContent;/*here we can replace the title with h1 as there is only one h1 
        /*element in the entire page.("h1");
     	*/
     	/*title+="And Loving it!";
     	var title=document.querySelector("#title").textContent=title;
     //}
 //}
     //Unobstrusive event binding
     /*it is called so because html doesnt need to have any idea regading the javascript code */
     //document.querySelector("button").addEventListener("click",sayHello);
     /*On writing the above statement, "this" now points to Button and the listener gets added to button*/
     //document.querySelector("button").onclick=sayHello;
     /*On writing the above statement, "this" now points to Button and the listener gets added to button*/

/* Until now, we have been including the script part of js at the very bottom of the html file so that all the html elements 
can be loaded and the code is executed. however, there is an alternate arrangement to this as done below*/

document.addEventListener("DOMContentLoaded",
function(event){
function sayHello(event)
{
    //console.log(this);//This statement prints a window object
    console.log(event);//This points to a MouseEvent
    this.textContent="Said it!";//This statement works because "this" is pointing to the button object 
     var name= document.getElementById("name").value;
     var message="<h2>Hello "+name+"!</h2>";
     /*
       if we want to increase the size of the Hello anisha message to h2, then if we do the below thing:-
       var messsage= "<h2>Hello"+name+"!</h2>" , then it considers h2 to be a part of the string and not a html element.
       So, to treat h2 as html element and not as a string, we use innerHTML tag instead of using textContent. 
       document.getElementById("content").innerHTML=message;
     */
     //document.getElementById("content").textContent=message;
     document.getElementById("content").innerHTML=message;
     if(name==="student"){
        //var title=document.getElementById("title");
        /*The above statement can be written but if we want to use it like how we do in css by 
     selecting an element, we use the method query selector.
        */
        var title=document.querySelector("#title").textContent;/*here we can replace the title with h1 as there is only one h1 
        element in the entire page.("h1");
        */
        title+="And Loving it!";
        var title=document.querySelector("#title").textContent=title;
     }
 }
     //Unobstrusive event binding
     /*it is called so because html doesnt need to have any idea regading the javascript code */
     //document.querySelector("button").addEventListener("click",sayHello);
     /*On writing the above statement, "this" now points to Button and the listener gets added to button*/
     document.querySelector("button").onclick=sayHello;
     document.querySelector("body").addEventListener("mousemove",
        function(event){
            if(event.shiftKey==true){
                console.log("x: "+event.clientX);
                console.log("y: "+event.clientY);
            }
        }
     
/*the above function basically returns the X and y coordinates when we click on Shift and hover the mouse on the screen*/ 

        );
}
    );