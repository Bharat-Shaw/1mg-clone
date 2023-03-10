const healthlist=document.getElementById("healthlist");
const brandlist=document.getElementById("brandlist");
const checkuplist=document.getElementById("checkuplist");
const testlist=document.getElementById("testlist");
const popularlist=document.getElementById("popularlist");



let healthlistarr = [
    {
      "id": 1,
      "name": "Diabetes Care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
      
    },
    {
        "id": 2,
        "name": "Cardiac Care",
        "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
    },
    {
      "id": 3,
      "name": "Stomach Care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png"
    },
    {
        "id": 4,
        "name": "Liver Care",
        "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png"
    },
    {
      "id": 5,
      "name": "Joint & Muscle Care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"
    },
    {
      "id": 6,
      "name": "Kidney care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png"
    },
    {
        "id": 7,
        "name": "Derma care",
        "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png"
    },
    {
      "id": 8,
      "name": "Respiratory care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png"
    },
    {
      "id": 9,
      "name": "Eye care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png"
    },
]

displayData(healthlistarr);


// function displayData(data){
//     data.map(function(elem){
//         const link=document.createElement("a");
//         link.href="https://www.1mg.com/";
//         link.style.textDecoration = "none";

//         const card=document.createElement("div");
        
//         const img=document.createElement("img");
//         img.src=elem.image;

//         const span=document.createElement("span");
//         span.textContent=elem.name;

//         card.append(img, span);
//         link.append(card);
//         healthlist.append(link);

//     })
// }
function displayData(data){
  const carouselContainer = document.querySelector('.carousel');
  let carouselWidth = 0;

  data.forEach(function(elem){
      const link = document.createElement("a");
      link.href = "https://www.1mg.com/";
      link.style.textDecoration = "none";

      const card = document.createElement("div");

      const img = document.createElement("img");
      img.src = elem.image;

      const span = document.createElement("span");
      span.textContent = elem.name;

      card.append(img, span);
      link.append(card);
      carouselContainer.append(link);

      // Get the width of each link and add it to carouselWidth
      carouselWidth += link.offsetWidth;
  })

  // Set the width of the carousel container to the total width of the links
  carouselContainer.style.width = carouselWidth + 'px';
}

function displayData1(data){
  
  let checkuplistWidth = 0;

  data.forEach(function(elem){
      const link = document.createElement("a");
      link.href = "https://www.1mg.com/";
      link.style.textDecoration = "none";

      const card = document.createElement("div");

      const h4 = document.createElement("h4");
      h4.textContent = elem.name;

      const test = document.createElement("span");
      test.textContent = elem.test;

      const img = document.createElement("img");
      img.src = "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto";

      const rating = document.createElement("span");
      rating.textContent = elem.rating;

      const br = document.createElement("br");

      const price = document.createElement("span");
      price.textContent = elem.price;

      const dis = document.createElement("span");
      dis.textContent = elem.dis;

      const off = document.createElement("span");
      off.textContent = "50% Off";

      card.append(h4, test, img, rating, br, price, dis, off );
      link.append(card);
      carouselContainer.append(link);

      // Get the width of each link and add it to carouselWidth
      checkuplistWidth += link.offsetWidth;
  })

  // Set the width of the carousel container to the total width of the links
  checkuplist.style.width = checkuplistWidth + 'px';
}


// Get the carousel container and its width
const carouselContainer = document.querySelector('.carousel');
const carouselWidth = carouselContainer.offsetWidth;

// Initialize the current position of the carousel
let currentPosition = 0;

// Add event listeners for the next and previous buttons
document.querySelector('.next-button').addEventListener('click', function(){
    if (currentPosition > -(carouselWidth - window.innerWidth)) {
        currentPosition -= 250;
        carouselContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});

document.querySelector('.prev-button').addEventListener('click', function(){
    if (currentPosition < 0) {
        currentPosition += 250;
        carouselContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});


// const checkuplistWidth = carouselContainer.offsetWidth;

// // Initialize the current position of the carousel
// let currentPosition1 = 0;

// // Add event listeners for the next and previous buttons
// document.querySelector('.next-button1').addEventListener('click', function(){
//     if (currentPosition1 > -(checkuplistWidth - window.innerWidth)) {
//         currentPosition1 -= 250;
//         checkuplist.style.transform = `translateX(${currentPosition1}px)`;
//     }
// });

// document.querySelector('.prev-button1').addEventListener('click', function(){
//     if (currentPosition1 < 0) {
//         currentPosition1 += 250;
//         checkuplist.style.transform = `translateX(${currentPosition1}px)`;
//     }
// });



const search=document.getElementById("searchnav")
 search.addEventListener("input", func)
 search.addEventListener("keypress", func1)
 function func(e){
    const value= e.target.value;
    console.log("hello");
    localStorage.setItem("query", value);
    let url=`https://json-server-1017.onrender.com/products/?q=${value}`
    getdatasug(url);
    console.log("hello");
 }
 function func1(e){
  if (e.key === "Enter"){
    location.href="https://www.w3schools.com/jsref/prop_loc_href.asp";
  }
}

async function getdatasug(url){
  try {
      let res=await fetch(url);
      let data=await res.json();
       console.log(data);
       displaydatasug(data);
  } catch (error) {
      console.log(error);
  }
}

function displaydatasug(data){
  document.getElementById("suggestion1").innerHTML="";

  data.forEach(function(elem,i){

  let divcard=document.createElement("div");
  // divcard.style.padding = "20px";

  let div=document.createElement("a");
  div.href="https://www.w3schools.com/jsref/prop_loc_href.asp";
  

  let br=document.createElement("br");
  let br1=document.createElement("br");

  let title=document.createElement("span");
  title.textContent=elem.title;
  
  div.append(title, br, br1);
  divcard.append(div);
  document.getElementById("suggestion1").append(divcard);

  })
}

// localStorage.setItem("loggeduser", "7");
loggedfunction();

function loggedfunction(){
  if(localStorage.getItem("loggeduser")){
    document.getElementById("userlog").style.display = "none";
    document.getElementById("userimg").style.display = "inline-block";
  }
}


let brandlistarr = [
  {
    "id": 1,
    "name": "Mamaearth",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/3489fa92-fdd4-4601-98e0-326d3391c1f3.png",
    
  },
  {
      "id": 2,
      "name": "Hansaplast",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fbb27eee-e339-493c-a7db-661f6e7c9a40.png",
  },
  {
    "id": 3,
    "name": "Cetaphil",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/0e515d7e-caba-4080-9070-63b389795b25.png"
  },
  {
      "id": 4,
      "name": "Sri Sri Tattva",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bcca5cdf-1ef3-42b9-ac6c-90c93988e349.png"
  },
  {
    "id": 5,
    "name": "Medtech",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"
  },
  {
    "id": 6,
    "name": "Nivea",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6a2e2ad1-c485-4836-919d-d8c0bede7d2f.png"
  },
  {
      "id": 7,
      "name": "Complan",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6a837105-a5bd-4c8e-8afa-2eda2960c9e7.png"
    },
    {
      "id": 8,
      "name": "Tejasya Ayurveda",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/8b77c71c-4e7b-48c5-94d6-811748118d10.png"
    },
    {
      "id": 9,
      "name": "Tata 1mg Products",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a307b427-631d-436b-bdfc-4a221836588d.png"
    },
]
let checkuplistarr = [
  {
      "id": 1,
      "name": "Tata 1mg Products",
      "name": "Tata 1mg Products",
      "name": "Tata 1mg Products",
      "name": "Tata 1mg Products",
      "name": "Tata 1mg Products",
      "name": "Tata 1mg Products",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a307b427-631d-436b-bdfc-4a221836588d.png"
    },
]
let testlistarr = [
  {
    "id": 1,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
    
  },
  {
      "id": 2,
      "name": "Diabetes care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
  },
  {
    "id": 3,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png"
  },
  {
      "id": 4,
      "name": "Diabetes care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png"
  },
  {
    "id": 5,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"
  },
  {
    "id": 6,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png"
  },
]
let popularlistarr = [
  {
    "id": 1,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
    
  },
  {
      "id": 2,
      "name": "Diabetes care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
  },
  {
    "id": 3,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png"
  },
  {
      "id": 4,
      "name": "Diabetes care",
      "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png"
  },
  {
    "id": 5,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"
  },
  {
    "id": 6,
    "name": "Diabetes care",
    "image": "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png"
  },
]