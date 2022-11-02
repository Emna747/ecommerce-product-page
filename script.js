const shopItems = [
  { id: "1230", productName: "Wooden Dinosaurs Set", price: 36.99 },
  { id: "4560", productName: "Wooden Kitchen Set", price: 42.89 },
  { id: "7890", productName: "Colorful Loops", price: 19.89 },
  { id: "1011", productName: "Wooden Alphabet Snake", price: 22.99 },
  { id: "1213", productName: "Stuffed Lion Toy", price: 7.99 },
  { id: "1314", productName: "Pearls Rainbow Toy", price: 39.89 },
  { id: "1415", productName: "Baby Wool Toy", price: 9.89 },
  { id: "1617", productName: "Wooden Leafs Set ", price: 27.99 },
  { id: "1819", productName: "Wood Animals Puzzles", price: 17.99 },
  { id: "2021", productName: "Baby Wooden Set", price: 30.99 },
  { id: "2223", productName: "Whale Puzzle Set", price: 16.89 },
  { id: "2425", productName: "Alphabet Wooden Set", price: 22.89 },
  { id: "2627", productName: "Storage Boxes ", price: 19.99 },
  { id: "2829", productName: "Zoo Animals Set", price: 22.89 },
  { id: "3031", productName: "Dinosaur Rocking Chair ", price: 74.89 },
  { id: "3233", productName: "Red Dress", price: 50.99 },
  { id: "3435", productName: "Colors Pattern Dress", price: 64.99 },
  { id: "3637", productName: "Boy Blue Set", price: 87.99 },
  { id: "3839", productName: "Patterned T-Shirt Flannel", price: 24.55 },
  { id: "4041", productName: "Paw Patrol Set", price: 55.99 },
  { id: "4243", productName: "Pinky New Born Set", price: 13.99 },
  { id: "4445", productName: "White Cotton Dress", price: 29.99 },
  { id: "4647", productName: "Dark blue Flannel", price: 32.99 },
  { id: "4849", productName: "Aqua Girl Set", price: 56.99 },
  { id: "5051", productName: "Pink Skirt ", price: 18.99 },
  { id: "5253", productName: "Green Dinosaur Set", price: 60.99 },
  { id: "5455", productName: "Beige Rain Coat", price: 74.99 },
  { id: "5657", productName: "Baby Bath Cap", price: 20.99 },
  { id: "5859", productName: "Cotton T-Shirt", price: 16.99 },
  { id: "6061", productName: "Disney Princess Dress", price: 37.99 },
  { id: "6263", productName: "White Cotton Flannel", price: 18.99 },
  { id: "6465", productName: "Boy Lego Set", price: 45.99 },
  { id: "6667", productName: "Cotton T-Shirt", price: 19.99 },
  { id: "6869", productName: "Polka Dot Bbay Shower Cap", price: 22.99 },
  { id: "7071", productName: "Pink Dress", price: 55.99 },
  { id: "7273", productName: "Cotton Flower Set", price: 30.99 },
  { id: "7475", productName: "Blue T-Shirt", price: 18.99 },
  { id: "7677", productName: "Green Girl Dress", price: 56.99 },
  { id: "7879", productName: "Grey Cotton Flannel", price: 25.99 },
  { id: "8081", productName: "Baby and Toddler Crib", price: 300 },
  { id: "8283", productName: "Baby Wood Crib ", price: 289 },
  { id: "8485", productName: "Closet Items", price: 450 },
  { id: "8687", productName: "White Wooden wardrobe", price: 189 },
  { id: "8889", productName: "Sofa Chair", price: 115 },
  { id: "9091", productName: "Long Sofa Chair", price: 220 },
  { id: "1001", productName: "Rectangular Low Wardrobe", price: 190 },
  { id: "1002", productName: "Circular Wooden Crib", price: 490 },
  { id: "1003", productName: "Book Holder Set", price: 55 },
  { id: "1004", productName: "Binky Jar", price: 25 },
  { id: "1005", productName: "Indoor Small Tipi", price: 110 },
  { id: "1006", productName: "Rectangular Grey Wardrobe", price: 189 },
  { id: "1007", productName: "Study desk", price: 299 },
  { id: "1008", productName: "Blue Whale Wardrobe", price: 210 },
  { id: "1009", productName: "Decorative Lamps", price: 32 },
  { id: "1010", productName: "Fruits and Vegetables Book", price: 6.99 },
  { id: "1011", productName: "Fun with Numbers and Shapes", price: 9.99 },
  { id: "1012", productName: "Coloring Book ", price: 7.89 },
  { id: "1013", productName: "Toddler Coloring Book", price: 7.89 },
  { id: "1014", productName: "Easy Coloring Book", price: 7.89 },
  { id: "1015", productName: "Rescue at Lake Wild Book", price: 9.99 },
  { id: "1016", productName: "Charlotte's Web", price: 10.99 },
  { id: "1017", productName: "My Quiet Imagination", price: 8.99 },
  { id: "1018", productName: "The Voyage to Magical North", price: 13.99 },
  { id: "1019", productName: "Peter Pan", price: 10.99 },
  { id: "1020", productName: "Skycircus", price: 5.89 },
  { id: "1021", productName: "Susie Won't Back Down", price: 16.99 },
  { id: "1022", productName: "Red Riding Hood", price: 9.99 },
  { id: "1023", productName: "Alphabet Book", price: 13.89 },
  { id: "1024", productName: "Having A Friend", price: 8.99 },
];

let shoppingCard = [];
let shopitem;
function addToCart() {
  let selectedItem;

  console.log("what have we got here");
}

function clearCart() {
  document.getElementsByClassName("Action").innerHTML = " ";
  console.log("supposed to delete the items from the card");
}

function removeOneItem() {
  shopitem--;
  document.getElementsByClassName("fa-solid fa-minus").innerHTML = shopitem;
  console.log("supposed to reduce the number by one");
}
function addOneItem() {
  shopitem++;
  document.getElementsByClassName("fa-solid fa-plus").innerHTML = shopitem;
  console.log("supposed to increase the number by one");
}
function Removeproducts() {
  document.getElementsByClassName("remove-button").innerHTML = " ";
  console.log("supposed to delete the item");
}
/*
update the conetnt of the card by grabing the element document.querySelector(h1).innerHTML = products
and product is products++ to increment by 1

to change the color of the cart icon one must use
 function colormanip () {document.querySelector('#shopcart').onclick = function() {
  document.querySelector('#shopcart').style.color ="red";}}
  
  about local storage 
  
  localeStorage.getItem(key)
   localeStorage.setItem(key,value)
  return document.getElementsByClassName("purchase");
document.getElementById("myBtn").addEventListener("click", displayDate);}
*/
