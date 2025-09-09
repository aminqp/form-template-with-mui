import { useState } from "react";
import {
  Button,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  Stack,
  Typography,
} from "@mui/material";
import {
  Autocomplete,
  AutocompleteData,
  Checkboxes,
  CheckboxData,
  Select,
  SelectData,
  Radios,
  RadioData,
  Switches,
  TimePicker,
  makeValidate,
  makeRequired,
  TextField,
  Debug,
  SwitchData,
} from "mui-rff";
import type { FormSubscription, FormApi } from "final-form";
import { Form } from "react-final-form";
import * as Yup from "yup";

enum INPUT_NAMES {
  EMAIL = "email",
  PASSWORD = "password",
  TERMS = "terms",
  AGE = "age",
  GENDER = "gender",
}

const INPUT_LABLE_MAP = Object.freeze({
  [INPUT_NAMES.EMAIL]: "Email",
  [INPUT_NAMES.PASSWORD]: "Password",
  [INPUT_NAMES.TERMS]: "Terms & Condirions",
  [INPUT_NAMES.AGE]: "Select Your Age",
  [INPUT_NAMES.GENDER]: "Gender",
});

const AGE_OPTIONS = [
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

const GENDER_OPTIONS = [
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

interface FormData {
  age: string;
  email: string; //hello
  gender: string;
  password: string; //hidden
  terms: boolean;
}

const schema = Yup.object().shape({
  age: Yup.string().required(),
  email: Yup.string().required(),
  gender: Yup.string().required(),
  password: Yup.string().required(),
  terms: Yup.boolean().oneOf([true], "please accept the terms").required(),
});

const validate = makeValidate(schema);
const required = makeRequired(schema);

export default function App() {
  const [submittedValues, setSubmittedValues] = useState<FormData | undefined>(
    undefined
  );

  const initialValues: FormData = {
    age: "",
    email: "Your email address",
    gender: "",
    password: "",
    terms: false,
  };

  const subscription = { submitting: true };

  const onSubmit = (values: FormData) => {
    setSubmittedValues(values);
  };

  const onReset = (form: FormApi<FormData>) => {
    return () => {
      setSubmittedValues(undefined);
      form.reset();
    };
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={submittedValues ? submittedValues : initialValues}
      subscription={subscription}
      validate={validate}
      key={subscription as any}
      render={({ handleSubmit, submitting, form }) => (
        <form
          onSubmit={handleSubmit}
          noValidate={true}
          autoComplete="new-password"
        >
          <Stack direction="column" spacing={2}>
            {/* <FormControl required>
              <InputLabel htmlFor={INPUT_NAMES.EMAIL}>
                {INPUT_LABLE_MAP[INPUT_NAMES.EMAIL]}
              </InputLabel>
              <OutlinedInput
                id={INPUT_NAMES.EMAIL}
                label={INPUT_LABLE_MAP[INPUT_NAMES.EMAIL]}
                aria-describedby={`${INPUT_NAMES.EMAIL}-error-heler`}
              />
              <FormHelperText id={`${INPUT_NAMES.EMAIL}-error-heler`}>
                {INPUT_NAMES.EMAIL} validation error
              </FormHelperText>
            </FormControl> */}
            {/* <FormControl required>
              <InputLabel htmlFor={INPUT_NAMES.PASSWORD}>
                {INPUT_LABLE_MAP[INPUT_NAMES.PASSWORD]}
              </InputLabel>
              <OutlinedInput
                type="password"
                id={INPUT_NAMES.PASSWORD}
                label={INPUT_LABLE_MAP[INPUT_NAMES.PASSWORD]}
                aria-describedby={`${INPUT_NAMES.PASSWORD}-error-heler`}
              />
              <FormHelperText id={`${INPUT_NAMES.PASSWORD}-error-heler`}>
                {INPUT_NAMES.PASSWORD} validation error
              </FormHelperText>
            </FormControl> */}
            <Select
              label={INPUT_LABLE_MAP[INPUT_NAMES.AGE]}
              id={INPUT_NAMES.AGE}
              name={INPUT_NAMES.AGE}
              data={AGE_OPTIONS}
              formHelperTextProps={{ id: `${INPUT_NAMES.AGE}-error-heler` }}
              helperText={`${INPUT_NAMES.AGE} validation error`}
            />
            <Radios
              label={INPUT_LABLE_MAP[INPUT_NAMES.GENDER]}
              formLabelProps={{ id: INPUT_LABLE_MAP[INPUT_NAMES.GENDER] }}
              name={INPUT_NAMES.GENDER}
              data={GENDER_OPTIONS}
              radioGroupProps={{
                "aria-labelledby": INPUT_LABLE_MAP[INPUT_NAMES.GENDER],
                "aria-describedby": `${INPUT_NAMES.GENDER}-error-heler`,
                row: true,
              }}
              formHelperTextProps={{ id: `${INPUT_NAMES.GENDER}-error-heler` }}
              helperText={`${INPUT_NAMES.GENDER} validation error`}
            />
            <Checkboxes
              name={INPUT_NAMES.TERMS}
              label="You Should Accest Our Terms"
              data={{
                label: INPUT_LABLE_MAP[INPUT_NAMES.TERMS],
                value: true,
              }}
              formLabelProps={{ component: "legend" }}
              formControlLabelProps={{
                required: required.terms,
              }}
              formHelperTextProps={{ id: `${INPUT_NAMES.TERMS}-error-heler` }}
              helperText={`${INPUT_NAMES.TERMS} validation error`}
              aria-describedby={`${INPUT_NAMES.PASSWORD}-error-heler`}
            />
            <Button
              type="button"
              variant="contained"
              onClick={onReset(form)}
              disabled={submitting}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={submitting}
            >
              Submit
            </Button>
            <Typography>
              <strong>Form field data</strong>
            </Typography>
            <Debug />
            <Typography>
              <strong>Submitted data</strong>
            </Typography>
            <pre>
              {JSON.stringify(
                submittedValues ? submittedValues : {},
                undefined,
                2
              )}
            </pre>
          </Stack>
        </form>
      )}
    />
  );
}
