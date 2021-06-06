// var userName = prompt("Enter your name ? ");
// alert( userName + ", Welcome to my fav's novels website")

var userCategory = prompt("Can you tell us your fav novels category  ? ");
var userRate;
var img='';
function favNovelsFun(){
  while (userCategory != "rebirth" && userCategory != "romance") {

    userCategory = prompt("Can you tell us your fav novels category  ?");
  }
}
favNovelsFun();
// while (userCategory != "rebirth" && userCategory != "romance") {

//     userCategory = prompt("Can you tell us your fav novels category  ?");
//   }
var starsNovelsFun = function () {
  for(i=userRate;i>0;i--){
    img +="<img src='https://cdn.icon-icons.com/icons2/1863/PNG/512/star-rate_118607.png' />"
  }

  return img;

}
if(userCategory == "rebirth"){
  alert(" We suggestion to read [Hell the king] novel ");
  document.write("<h2 style='color:red;'> You choose  " + userCategory + " category, We suggestion to read [Hell the king] novel </p>")

  userRate = prompt(" What star rating would you give [Hell the king] novel ?");
  // for(i=userRate;i>0;i--){
  //   img +="<img src='https://cdn.icon-icons.com/icons2/1863/PNG/512/star-rate_118607.png' />"
  // }

  var imgRate=starsNovelsFun();
  document.write(imgRate)
  
}
else if(userCategory=="romance"){
  alert(" We suggestion to read [Nine star hegemon body art] novel ");
  document.write("<h2 style='color:#ff96ad;'> You choose  " + userCategory + " category, We suggestion to read [Nine star hegemon body art] novel </p>")
  userRate = prompt(" What star rating would you give [Nine star hegemon body art] novel ?");
  var imgRate=starsNovelsFun();
  document.write(imgRate)

}
else{
  alert(" We suggestion to see all website's novels ")
}

