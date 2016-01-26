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

function toProperCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

$(document).ready(function() {
  $("form#account-signup").submit(function(event) {
    event.preventDefault();
    var accountName = toProperCase($("input#accountname").val());
    var initialDeposit = parseInt($("input#initialdeposit").val());

    var newAccount = new BankAccount(accountName, initialDeposit);

    $("#default-info").hide();
    $("#account-info").show();
    $(".account-name").text(newAccount.accountName);
    $(".account-balance").text(newAccount.balance);

    $("input#accountname").val("");
    $("input#initialdeposit").val("");

    $("form#withdraw").submit(function(event) {
      event.preventDefault();
      var withdrawAmount = parseInt($("input#withdrawal").val());
      newAccount.withdraw(withdrawAmount);
      $(".account-balance").text(newAccount.balance);
      $("input#withdrawal").val("");
    });
    $("form#deposit").submit(function(event) {
      event.preventDefault();
      var depositAmount = parseInt($("input#deposited").val());
      newAccount.deposit(depositAmount);
      $(".account-balance").text(newAccount.balance);
      $("input#deposited").val("");
    });
  });


});
