// Using Regular expression to check the values set by users
const CheckValues = (type, value) => {

  switch(type) {
    case "text":
      if(value === "") return false;
      return true;

    case "email":
      return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)

    case "phone":
      return (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g).test(value)

    case "number":
      return (/^\d+$/).test(value);

    default:
      return true;
  }
}

export default CheckValues;