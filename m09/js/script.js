var clearButton = document.getElementById("clearButton");
  var colorPicker = document.getElementById("colorPicker");
  var sizeSlider = document.getElementById("sizeSlider");

  clearButton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("dot");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    event.stopPropagation();
  });

  addEventListener("click", function(event) {
    if (event.target !== clearButton && event.target !== colorPicker && event.target !== sizeSlider) {
      var dot = document.createElement("div");
      dot.className = "dot";
      dot.style.left = (event.pageX - (parseInt(sizeSlider.value) / 2)) + "px";
      dot.style.top = (event.pageY - (parseInt(sizeSlider.value) / 2)) + "px";
      dot.style.background = colorPicker.value;
      dot.style.width = sizeSlider.value + "px";
      dot.style.height = sizeSlider.value + "px";
      document.body.appendChild(dot);
    }
  });
