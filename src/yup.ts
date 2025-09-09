import * as Yup from "yup";
import { INPUT_NAMES, AGE_OPTIONS, GENDER_OPTIONS } from "./constants";

export const schema = Yup.object().shape({
  [INPUT_NAMES.AGE]: Yup.mixed().oneOf(AGE_OPTIONS.map((opt) => opt.value)),
  [INPUT_NAMES.EMAIL]: Yup.string()
    .required()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  [INPUT_NAMES.GENDER]: Yup.mixed().oneOf(
    GENDER_OPTIONS.map((opt) => opt.value)
  ),
  [INPUT_NAMES.PASSWORD]: Yup.string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
  [INPUT_NAMES.TERMS]: Yup.boolean()
    .oneOf([true], "terms is a required field")
    .required(),
});
