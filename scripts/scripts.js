function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to shuffle background color
  function shuffleBackgroundColor() {
    var newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  }

  // Add event listener to the button
  document.getElementById('shuffleButton').addEventListener('click', shuffleBackgroundColor);