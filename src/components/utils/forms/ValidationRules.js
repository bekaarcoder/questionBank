const validation = (value, rules, form) => {
  let valid = true;
  for(let rule in rules) {
    switch(rule) {
      case "isRequired":
        if(rules[rule]) {
          valid = valid && validateRequired(value);
          break;
        }
        valid = valid;
      case "isEmail":
        valid = valid && validateEmail(value);
        break;
      case "minLength": 
        valid = valid && validateMinLength(value, rules[rule]);
        break;
      case "confirmPass":
        valid = valid && validatePassword(value, form[rules[rule]].value);
        break;
      default:
        valid = true;
    }
  }
  return valid;
}

const validateRequired = (value) => {
  if(value !== '') {
    return true;
  }
  return false;
};

const validateEmail = (value) => {
  const expression = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return expression.test(String(value).toLowerCase());
};

const validateMinLength = (value, minLength) => {
  if(String(value).length < minLength) {
    return false;
  }
  return true;
};

const validatePassword = (value, password) => {
  const actualPassword = String(password);
  const confirmPassword = String(value);

  if(confirmPassword === actualPassword) {
    return true;
  }
  return false;
}

export default validation;