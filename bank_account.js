'use strict'
// NOTE: You should not be able to charge an amount that would make your balance dip below 0
// Transaction class - This class represents a single transaction in a bank account.
// BankAccount class - This class represents a bank account.

class bankAccount {
 // accountNumber - String representing the account number
    accountNumber;
// owner - String representing the owner of the account
    owner;
// transactions - An array of transactions representing the history of all transactions associated with this account    
    transactions;
// *** Comprehension check: what is "class"? Class creates an object template. The example below is creating
// a bank account template ***

// The constructor should take in the following input:
// accountNumber - The account Number
// owner - The name of the person who owns this account
constructor(accountNumber, owner){
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = [] 

// ***Comprehension check: What is a constructor? A constructor is what is required to build the new object.
// In order to CONSTRUCT a bank account we MUST have an account number AND an owner
// What is "this"? This, references the object that is 
// executing the function directly***

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
    if (amt > 0){
// The deposit method is using "amt" as the single parameter
// NOTE: You should not be able to deposit a negative amount therefore we need to
// add an if statement that only allows deposits to happen IF the amt is greater than
// zero

    let deposit  = new Transaction (amt, 'Deposit');
// we created a new variable called "deposit" that... you guessed it creates
// a new transaction to add to our transactions array. It takes in two parameters
// the amount to be deposited and by whom
    }
    this.transactions.push(deposit)
// To add our new transactions to the working transactions array we use the push method
// *** Comprehension check: The push() method adds new items to the end of an array, and returns the new length.***
}

// charge(payee, amt) - This method takes in the payee and amount,
//  creates a new transaction with the payee and amount,
//  and adds the transaction to the transaction array.

charge(payee, amt){
    if (this.balance()< amt){
        return;
//  This is overdraft protection. It basically says that if the charge issued
//  to the account is greater than the account balance then do not allow the 
//  charge to process. 
    }
    let charge = new Transaction (-amt, payee)
//  charge is using the same structure of deposit however its taking on the negative
//  of the amount value and a payee.

    this.transactions.push(charge)
// In the same manner as the deposit. We are taking in the charge method, and pushing
//  our inputs to the end of the transactions array
}
balance(){
    let currentBalance = 0
// We have set the beginning of account 1's balance to zero
    for (i=0; i <this.transactions.length; i++)
    let currentTransaction = this.transactions[i];
//  this.transactions[i] grabs one transaction at a time
    currentBalance += currentTransaction.amt
// We are now looping through the account transactions array and summing it up
// to the current balance
    return currentBalance
}
}


// The class should have the following fields:
// NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date automatically.
class Transaction{
// date - The date of the transaction
    date;
// amount - The amount of the transaction. Positive amounts are money going into the account
//  (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
    amount;
// payee - The description or payee on the transaction
    payee;

// The constructor should take in the following input:  
// amount - The amount on the transaction 
// payee - The payee or description on the transaction 
constructor(amount, payee){
    this.date = new Date();
    this.amount = amount;
    this.payee = payee;
}
}

// *** What is our code actually doing? Below is an example of what is happening 
//  If we didn't have a constructor to construct an account template

// let accnt1 = new bankAccount
// this is the notation to create a new template. 
//  we are telling our program to build a new bank account

// accnt1.owner = 'Dwaylan'
//  We have now used dot notation to call the owner field to provide
//  a name for our account


// accnt1.accountNumber = 83078155;
//  The newly minted account now has an owner and a number

// accnt1.transactions = [];
//  Account 1 now has a transactions array that will hold all transactions passed
// to the account

// let deposit = new Transaction ()
//  We have now created a variable called deposit that call the transaction class
//  In order for a transaction to be created see the prerequisites above. The constructor
//  For the transaction class NEEDS a payee and an amount.

// deposit.payee = 'deposit'
// deposit.amount = 100
// accnt1.transactions.push(deposit)
//  When the method above is evoked it is going to push a new deposit of $100 to the end
//  of the transactions array 

let acct1 = new bankAccount (83078155, 'Dwaylan')
// Since we already have constructors, we can use this condensed code to create
// a new bank account template. We have called the bank account class and provided
// the two constructors have been passed into the argument. We have 83078155 = account number
// and Dwaylan = Owner. The template now creates an idle bank account.

acct1.deposit(100)
// We have called the deposit method to deposit $100 into account 1


// *** Bonus code for adding all of the transactions up***
// accnt.transactions.map(function(transaction){
//     return transaction.amt
// }.array.reduce(function(prev,amt){
//     return prev + amt
// }, 0};

// *** Test to see if our bank account reaches requirements ***

// Test 1 should let you deposit a positive amount
describe('Test 1', function(){
    it('should let you deposit a positive', function(){
        let acct1 = new bankAccount (83078155, 'Dwaylan')
        acct1.deposit(100)
    })
} ) 