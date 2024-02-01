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

function validateForm(){
   const nama =document.forms["message-form"]["namalengkap"].value;
   const notelp =document.form["message-form"]["nomertelp"].value;
   const email =document.forms["message-form"]["alamatemail"]

   if (nama == "" || notelp =="" || email ==""){
         alert ("Anda harus mengisi data dengan lengkap");
return false;
}

setSenderUI (nama, notelp, email);
return false;
}

function setSenderUI(nama, notelp, email) {
   document.getElementById("sender-nama").innerHTML = nama;
   document.getElementById("sender-notelp").innerHTML = notelp;
   document.getElementById("sender-email").innerHTML = email;   
}