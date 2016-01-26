describe("BankAccount", function() {
  it("it creates a constructor called BankAccount that stores name and initial deposit", function() {
    var testAccount = new BankAccount("Anna", 500);
    expect(testAccount.accountName).to.equal("Anna");
    expect(testAccount.balance).to.equal(500);
  });
  it("it creates a withdraw method, subtracting the value from balance", function() {
    var testAccount = new BankAccount("Anna", 500);
    testAccount.withdraw(50);
    expect(testAccount.balance).to.equal(450);
  });
  it("it creates a deposit method, adding the value to balance", function() {
    var testAccount = new BankAccount("Anna", 500);
    testAccount.deposit(100);
    expect(testAccount.balance).to.equal(600);
  });
});
