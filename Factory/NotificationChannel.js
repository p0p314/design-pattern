export default class NotificationChannel {
  constructor(name) {
    this.name = name;
  }

  send(order, event) {
    console.log(`[${this.name}] ${event} - commande à ${order.price}€`);
  }
}
