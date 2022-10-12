var interval = setTimeout(function(){
  for(let i = 0; i < document.getElementsByTagName("tbody")[1].childElementCount; i++) {
    document.getElementsByTagName("tbody")[1].children[i].children[1].textContent = "100%";
    document.getElementsByTagName("tbody")[1].children[i].children[2].textContent = document.getElementsByTagName("tbody")[1].children[i].children[2].textContent.split(" - ")[1] + " - " + document.getElementsByTagName("tbody")[1].children[i].children[2].textContent.split(" - ")[1];
    document.getElementsByTagName("tbody")[1].children[i].children[3].textContent = "100%";
    document.getElementsByTagName("tbody")[1].children[i].children[4].textContent=document.getElementsByTagName("tbody")[1].children[i].children[4].textContent.split(" - ")[1] + " - " + document.getElementsByTagName("tbody")[1].children[i].children[4].textContent.split(" - ")[1];
    document.getElementsByTagName("tbody")[1].children[i].children[5].textContent = "10/12/2077 07:12:00";
  }
  
  document.getElementsByTagName("img")[0].src = "https://i.imgur.com/hgmiVTS.gif";
  document.getElementsByTagName("img")[1].src = "https://www.iconpacks.net/icons/1/free-home-icon-189-thumb.png";
  document.getElementsByTagName("img")[2].src = "https://cdn-icons-png.flaticon.com/512/3238/3238024.png";
  document.getElementsByTagName("img")[3].src = "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/trophy-icon.png";},100);
