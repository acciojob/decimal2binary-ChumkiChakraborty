function decimalToBinary(num) {
      const decimalNumber = parseInt(num, 10);
      
      // Check for valid input
      if (isNaN(decimalNumber) || decimalNumber < 0) {
        document.getElementById('result').innerText = 'Please enter a valid non-negative integer.';
        return;
      }

      // Convert to binary
      const binaryNumber = decimalNumber.toString(2);
      
      // Display the result
      document.getElementById('result').innerText = `Binary equivalent: ${binaryNumber}`;
      
      // Return the binary number for testing
      return binaryNumber; 
    }

    // Create a wrapper function to handle the button click
    function convertToBinary() {
      const num = document.getElementById('decimal-input').value;
      decimalToBinary(num);
    }

    // Make the decimalToBinary function accessible globally
    window.decimalToBinary = decimalToBinary;