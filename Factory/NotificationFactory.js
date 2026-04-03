import EmailNotification from "./EmailNotification.js";
import SmsNotification from "./SmsNotification.js";
import InternalNotification from "./InternalNotification.js";

export default class NotificationFactory {
  static create(channel) {
    switch (channel) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SmsNotification();
      case "internalNotification":
        return new InternalNotification();
    }
  }
}
