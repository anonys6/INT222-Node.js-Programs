// Define the lengths of the three sides of the triangle
var side1 = 5;
var side2 = 6;
var side3 = 7;

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Calculate the area using Heron's formula
var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

// Print the area of the triangle
console.log("The area of the triangle is:", area);
console.log(area.toFixed(3)); //counts after decimal
console.log(area.toPrecision(5)); //count from the leftmost digit