// Using Regular expression to check the values set by users
const CheckValues = (type, value,caller) => {

  switch(type) {
    case "text":
      if(value === "") return alert(caller + ' is not correct');
      return true;

    case "email":
      let t = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
      if (t) return true;
      return alert(caller + ' is not correct');

    case "bool":
      if (!value) return alert(caller + ' is not correct')
      return true;

    case "phone":
      let x = (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g).test(value);
      if(x) return true;
      return alert(caller + ' is not correct');

    default:
      return true;
  }
}

export default CheckValues;