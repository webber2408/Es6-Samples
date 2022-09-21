function showName(name) {
  console.log("Name: " + name);
}

{
  /*
        Adding this will ensure JS Garbage Collector collects the `name`
        and doesn't keep it for later as the `btn` has a closure implemented
        within the `addEventListener` and the JS Engine will keep the variable entact
        thinking it might get used in the closure if we do not enclose it in a separate
        block `{}` explicitly.
    */
  var name = "Rahul Sharma";

  showName(name); // Name: Rahul Sharma
}

// var btn = document.querySelector("#submit");

// btn.addEventListener('click', () => {
//     console.log("Submitted!");
// })
