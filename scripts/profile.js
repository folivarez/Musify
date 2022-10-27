let body = document.querySelector("body");

// Hago que los circuilitos giren cuando se clickea el cassette correspondiente
let tapes = document.querySelectorAll(".tape");
tapes.forEach((tape) =>
  tape.addEventListener("click", (event) => {
    let targetCircles = event.target.querySelectorAll(".circle");
    let circles = document.querySelectorAll(".circle");
    if (event.target.classList.contains("playing") == true) {
      event.target.classList.remove("playing");
      circles.forEach((circle) => circle.classList.remove("rotating"));
    } else {
      event.target.classList.add("playing");
      circles.forEach((circle) => circle.classList.remove("rotating"));
      targetCircles.forEach((circle) => circle.classList.add("rotating"));
    }
  })
); // Debería hacer algo para que paren de girar cuadno termina la cancion

let tape1 = document.querySelector("#tape1");
let tape2 = document.querySelector("#tape2");
let tape3 = document.querySelector("#tape3");
let tape4 = document.querySelector("#tape4");
let audio1 = document.querySelector("#audio1");
let audio2 = document.querySelector("#audio2");
let audio3 = document.querySelector("#audio3");
let audio4 = document.querySelector("#audio4");

tape1.addEventListener("click", (event) => {
  if (event.target.classList.contains("playing") == true) {
    audio1.play();
  } else {
    audio1.load();
    audio1.pause();
  }
});

tape2.addEventListener("click", (event) => {
  if (event.target.classList.contains("playing") == true) {
    audio2.play();
  } else {
    audio2.load();
    audio2.pause();
  }
});

tape3.addEventListener("click", (event) => {
  if (event.target.classList.contains("playing") == true) {
    audio3.play();
  } else {
    audio3.load();
    audio3.pause();
  }
});

tape4.addEventListener("click", (event) => {
  if (event.target.classList.contains("playing") == true) {
    audio4.play();
  } else {
    audio4.load();
    audio4.pause();
  }
});


// ========================== Obtener datos de una api ===============================
const API = "https://run.mocky.io/v3/8610704b-d524-4a5d-ae13-e43465f12538";
$(document).ready(function () {
    //  getProfiles(); // Trae todos los perfiles

    const perfilID = $('?id').val(); 
     getProfileId(perfilID); // Trae el perfil con el id 
});

function getProfiles() {
  $.get(
    API,
    function (data) {
      const profiles = data.profiles;
    //   Recorro la lista de perfiles e imprimo el nombre por ejemplo:
      $.each(profiles, function (key, profile) {
        console.log("item.nombre: ", profile.nombre);
      });
    },
    "json"
  );
}

function getProfileId(_id) {
  $.get(
    API,
    function (data) {
        // De la lista de perfiles me quedo solo con el que recibo por parametros (_id) y selecciono ese de la lista
      const profile = data.profiles[_id];
    //   Le agrego al id name el nombre del perfil en el html
      $('#name').append(profile.nombre);
    },
    "json"
  );
}
