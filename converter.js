const readline = require("readline");

// Define a fixed exchange rate (for example, 1 USD = 75 INR)
const exchangeRateUSDToINR = 80;
const exchangeRateINRToUSD = 1 / exchangeRateUSDToINR;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to handle conversion
function convertCurrency(amount, fromCurrency, toCurrency) {
  let convertedAmount;

  if (fromCurrency === "USD" && toCurrency === "INR") {
    convertedAmount = amount * exchangeRateUSDToINR;
    console.log(
      `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`
    );
  } else if (fromCurrency === "INR" && toCurrency === "USD") {
    convertedAmount = amount * exchangeRateINRToUSD;
    console.log(
      `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`
    );
  } else {
    console.log(
      "Invalid currency pair. Please enter USD to INR or INR to USD."
    );
  }

  promptUser();
}

// Function to ask the user for input
function promptUser() {
  rl.question('Enter amount (or type "exit" to quit): ', (amount) => {
    if (amount.toLowerCase() === "exit") {
      console.log("Exiting...");
      rl.close();
    } else {
      rl.question("From currency (USD or INR): ", (fromCurrency) => {
        rl.question("To currency (USD or INR): ", (toCurrency) => {
          const amountNumber = parseFloat(amount);

          if (isNaN(amountNumber)) {
            console.log("Please enter a valid number for the amount.");
            promptUser();
          } else {
            convertCurrency(
              amountNumber,
              fromCurrency.toUpperCase(),
              toCurrency.toUpperCase()
            );
          }
        });
      });
    }
  });
}

// Start the program
console.log("Currency Converter (USD to INR or INR to USD)");
promptUser();
