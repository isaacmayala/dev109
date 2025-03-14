// Get all the elements we need
    const clearButton = document.getElementById('clearButton');
    const colorPicker = document.getElementById('colorPicker');
    const sizeSlider = document.getElementById('sizeSlider');
    const sizeValue = document.getElementById('sizeValue');
    const drawingArea = document.getElementById('drawingArea');
    
    // Update the size value display when slider changes
    sizeSlider.addEventListener('input', function() {
      sizeValue.textContent = this.value + 'px';
    });
    
    // Clear button event listener
    clearButton.addEventListener('click', function(event) {
      // Remove all dots
      while (drawingArea.firstChild) {
        drawingArea.removeChild(drawingArea.firstChild);
      }
      
      // Stop event propagation to prevent creating a new dot
      event.stopPropagation();
    });
    
    // Click event listener for the drawing area
    drawingArea.addEventListener('click', function(event) {
      // Get current values
      const size = parseInt(sizeSlider.value);
      const color = colorPicker.value;
      
      // Create a new dot
      const dot = document.createElement('div');
      dot.className = 'dot';
      
      // Set the dot's position (centered on click)
      dot.style.left = event.pageX + 'px';
      dot.style.top = event.pageY + 'px';
      
      // Set the dot's size and color
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.background = color;
      
      // Add the dot to the drawing area
      drawingArea.appendChild(dot);
    });
    
    // Prevent dots from being created when clicking on controls
    document.querySelector('.controls').addEventListener('click', function(event) {
      event.stopPropagation();
    });
