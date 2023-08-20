let popupShown = false;

function showOrientationPopup() {
  if (!popupShown) {
    alert("Please rotate your device to landscape mode to continue.");
    popupShown = true;
  }
}

function checkOrientationAndReload() {
  if (window.innerWidth < 768 && window.orientation !== 90) {
    document.body.innerHTML = ''; // Clear the page content
    showOrientationPopup();
  } else if (popupShown && window.innerWidth < 768 && window.orientation === 90) {
    location.reload(); // Reload the page when in correct orientation
  }
}

window.addEventListener("orientationchange", checkOrientationAndReload);
window.addEventListener("resize", checkOrientationAndReload);

checkOrientationAndReload();

