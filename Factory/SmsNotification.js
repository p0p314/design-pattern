import NotificationChannel from "./NotificationChannel.js";

export default class SmsNotification extends NotificationChannel {
  constructor() {
    super("sms");
  }
}
