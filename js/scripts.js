function BankAccount(accountName, initialDeposit) {
  this.accountName = accountName;
  this.balance = initialDeposit;
}

BankAccount.prototype.withdraw = function(withdrawal) {
  this.balance = this.balance - withdrawal;
}

BankAccount.prototype.deposit = function(deposited) {
  this.balance = this.balance + deposited;
}
