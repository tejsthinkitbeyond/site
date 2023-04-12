const errorsObj = {
  name: 'Name cannot have numbers or special characters',
  email: 'Please enter correct email',
};

export const checkValidity = (input, value, validation, errors) => {
  console.log('##', input, value);
  if (!(value.length > 0))
    return { ...errors, [`${input}Error`]: `${input} cannot be empty` };
  else if (errors[input] && !validation(value)) {
    console.log(validation(value));
    console.log('grgr');
    return {
      ...errors,
      [`${input}Error`]: errorsObj[input],
    };
  } else return true;
};

export const emptyNameValue = (value) => {
  return !(value.length > 0) ? `Name cannot be empty` : '';
};

export const emptyEmailValue = (value) => {
  return !(value.length > 0) ? `Email cannot be empty` : '';
};

export const emptyOrganizationValue = (value) => {
  return !(value.length > 0) ? `Organization name cannot be empty` : '';
};

export const emptyEnquiryValue = (value) => {
  return !(value.length > 0) ? `Enquiry field cannot be empty` : '';
};

export const nameValidation = (name) => {
  return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
};

export const emailValidation = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};
