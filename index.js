const account = {
  owner: "Єгор",
  balance: 0,

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Поповнениее на ${amount}. $$$ аоточний : ${this.balance}`);
    } else {
      console.log("$ $ $ поповнення має бути більшк за 0.");
    }
  },

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Знято ${amount}. $: ${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Недостатно $ на рахунку.");
    } else {
      console.log("Сума зняття $ має бути більшою за 0.");
    }
  },

  getBalance() {
    return this.balance;
  },
};

account.deposit(100);
account.withdraw(30);
console.log(account.getBalance());
