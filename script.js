var userName = prompt("Enter your name ? ");
alert( userName + ", Welcome to my fav's novels website")

var userCategory = prompt("Can you tell us your fav novels category  ? ");

if(userCategory == "rebirth"){
  alert(" We suggestion to read [Hell the king] novel ");
  document.write("<h2 style='color:red;'> You choose  " + userCategory + " category, We suggestion to read [Hell the king] novel </p>")
}
else if(userCategory=="romance"){
  alert(" We suggestion to read [Nine star hegemon body art] novel ");
  document.write("<h2 style='color:#ff96ad;'> You choose  " + userCategory + " category, We suggestion to read [Nine star hegemon body art] novel </p>")

}
else{
  alert(" We suggestion to see all website's novels ")
}

