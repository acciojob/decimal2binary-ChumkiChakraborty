function decimalToBinary(num) {
	 const decimalNumber = parseInt(document.getElementById('decimal-input').value, 10);
      
      // Check for valid input
      if (isNaN(decimalNumber) || decimalNumber < 0) {
        document.getElementById('result').innerText = 'Please enter a valid non-negative integer.';
        return;
      }

      // Convert to binary
      const binaryNumber = decimalNumber.toString(2);
      
      // Display the result
      document.getElementById('result').innerText = `Binary equivalent: ${binaryNumber}`;
    }
  //Write you code here
  
}

window.decimalToBinary = decimalToBinary;
