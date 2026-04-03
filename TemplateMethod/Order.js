export default class Order {
  constructor(price) {
    this.price = price;
    this.thrashold = 100;
    this.isHigherPrice = false;
    this.isPaymentRefused = true;
    this.callbackList = [];
  }

  prepare() {
    this.newCommand();
    if (this.isPaymentRefused) {
      this.paymentRefused();
    }

    if (this.price > this.thrashold) {
      this.higherPrice();
    }
    this.expedite();
  }

  newCommand() {
    console.log("Nouvelle commande");
    for (let callback of this.callbackList) {
      if (callback.event === "newCommand") {
        callback.callback(this);
      }
    }
  }

  paymentRefused() {
    console.log("Paiement refusé");
    this.isPaymentRefused = true;
    for (let callback of this.callbackList) {
      if (callback.event === "paymentRefused") {
        callback.callback(this);
      }
    }

    return true;
  }

  expedite() {
    console.log("Expédition de la commande");
    for (let callback of this.callbackList) {
      if (callback.event === "expedite") {
        callback.callback(this);
      }
    }
  }

  higherPrice() {
    console.log("Prix plus élevé que prévu");
    this.isHigherPrice = true;
    for (let callback of this.callbackList) {
      if (callback.event === "higherPrice") {
        callback.callback(this);
      }
    }
  }

  addEvent(event, callback) {
    this.callbackList.push({ event, callback });
  }
}
