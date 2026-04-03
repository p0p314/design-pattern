import Order from "./TemplateMethod/Order.js";
import NotificationObserver from "./Observer/NotificationObserver.js";

const order = new Order(120);
const order2 = new Order(90);

new NotificationObserver([order, order2]);

order.prepare();
order2.prepare();
