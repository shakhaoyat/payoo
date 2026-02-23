document.getElementById("cashout-btn").addEventListener("click", function () {
      //1- get the agent number and validate
      const cashoutNumberInput = document.getElementById("cashout-number");
      const cashoutNumber = cashoutNumberInput.value;
      console.log(cashoutNumber);
      if (cashoutNumber.length != 11) {
            alert("Invalid Agent Number");
            return;
      }
      //2- get the amount ,validate ,convert to number
      const cashoutAmountInput = document.getElementById("cashout-amount");
      const cashoutAmount = cashoutAmountInput.value;
      console.log(cashoutAmount);
      //3- GET THE Current balance, validate,convert to number
      const balanceElement = document.getElementById("balance");
      const balance = balanceElement.innerText;
      console.log(balance);
      //4- calculate new balace
      const newBalance = Number(balance) - Number(cashoutAmount);


      if (newBalance < 0) {
            alert("Insufficient balance for this cashout.");
            return;
      }
      console.log(newBalance);
      //5-get the pin and varify
      const cashoutPinInput = document.getElementById("cashout-pin");
      const pin = cashoutPinInput.value;
      if (pin === "1234") {
            //5.1 true:: show aleart> set balance
            alert("Cashout successful!");
            console.log("New Balance:", newBalance);
            balanceElement.innerText = newBalance;
      } else {
            //5.2 false:: show an error alert> return
            alert("Invalid PIN. Please try again.");
            return;
      }


});
