import * as Yup from "yup";

export const schema = Yup.object().shape({
  age: Yup.string().required(),
  email: Yup.string()
    .required()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  gender: Yup.string().required(),
  password: Yup.string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
  terms: Yup.boolean().oneOf([true], "terms is a required field").required(),
});
