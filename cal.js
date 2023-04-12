   // JavaScript code 
     const kgInput = document.getElementById("kg");
     const lbInput = document.getElementById("lb");


  function convertKgToLb() {
     const kg = parseFloat(document.getElementById("kg").value);
     const lb = kg * 2.20462;
     document.getElementById("lb").value = lb.toFixed(2);

  if(localStorage) {
     // Store data
  localStorage.setItem("kgValue", kg);
  localStorage.setItem("lbValue", lb.toFixed(2));
    // Retrieve data
  const savedKg = localStorage.getItem("kgValue");
  if (savedKg) {
    // alert("Hi, the saved kg value is: " + savedKg);
  } else {
    // alert("No kg value saved in local storage.");
  }
  // Retrieve data
  const savedLb = localStorage.getItem("lbValue");
  if (savedLb) {
    // alert("Hi, the saved lb value after converting is: " + savedLb);
} else {
    // alert("No lb value saved in local storage.");
  }
 }
}


// The value is showing on a form after refreshing the page
function loadSavedKgValue() {
  if (localStorage && localStorage.getItem("kgValue")) {
    document.getElementById("kg").value = localStorage.getItem("kgValue");
  }
    if (localStorage && localStorage.getItem("lbValue")) {
    document.getElementById("lb").value = localStorage.getItem("lbValue");
  }
}

 function convertLbToKg() {
     const lb = parseFloat(document.getElementById("lb").value);
     const kg = lb / 2.20462;
     document.getElementById("kg").value = kg.toFixed(2);
      
 if(localStorage) {
     // Store data
  localStorage.setItem("lbValue", lb);
  localStorage.setItem("kgValue", kg.toFixed(2));
  
    // Retrieve data
  const savedLb = localStorage.getItem("lbValue");
  if (savedLb) {
    // alert("Hi, the saved lb value is: " + savedLb);
  } else {
    // alert("No lb value saved in local storage.");
  }
  // Retrieve data
  const savedKg = localStorage.getItem("kgValue");
  if (savedKg) {
    // alert("Hi, the saved kg value after converting is: " + savedKg);
} else {
    // alert("No kg value saved in local storage.");
  }
 }
}

// The value is showing on a form after refreshing the page
function loadSavedLbValue() {
  if (localStorage && localStorage.getItem("lbValue")) {
    document.getElementById("lb").value = localStorage.getItem("lbValue");
  }
    if (localStorage && localStorage.getItem("kgValue")) {
    document.getElementById("kg").value = localStorage.getItem("kgValue");
  }
}

window.onload = function() {
  loadSavedKgValue();
  loadSavedLbValue();
}


 // Clear the saved value from localStorage
 function clearData() {
   localStorage.removeItem("kgValue");
   localStorage.removeItem("lbValue");
   document.getElementById("kg").value = "";
   document.getElementById("lb").value = "";
 }
