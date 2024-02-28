var age = 25; 
alert("My age is: " + age);

if (localStorage.getItem('visits')) {
    // If it exists, increment the count
    var visits = parseInt(localStorage.getItem('visits')) + 1;
  } else {
    // If it doesn't exist, set the count to 1
    var visits = 1;
  }
  
  // Store the updated count in local storage
  localStorage.setItem('visits', visits);
  
  // Display the number of visits on the page
  alert("You have visited this site " + visits + " times.");

  var birthYear = 1990;
  document.write("My birth year is: " + birthYear + "<br>");
  
  var visitorName = "John Doe";
  var productTitle = "T-shirt";
  var quantity = 5;
  
  document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");