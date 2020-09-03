'use strict'
// NOTE: You should not be able to charge an amount that would make your balance dip below 0
// Transaction class - This class represents a single transaction in a bank account.

// The class should have the following fields:
// date - The date of the transaction
// amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
// payee - The description or payee on the transaction
// The constructor should take in the following input:
// amount - The amount on the transaction
// payee - The payee or description on the transaction
// NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date automatically.



// BankAccount class - This class represents a bank account.
// The class should have the following fields:
class bankAccount {
 // accountNumber - String representing the account number
    accountNumber;
// owner - String representing the owner of the account
    owner;
// transactions - An array of transactions representing the history of all transactions associated with this account    
    transactions;

// The constructor should take in the following input:
// accountNumber - The account Number
// owner - The name of the person who owns this account
constructor(accountNumber, owner){
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = []
// Constructors are REQUIREMENTS needed to satisfy the 

}
// NOTE: When an account is created, you should initialize the transactions array to be an empty array
// The class should have the following 3 methods:

// balance() - This method does not take any input,
//  and returns the current balance on the account. 
// The balance is computed by summing up the amounts in the transactions array.
balance (){   
// the principal balance is 0 until we add to it. So the initial sum is 0  

let sum = 0
// we now have a variable called sum, but how do we invoke it?

// as told above we have to sum up the amounts in the transactions array so we
// loop through them and add them together
for(let i=0; i< this.transactions.length -1; i++ ){

// ***Comprehension check: components of a for loop. "let i=0" is the initializer or
// starting point for the loop. We are telling our program that we want our start
// point to be at 0. "i < this.transactions.length -1" is code for where we want our loop
//  to end. Our loop should be no greater or less than the length of the transactions array.
// "i++" is our incrementer which is telling of how the loop moves. "i++" is indicative of 
// moving up through the array by 1
// Conclusion: We are telling this for loop to loop up through our transactions array element
// by element

let currentTransaction = this.transactions[i];
// We now have a new variable called "currentTransaction" that calls the transactions array
sum +=currentTransaction.amount
// we have now invoke the sum variable and set it to equal the amount of the current transaction
}
return sum;
// the sum can now be returned
}

// deposit(amt) - This method takes in a single input, the deposit amount.
// This method should create a new transaction representing the deposit, 
// and add it to the transactions array.

deposit(amt){
// The deposit method is using "amt" as the single parameter
// NOTE: You should not be able to deposit a negative amount

    let newTrans = new Transaction (amt, 'me');
// we created a new variable called "newTrans" that... you guessed it creates
// a new transaction to add to our transactions array. It takes in two parameters
// the amount to be deposited and by whom

    this.transactions= push(newTrans)
// To add our new transactions to the working transactions array we use the push method
// *** Comprehension check: The push() method adds new items to the end of an array, and returns the new length.***
}

// charge(payee, amt) - This method takes in the payee and amount,
//  creates a new transaction with the payee and amount,
//  and adds the transaction to the transaction array.

charge(payee, amt){
    
}


class Transaction{
    date;
    amount;
    payee;

constructor(amount, payee){
    this.date = new Date();
    this.amount = amount;
    this.payee = payee;
}
}
