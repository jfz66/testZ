const firstNumberElt = document.getElementById("first");
const secondNumberElt = document.getElementById("second");
const formElt = document.querySelector("form");
const resultElt = document.getElementById("result");

formElt.addEventListener("submit", (e) => {
    e.preventDefault();
    const n1 = +firstNumberElt.value;
    const n2 = +secondNumberElt.value;
    console.log(n2);
    resultElt.textContent = n1 + n2;
    console.log("ok");
});
