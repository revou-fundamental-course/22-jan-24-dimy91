var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
   showDivs((slideIndex += n))
}

function showDivs(n) {
   var i;
   var imgList = document.getElementsByClassName("img-slideshow");
   if (n > imgList.length) slideIndex = 1;
   else if (n < 1) slideIndex = imgList.length;

   for (i = 0; i < imgList.length; i++) {
      imgList[i].style.display = "none";
   }

   imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
plusDivs(1);
}, 1500);

function validateForm() {
   const namapembeli = document.forms["message-form"]["namalengkap"].value;
   const notelppembeli = document.forms["message-form"]["nomertelp"].value;
   const emailpembeli = document.forms["message-form"]["alamatemail"].value;
   const pesananpembeli = document.forms["message-form"]["pesanannya"].value;
   
   if (namapembeli == "" || notelppembeli == "" || emailpembeli == "" || pesananpembeli == "")
   {alert("Tidak boleh ada data kosong");
   return false;
}

setSenderUI(namapembeli, notelppembeli, emailpembeli, pesananpembeli);
return false;
}

function setSenderUI(namapembeli, notelppembeli, emailpembeli, pesananpembeli) {
   document.getElementById("sender-namalengkap").innerHTML = namapembeli;
   document.getElementById("sender-nomertelp").innerHTML = notelppembeli;
   document.getElementById("sender-alamatemail").innerHTML = emailpembeli;
   document.getElementById("sender-pesanannya").innerHTML = pesananpembeli;
}