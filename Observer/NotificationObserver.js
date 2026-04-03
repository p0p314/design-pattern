import NotificationFactory from "../Factory/NotificationFactory.js";

export default class NotificationObserver {
  constructor(orderList) {
    this.orderList = orderList;

    this.notificationsByEvent = {
      newCommand: ["email", "sms"],
      paymentRefused: ["email"],
      expedite: ["sms"],
      higherPrice: ["internalNotification"],
    };

    for (let order of this.orderList) {
      order.addEvent("newCommand", this.newCommand.bind(this));
      order.addEvent("paymentRefused", this.paymentRefused.bind(this));
      order.addEvent("expedite", this.expedite.bind(this));
      order.addEvent("higherPrice", this.higherPrice.bind(this));
    }
  }

  notify(event, order) {
    let channels = this.notificationsByEvent[event];

    for (let channel of channels) {
      let notification = NotificationFactory.create(channel);
      notification.send(order, event);
    }
  }

  newCommand(order) {
    this.notify("newCommand", order);
  }

  paymentRefused(order) {
    this.notify("paymentRefused", order);
  }

  expedite(order) {
    this.notify("expedite", order);
  }

  higherPrice(order) {
    this.notify("higherPrice", order);
  }
}
