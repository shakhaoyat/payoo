document.getElementById("cashout-btn").addEventListener("click", function () {
      //1- get the agent number and validate
      const cashoutNumber = getValueFromInput("cashout-number");
      if (cashoutNumber.length != 11) {
            alert("Invalid Agent Number");
            return;
      }
      //2- get the amount ,validate ,convert to number
      const cashoutAmount = getValueFromInput("cashout-amount");
      //3- GET THE Current balance, validate,convert to number
      // const balanceElement = document.getElementById("balance");
      // const balance = balanceElement.innerText;
      const currentBalance = getBalance();
      console.log(currentBalance);
      //4- calculate new balace
      const newBalance = currentBalance - Number(cashoutAmount);
      console.log(newBalance);

      if (newBalance < 0) {
            alert("Insufficient balance for this cashout.");
            return;
      }
      //5-get the pin and varify
      const pin = getValueFromInput("cashout-pin");
      if (pin === "1234") {
            //5.1 true:: show aleart> set balance
            alert("Cashout successful!");
            setBalance(newBalance);

            //1- history container ke dhore nia asbo
            const history = document.getElementById("history-container");
            //2-new div create korbo
            const newHistory = document.createElement("div");

            //3- new div a innerHTML add korbo
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
                  Cashout successfully To ${cashoutAmount} ,ACC-No ${cashoutNumber} at ${new Date()}
                  </div>
                  `;
            //4- history container er vitore new div ta add korbo
            history.append(newHistory);

      }
      else {
            //5.2 false:: show an error alert> return
            alert("Invalid PIN. Please try again.");
            return;
      }
});



// document.getElementById("cashout-btn").addEventListener("click", function () {
//       //1- get the agent number and validate
//       const cashoutNumberInput = document.getElementById("cashout-number");
//       const cashoutNumber = cashoutNumberInput.value;
//       console.log(cashoutNumber);
//       if (cashoutNumber.length != 11) {
//             alert("Invalid Agent Number");
//             return;
//       }
//       //2- get the amount ,validate ,convert to number
//       const cashoutAmountInput = document.getElementById("cashout-amount");
//       const cashoutAmount = cashoutAmountInput.value;
//       console.log(cashoutAmount);
//       //3- GET THE Current balance, validate,convert to number
//       const balanceElement = document.getElementById("balance");
//       const balance = balanceElement.innerText;
//       console.log(balance);
//       //4- calculate new balace
//       const newBalance = Number(balance) - Number(cashoutAmount);


//       if (newBalance < 0) {
//             alert("Insufficient balance for this cashout.");
//             return;
//       }
//       console.log(newBalance);
//       //5-get the pin and varify
//       const cashoutPinInput = document.getElementById("cashout-pin");
//       const pin = cashoutPinInput.value;
//       if (pin === "1234") {
//             //5.1 true:: show aleart> set balance
//             alert("Cashout successful!");
//             console.log("New Balance:", newBalance);
//             balanceElement.innerText = newBalance;
//       } else {
//             //5.2 false:: show an error alert> return
//             alert("Invalid PIN. Please try again.");
//             return;
//       }


// });
