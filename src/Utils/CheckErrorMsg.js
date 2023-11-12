export function checkErrorMessage(Msg) {
  let key;
  switch (Msg) {
    case "auth/network-request-failed":
      key = "Your Network Is Poor";
      break;

    case "auth/user-not-found":
      key = "Email or Password Not Correct";
      break;
  }
  return key;
}
