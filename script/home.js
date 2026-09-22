/* ========================================
   GET STARTED POPUP
======================================== */

const getStarted = document.getElementById("getStarted");

const contactPopup = document.getElementById("contactPopup");

const closePopup = document.getElementById("closePopup");

/* ========================================
   OPEN POPUP
======================================== */

getStarted.addEventListener("click", function () {
  contactPopup.classList.add("show");
});

/* ========================================
   CLOSE POPUP
======================================== */

closePopup.addEventListener("click", function () {
  contactPopup.classList.remove("show");
});

/* ========================================
   CLICK OUTSIDE POPUP
======================================== */

contactPopup.addEventListener("click", function (event) {
  if (event.target === contactPopup) {
    contactPopup.classList.remove("show");
  }
});

/* ========================================
   PRESS ESC TO CLOSE
======================================== */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    contactPopup.classList.remove("show");
  }
});
