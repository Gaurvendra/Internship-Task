const controller = require("./controller");

module.exports = (app) => {
  // USER ROUTES
  app.get("/items", controller.getItems); //

  app.get("/cart", controller.cart.getCart); //

  app.post("/signup", controller.signup); //

  app.post("/login", controller.login); //

  app.post("/order", controller.placeOrder); //

  app.patch("/cart", controller.cart.updateCart); //

  // ADMIN ROUTES
  app.get("/allorders", controller.admin.getAllOrders); //

  app.get("/deliveryperson", controller.admin.getAllDeliveryPerson); //

  app.patch("/order/update", controller.admin.assignDeliveryPersonToOrder);

  // DELIVERY PERSON ROUTES
  app.patch("/delivery/order/update", controller.deliveryPerson);
};
