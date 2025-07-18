// ----------------------------------------
// 1. Selecting Elements
// ----------------------------------------
// Question 1.1: Select the element with the ID 'title' and log it to the console.

let title = document.getElementById("title");
console.log(title);

// Question 1.2: Select all elements with the class 'item' and log them to the console.
let item = document.getElementsByClassName("item");
console.log(item);

// Question 1.3: Select the first element with the class 'description' using a query selector and log it.
let desc = document.querySelector(".description");
console.log(desc);

// ----------------------------------------
// 2. Text/Content Access
// ----------------------------------------
// Question 2.1: Change the text of the `<h1>` with the ID 'title' to "Welcome to the DOM Challenge!"
document.getElementById("title");
title.innerText = "Welcome to the DOM challenge";

// Question 2.2: Change the HTML inside the `div` with the ID 'status-message' to "<strong>Ready to start!</strong>".
document.getElementById('status-message').innerHTML="<strong>Ready to strat!</>";

// Question 2.3: Get the text content of the second list item (Item 2) and log it to the console.
let item2 = document.getElementsByClassName('item')[1];
console.log(item2);

// ----------------------------------------
// 3. Attribute Manipulation
// ----------------------------------------
// Question 3.1: Get the 'src' attribute of the image with the ID 'image' and log it.
document.getElementById('image');
let src = image.getAttribute('src');
console.log(src);

// Question 3.2: Change the 'src' attribute of the image to 'new_image.png'.
document.getElementById("image").setAttribute("src", "new_image.png"); 

// Question 3.3: Add a 'disabled' attribute to the button with the ID 'action-button'.
let ac = document.getElementById("action-button").setAttribute("disabled", "");

// ----------------------------------------
// 4. Dynamic DOM Manipulation
// ----------------------------------------
// Question 4.1: Create a new `<li>` element. Set its text content to "Item 3" and append it to the `<ul>` with the ID 'item-list'.
let new_item =  document.createElement('li');
new_item.innerText = "Item 3";
document.getElementById('item-list').append(new_item);


// Question 4.2: Create a new `<p>` element. Set its text content to "This is a new paragraph." and add it to the *beginning* of the `div` with the ID 'main-container'.
let par = document.createElement('p');
par.innerText = "This is a new paragraph";
document.getElementById("main-container").prepend(par);

// Question 4.3: Remove the `<li>` with the text "Item 1" from the list.
let rem = document.querySelector('.item');
rem.remove();

// ----------------------------------------
// 5. Style & Class Updates
// ----------------------------------------
// Question 5.1: Change the background color of the `div` with the ID 'main-container' to '#f0f0f0'.
let bg = document.getElementById('main-container');
bg.style.backgroundColor = "#f0f0f0";

// Question 5.2: Add the class 'highlight' to the `<h1>` with the ID 'title'.
let Add_class = document.querySelector('h1');
Add_class.classList.add('highlight');

