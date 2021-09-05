class BankAccount {
  constructor(
    accountID,
    firstName,
    lastName,
    dateCreated,
    dateClosed,
    balance
  ) {
    this.accountID = accountID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateCreated = dateCreated;
    this.dateClosed = dateClosed;
    this.balance = balance
  }
  getBalance() {
    return this.balance
  }
}

export default BankAccount;