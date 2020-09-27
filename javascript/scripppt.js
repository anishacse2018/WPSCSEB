function sayHello()
{
	
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