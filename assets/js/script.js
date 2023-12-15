var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function sendMail(){
  var params = {
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  
const serviceID = "service_o2kjzut";
const templateID = "template_0rtnlfg";


emailjs.send(serviceID, templateID, params)
.then(
  res =>{
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Pesan Terkirim Dengan Baik!");
})
.catch((err) => console.log(err));
}

