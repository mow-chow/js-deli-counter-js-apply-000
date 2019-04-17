var katzDeliLine = [];
function takeANumber (katzDeliLine) {
  katzDeliLine.push(number);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
};
//create an empty array for the current deli line (global variable)
//create a function that accepts two arguments, current line and name, that adds the new name into the current line
//return a sentance that welcomes newest person in line and use (.length) js method to identify thier place in line

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return  "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}
//create function that accepts one argument, the current line
//create an if else statement that checks how many people are in line
//and returns the line status
//the line is empty if the array is empty and returns string with first person in line if line isnt empty
//use js (.shift) method to remove person at index 0 from line and return it in a string

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return  "The line is currently empty."
}else {
  var order = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    order.push (i + 1+ ". " + katzDeliLine[i]);
  }
  return "The line is currently: " + order.join(", ");
}
}
//create function that accepts one argument, current line
//create a variable that stores an empty array
//create if else statement that checks how many people are in line and returns an ordered list of the people in line
//if no one in line returns string stating empty
//if people in line:
//create a for loop that iterates through the current line array and pushes each name to the empty string using js (.push) method
//use (.join) method to create a string out of the now filled array
