document.getElementById("add-money-btn").addEventListener("click", function () {
      //1- bank account get
      const bankAccount = getValueFromInput("add-money-bank");
      console.log(bankAccount);

      if (bankAccount === "Select A Bank") {
            alert("Please select a bank.");
            return;
      }

      //2- get bank account number
      const accountNumber = getValueFromInput("add-money-number");
      if (accountNumber.length != 11) {
            alert("Invalid Account Number. Please enter an 11 digit number.");
            return;
      }

      //3- get amount
      const amount = getValueFromInput("add-money-amount");
      const currentBalance = getBalance();
      const newBalance = currentBalance + Number(amount);
      //4- get pin and verify
      const pin = getValueFromInput("add-money-pin");
      if (pin === "1234") {
            //4.1 true:: show aleart> set balance
            alert(`Money added successfully from ${bankAccount} at ${new Date()}`);
            setBalance(newBalance);
      }
      else {
            //4.2 false:: show an error alert> return
            alert("Invalid PIN. Please try again.");
            return;
      }
});