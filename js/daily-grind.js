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
}

let myDate = new Date();

let today = myDate.getDay();
//today = 3;	


if(urlParams.has("day")){//from querystring
  today = urlParams.get("day");
}

today = parseInt(today);

//console.log(today);

switch(today){ 

    case 1:
        today = "Monday";
        coffee = {
          name: "Bubble Tea",
          color: "pink",
          pic: "images/bubble-tea.jpg",
          alt: "A picture of a Bubble Tea",
          day: "Monday",
          desc: `I like me some bubble tea!` //no comma needed if last
        };

    break;

    case 2:
        today = "Tuesday";
        coffee = {
          name: "Drip",
          color: "black",
          pic: "images/bubble-tea.jpg",
          alt: "A picture of a drip coffee",
          day: "Tuesday",
          desc: `Give it to me Straight` //no comma needed if last
        };

    break;

    case 3:
        today = "Wednesday";
    break;

    default:
        today = "Not sure what day it is!";



  }

  document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
  document.querySelector("html").style.backgroundColor = myColor;

  //alert(today);
  console.log(coffee); 


