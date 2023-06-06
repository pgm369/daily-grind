//alert("can you see this?");

/*
Here are the items we believe we’ll need to produce for each day's coffee:

pic - image src
alt - the alt tag for the image
color - color to match the image
desc - description of coffee
name - name of the coffee
day - the day of the week

*/

function coffeeTemplate(coffee) {

  return `
  <p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}"    id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
            `;


let myDate = new Date();

let today = myDate.getDay();
//today = 3;	

switch(today){ 
     case 2:
         today = "Tuesday";
     break;

     case 3:
         today = "Wednesday";
     break;

    default:
      today = "Not sure what day it is!";



  }

  document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);


  //alert(today);
  console.log(coffee); 
