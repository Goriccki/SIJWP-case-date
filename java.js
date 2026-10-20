switch (new Date().getDay()) {
  case 0:
    dan = "nedelja";
    break;
  case 1:
    dan = "ponedeljak";
    console.log("Ja najviše volim JS od svih programskih jezika")
    break;
  case 2:
     dan = "utorak";
    break;
  case 3:
    dan = "srijeda";
    break;
  case 4:
    dan = "cetvrtak";
    console.log("Mali petak")
    break;
  case 5:
    dan = "petak";
    console.log("Vikend je na vidiku!")
    break;
  case 6:
    dan = "subota";
}

console.log(dan);