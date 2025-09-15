//1

let bankAccount = {
  ownerName: "Єгор Хмелюк",
  accountNumber: "UA12345678765",
  balance: 0,

  deposit: function (amount) {
    this.balance += amount;
    alert(
      `Ви поповнили свій щет на ${amount} гривнів Залишок: ${this.balance} гривнів`
    );
  },

  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      alert(`Ви зняли ${amount} гривнів Залишок: ${this.balance} гривнів`);
    } else {
      alert("Недостатньо гривнів на рахунку!");
    }
  },
};

if (confirm("Хочете поповнити рахунок?")) {
  let sum = Number(prompt("Введіть суму для поповнення:"));
  bankAccount.deposit(sum);
} else if (confirm("Хочете зняти готівку?")) {
  let sum = Number(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(sum);
}

// 2
let weather = {
  temperature: Number(prompt("Введіть температуру (°C):")),
  humidity: 60,
  windSpeed: 15,

  isFreezing: function () {
    return this.temperature < 0;
  },
};

if (weather.isFreezing()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура вище або рівна 0 градусів Цельсія");
}

// 3
let user = {
  name: "Олег",
  email: "oleg@example.com",
  password: "12345",

  login: function (inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      alert("Вхід успішний!");
    } else {
      alert("Неправильний e-mail або пароль!");
    }
  },
};

let inputEmail = prompt("Введіть email:");
let inputPassword = prompt("Введіть пароль:");
user.login(inputEmail, inputPassword);

// 4
let movie = {
  title: "Інтерстеллар",
  director: "Крістофер Нолан",
  year: 2014,
  rating: 8.6,

  isHighRated: function () {
    return this.rating > 8;
  },
};

console.log(); //не знаю про кінець
