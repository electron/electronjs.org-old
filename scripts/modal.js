module.exports = () => {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user types ?, open the modal 
  window.addEventListener("keydown", function(event) {
    if (event.key === "?") {
      if (event.target === null || event.target.tagName !== "INPUT") {
        modal.style.display = "block";
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    }
  }, true);

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  }
}