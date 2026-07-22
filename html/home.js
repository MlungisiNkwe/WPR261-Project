//array foods, with all the objects needed for the nine meals
//shared array for different parts of the code
const foods = [
  {
    title: "Mopane Worms",
    description: "Dried caterpillars, a popular traditional protein source.",
    image: "Images/mopaneworms.jpg",
    facts: [
      "Rich in protein and iron",
      "Popular in South Africa, Botswana and Zimbabwe",
      "Harvested from Mopane trees",
    ],
    location: "Limpopo, South Africa",
    protein: "High",
    fat: "Low",
    cookingMethod: "Fried / Boiled",
  },
  {
    title: "Chicken Feet",
    description:
      "Known as Walkie Talkies, a popular South African street food.",
    image: "images/chickenfeet.jpg",
    facts: [
      "Very popular in South African townships",
      "Rich in collagen",
      "Usually sold by street vendors",
    ],
    location: "Nationwide, South Africa",
    protein: "Medium",
    fat: "Medium",
    cookingMethod: "Grilled / Boiled",
  },
  {
    title: "Crocodile Meat",
    description: "A lean white meat often compared to chicken or fish.",
    image: "images/crocodile.jpg",
    facts: [
      "Low in fat",
      "High in protein",
      "Served in some South African restaurants",
    ],
    location: "Game reserves and select restaurants, South Africa",
    protein: "High",
    fat: "Low",
    cookingMethod: "Grilled",
  },
  {
    title: "Ostrich Meat",
    description: "A healthy, low-fat, high-protein alternative to beef.",
    image: "images/ostrich.jpg",
    facts: [
      "Low in fat",
      "High in protein and iron",
      "South Africa is one of the world's leading ostrich meat producers",
    ],
    location: "Western Cape, South Africa",
    protein: "High",
    fat: "Very Low",
    cookingMethod: "Grilled",
  },
  {
    title: "Termites",
    description:
      "Collected after rainfall, roasted, fried, or dried as a snack.",
    image: "Images/termites.jpg",
    facts: [
      "Rich in protein, healthy fats and minerals",
      "Usually collected after rainfall",
      "Considered a delicacy in African countries",
    ],
    location: "South Africa, Zimbabwe, Botswana, Zambia",
    protein: "Low",
    fat: "Very Low",
    cookingMethod: "Fried",
  },
  {
    title: "Flying Ants",
    description: "A seasonal delicacy, roasted or fried after summer rain.",
    image: "Images/flyingants.jpg",
    facts: [
      "Available only during certain times of the year",
      "High protein",
      "Often collected by families after heavy rains",
    ],
    location: "South Africa, Botswana, Zambia",
    protein: "Low",
    fat: "Very Low",
    cookingMethod: "Fried",
  },
  {
    title: "Cow Heel",
    description: "Slow-cooked trotters, rich in collagen, served with pap.",
    image: "Images/cowsheel.jpg",
    facts: [
      "Rich in collagen",
      "Slow-cooked for several hours",
      "Commonly eaten at family gatherings",
    ],
    location: "South Africa, Botswana, Lesotho, Zimbabwe",
    protein: "High",
    fat: "Very High",
    cookingMethod: "Cooked",
  },
  {
    title: "Tripe",
    description: "Stomach lining slow-cooked with vegetables and spices.",
    image: "Images/tripe.jpg",
    facts: [
      "Popular traditional South African meal",
      "Usually served with pap or steamed bread",
      "Prepared differently by various cultural groups",
    ],
    location: "Southern Africa",
    protein: "High",
    fat: "Very High",
    cookingMethod: "Cooked",
  },

  {
    title: "Sheep's Head",
    description:
      "A traditional delicacy, slow-cooked whole and known as 'smiley' in South Africa.",
    image: "Images/sheepshead.jpg",
    facts: [
      "Known locally as a 'smiley'",
      "Slow-cooked or steamed until tender",
      "Commonly sold by street vendors and at social gatherings",
    ],
    location: "South Africa",
    protein: "High",
    fat: "Medium",
    cookingMethod: "Boiled",
  },
];

//Accessing DOM Elements
// returns elements by the id used in the html
// querySelector -It can select elements based on various criteria,
// such as ( tag names class names IDs attribute values, and more.)
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
//It returns the first element that matches a specified CSS selector
const resultsContainer = document.querySelector(".results-container");

//Function
function renderResults(items) {
  //wipes old search results
  resultsContainer.innerHTML = "";

  //checking if the word matches any food
  if (items.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent = "No matching foods found.";
    resultsContainer.appendChild(noResults);
    return;
  }

  //iterates through every food object in the foods array
  //one meal from the foods array
  items.forEach((food) => {
    const card = document.createElement("article");
    //adds to classes for class styling by the css
    card.classList.add("results-block");
    card.dataset.title = food.title; // hook for Person 2's details click listener

    //creates new empty img element
    const img = document.createElement("img");
    //Gets image and title from the array key and value
    //from each indvidual food object in the foods array.
    img.src = food.image;
    img.alt = food.title;

    //creates new empty heading element
    const title = document.createElement("h3");
    //adds a class for the css styling
    title.classList.add("result-title");
    title.textContent = food.title;

    //creates empty paragraph element
    const desc = document.createElement("p");
    //gets description from array key and value
    desc.textContent = food.description;

    //Adds the element as the last child of a parent element
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    // attaches card into real page, inside your results container
    resultsContainer.appendChild(card);
  });
}

//Filter function and logic for certain foods from the foods array
function filterFoods(searchWord) {
  const lowerQuery = searchWord.trim().toLowerCase();

  if (lowerQuery === "") {
    return foods;
  } else {
    return foods.filter((food) =>
      food.title.toLowerCase().includes(lowerQuery),
    );
  }
}

//Event Listener, for submit form.
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();//Stops page from reloading after pressing submit
  const query = searchInput.value;//garbs text typed, held in value property
  const matches = filterFoods(query);// calls filter foods function,using the argument query
  renderResults(matches);//calls renderResults function, using the argument matches 
});

//person 2 starts here

renderResults(foods);
