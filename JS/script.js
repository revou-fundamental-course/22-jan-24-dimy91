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

function validation(){
   var nama =document.getElementById("nama");
   var notelp =document.getElementById("notelp");
   var email =document.getElementById("email");

   if (nama != "" && notelp !="" && email !=""){
      return true;
      }else{
         alert ('Anda harus mengisi data dengan lengkap');
      }
}