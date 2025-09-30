import * as Yup from "yup";
import {INPUT_NAMES, AGE_OPTIONS, GENDER_OPTIONS} from "./constants";

export const schema = Yup.object().shape({
    [INPUT_NAMES.AGE]: Yup.number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .oneOf(AGE_OPTIONS.map((opt) => opt.value), "Please select a valid age").required(),
    [INPUT_NAMES.EMAIL]: Yup.string()
        .required()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
        ),
    [INPUT_NAMES.GENDER]: Yup.string()
        .oneOf(
            GENDER_OPTIONS.map((opt) => opt.value),
            "Please select a valid gender"
        ).required(),
    [INPUT_NAMES.PASSWORD]: Yup.string()
        .required()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
        ),
    [INPUT_NAMES.TERMS]: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions"),
});

export type SchemaType = Yup.InferType<typeof schema>;
