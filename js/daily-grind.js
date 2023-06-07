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



const queryString = window.location.search;
      
console.log(queryString);
    
const urlParams = new URLSearchParams(queryString);


let myDate = new Date();

let coffee = "";

let today = myDate.getDay();
//today = 3;	


if(urlParams.has("day")){//from querystring
  today = urlParams.get("day");
}

today = parseInt(today);

//console.log(today);

switch(today){ 

  case 0:
    today = "Sunday";
    coffee = {
      name: "Caramel Latte",
      color: "#e4bc84",
      pic: "images/caramel-latte.jpg",
      alt: "A picture of a Caramel latte",
      day: "Sunday",
      desc: `Espresso, frothed milk, and caramel sauce!` //no comma needed if last
    };

break;

    case 1:
        today = "Monday";
        coffee = {
          name: "Bubble Tea",
          color: "#ecdcc2",
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
          color: "#37251b",
          pic: "images/drip.jpg",
          alt: "A picture of a drip coffee",
          day: "Tuesday",
          desc: `Give it to me Straight!` //no comma needed if last
        };

    break;

    case 3:
        today = "Wednesday";
        coffee = {
          name: "Mocha",
          color: "#ccae88",
          pic: "images/mocha.jpg",
          alt: "A picture of a mocha",
          day: "Wednesday",
          desc: `If you love chocolate and coffee, Mocha is made for you!` //no comma needed if last
        };

    break;

    case 4:
        today = "Thursday";
        coffee = {
          name: "Cold Brew",
          color: "#80411e",
          pic: "images/cold-brew.jpg",
          alt: "A picture of a Cold brew",
          day: "Thursday",
          desc: `Cold pressed coffee! Sweet and Smooth!` //no comma needed if last
        };

    break;

    case 5:
        today = "Friday";
        coffee = {
          name: "Frappaccino",
          color: "#6F4E37",
          pic: "images/frappaccino.jpg",
          alt: "A picture of a Frappaccino",
          day: "Friday",
          desc: `Blended iced coffee topped with whipped cream!` //no comma needed if last
        };

    break;

    case 6:
        today = "Saturday";
        coffee = {
          name: "Pumpkin Spice Latte",
          color: "#ffcd91",
          pic: "images/pumpkin-spice-latte.jpg",
          alt: "A picture of a pumpkin-spice-latte",
          day: "Saturday",
          desc: `A mix of pumpkin flavors, steamed milk, and espresso topped with whip cream!` //no comma needed if last
        };

    break;


    default:
        today = "Not sure what day it is!";



  }

  document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
  document.querySelector("html").style.backgroundColor = coffee.color;

  //alert(today);
  console.log(coffee); 


