<!DOCTYPE html>
<html>
<body>
<head>

<style>
body {background-color: powderblue;}
h2   {color: blue;}
</style>

</head>

<h2>please enter ur name</h2>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text =person;
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>
