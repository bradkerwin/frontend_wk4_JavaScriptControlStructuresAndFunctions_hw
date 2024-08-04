function deposit(total, pay) {
    return total + pay;
}
// console.log(deposit(10000, 100));  // Output: 10100

function withdraw(balance, withdrawal) {
    // let balance = 5000;
    // let withdrawal = 5100;
    if (balance > withdrawal) {
        balance -= withdrawal; 
        console.log("Your new balance is " + balance);
    }
    else if (balance == withdrawal) {
        balance -= withdrawal;
        console.log("You withdrew your entire balance!"); 
    }
    else {
        console.log("You do not have neough in your account to withdraw that amount.");
    }
}
// withdraw(5000, 150) // Output: Your new balance is 4850

function checkBalance() {
    let balance = 3500;
    console.log("Your current balance is " + balance);
}
// checkBalance() // Ouput: Your current balance is 3500