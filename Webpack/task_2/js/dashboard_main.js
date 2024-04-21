const $ = require("jquery");
const _ = require("lodash");
import holbertonLogo from "../assets/holberton-logo.jpg";

let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

const $button = $("<button>Click here to get started</button>").on(
  "click",
  _.debounce(updateCounter, 500, {
    leading: true,
    trailing: false,
  }),
);

// Ajout du div pour le logo en haut du corps du document
$("body").prepend("<div id='logo'></div>");
const $logo = $("<img>").attr("src", holbertonLogo);
$("#logo").prepend($logo);

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append($button);
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");
