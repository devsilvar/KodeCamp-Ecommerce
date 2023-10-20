export function DeliveryDate(date) {
  let deliveryDate;
  switch (date) {
    case "Ogun":
      deliveryDate = "2 Working Days";
      break;
    case "Lagos":
      deliveryDate = "3 Working Days";
      break;
    case "Oyo":
      deliveryDate = "1 Working Day";
      break;
    case "Ondo":
      deliveryDate = "4 Working Days";
      break;
    case "Kano":
      deliveryDate = "7 Working Days";
      break;
    case "Osun":
      deliveryDate = "4 Working Days";
      break;
    case "FCT - Abuja":
      deliveryDate = "3 Working Days";
      break;
    default:
      deliveryDate = "7 Working Days";
  }
  return deliveryDate;
}
