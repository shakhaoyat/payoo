console.log("hello shakhaoyat")

document.getElementById("login-btn").addEventListener("click", function () {
      //get mobile number
      const numberInput = document.getElementById("input-number");
      const contactNumber = numberInput.value;
      console.log(contactNumber);
      //get pin number
      const inputPin = document.getElementById("input-pin");
      const pin = inputPin.value;
      console.log(pin);

      //match number and pin
      if (contactNumber === "01478523690" && pin === "1234") {
            alert("Login successful!");
            // Redirect to the dashboard or home page
            window.location.assign("home.html"); // Change this to your desired page
      } else {
            alert("Invalid mobile number or pin. Please try again.");
            return;
      }
});