import NotificationChannel from "./NotificationChannel.js";

export default class EmailNotification extends NotificationChannel {
  constructor() {
    super("email");
  }
}
