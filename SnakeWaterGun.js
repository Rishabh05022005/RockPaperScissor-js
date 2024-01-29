let UserInput = prompt('Enter R, P, or S');
let SystemInput = Math.floor(Math.random() * 3);

let SystemInput_array = ["S", "P", "R"]; // Corrected the array
let Object = { "S": 0, "P": 1, "R": 2 }; // Corrected the object


if (Object[UserInput] === SystemInput) {
  document.write("Tied");
} else if (
  (UserInput === "R" && SystemInput_array[SystemInput] === "S") 
  (UserInput === "P" && SystemInput_array[SystemInput] === "R") 
  (UserInput === "S" && SystemInput_array[SystemInput] === "P")
) {
  document.write("Won");
} else {
  document.write("Lost");
}
