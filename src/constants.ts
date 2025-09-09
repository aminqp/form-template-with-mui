export enum INPUT_NAMES {
  EMAIL = "email",
  PASSWORD = "password",
  TERMS = "terms",
  AGE = "age",
  GENDER = "gender",
}

export const INPUT_LABEL_MAP = Object.freeze({
  [INPUT_NAMES.EMAIL]: "Email",
  [INPUT_NAMES.PASSWORD]: "Password",
  [INPUT_NAMES.TERMS]: "Terms & Conditions",
  [INPUT_NAMES.AGE]: "Select Your Age",
  [INPUT_NAMES.GENDER]: "Gender",
});

export const AGE_OPTIONS = [
  {
    label: "Ten",
    value: 10,
  },
  {
    label: "Twenty",
    value: 20,
  },
  {
    label: "Thirty",
    value: 30,
  },
];

export const GENDER_OPTIONS = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Other",
    value: "other",
  },
];
