const maclarID = document.getElementById("MaclarID");
const yayinURL = document.getElementById("YayinURL");

let stopBot = false;

function stopBotFunction() {
  stopBot = true;
}

async function addStream() {
  const startIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

  for (let i = startIndex; i < maclarID.length + 1; i++) {
    maclarID.selectedIndex = i;
    let url = `https://footy1.tk/p/mlb${i + 1}.html`;
    yayinURL.value = url;

    localStorage.setItem("currentIndex", i);

    await new Promise((resolve) => setTimeout(resolve, 500));
    if (stopBot || startIndex === maclarID.length) {
      break;
    }
    document.querySelector("button").click();
  }
}

addStream();

document.body.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "r") {
    localStorage.removeItem("currentIndex");
  } else if (event.ctrlKey && event.key === "a") {
    stopBotFunction();
  }
});
