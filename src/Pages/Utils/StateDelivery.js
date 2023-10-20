export function DeliveryPrice(state) {
  let deliveryPrice;
  switch (state) {
    case "Ogun":
      deliveryPrice = 1500;
      break;
    case "Lagos":
      deliveryPrice = 2500;
      break;
    case "Oyo":
      deliveryPrice = 1500;
      break;
    case "Ondo":
      deliveryPrice = 3000;
      break;
    case "Kano":
      deliveryPrice = 5000;
      break;
    case "Osun":
      deliveryPrice = 3200;
      break;
    case "FCT - Abuja":
      deliveryPrice = 5000;
      break;
    default:
      deliveryPrice = 4500;
  }
  return deliveryPrice;
}
