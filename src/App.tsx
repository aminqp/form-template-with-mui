import { useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import {
  Checkboxes,
  Select,
  Radios,
  makeValidate,
  makeRequired,
  TextField,
  Debug,
} from "mui-rff";
import type { FormApi } from "final-form";
import { Form } from "react-final-form";
import { schema } from './yup'

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
  [INPUT_NAMES.TERMS]: "Terms & Conditions",
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
  email: string;
  gender: string;
  password: string;
  terms: boolean;
}

const validate = makeValidate(schema);
const required = makeRequired(schema);

export default function App() {
  const [submittedValues, setSubmittedValues] = useState<FormData | undefined>(
    undefined
  );

  const initialValues: FormData = {
    age: "",
    email: "",
    gender: "",
    password: "",
    terms: false,
  };

  const subscription = { submitting: true };
  const error = "validation error";
  const errorId = "error-helper";

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
            <TextField
              label={INPUT_LABLE_MAP[INPUT_NAMES.EMAIL]}
              id={INPUT_NAMES.EMAIL}
              name={INPUT_NAMES.EMAIL}
              required={required.email}
              helperText={`${INPUT_NAMES.EMAIL} ${error}`}
              aria-describedby={`${INPUT_NAMES.EMAIL}-${errorId}`}
            />
            <TextField
              label={INPUT_LABLE_MAP[INPUT_NAMES.PASSWORD]}
              id={INPUT_NAMES.PASSWORD}
              name={INPUT_NAMES.PASSWORD}
              type="password"
              autoComplete="new-password"
              required={required.password}
              helperText={`${INPUT_NAMES.PASSWORD} ${error}`}
              aria-describedby={`${INPUT_NAMES.PASSWORD}-${errorId}`}
            />
            <Select
              label={INPUT_LABLE_MAP[INPUT_NAMES.AGE]}
              id={INPUT_NAMES.AGE}
              name={INPUT_NAMES.AGE}
              data={AGE_OPTIONS}
              formHelperTextProps={{ id: `${INPUT_NAMES.AGE}-${errorId}` }}
              helperText={`${INPUT_NAMES.AGE} ${error}`}
            />
            <Radios
              label={INPUT_LABLE_MAP[INPUT_NAMES.GENDER]}
              formLabelProps={{ id: INPUT_LABLE_MAP[INPUT_NAMES.GENDER] }}
              name={INPUT_NAMES.GENDER}
              data={GENDER_OPTIONS}
              radioGroupProps={{
                "aria-labelledby": INPUT_LABLE_MAP[INPUT_NAMES.GENDER],
                "aria-describedby": `${INPUT_NAMES.GENDER}-${errorId}`,
                row: true,
              }}
              formHelperTextProps={{ id: `${INPUT_NAMES.GENDER}-${errorId}` }}
              helperText={`${INPUT_NAMES.GENDER} ${error}`}
            />
            <Checkboxes
              name={INPUT_NAMES.TERMS}
              label="You Should Accept Our Terms"
              data={{
                label: INPUT_LABLE_MAP[INPUT_NAMES.TERMS],
                value: true,
              }}
              formLabelProps={{ component: "legend" }}
              formControlLabelProps={{
                required: required.terms,
              }}
              formHelperTextProps={{ id: `${INPUT_NAMES.TERMS}-${errorId}` }}
              helperText={`${INPUT_NAMES.TERMS} ${error}`}
              aria-describedby={`${INPUT_NAMES.PASSWORD}-${errorId}`}
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={onReset(form)}
                  disabled={submitting}
                >
                  Reset
                </Button>
              </Grid>
              <Grid size={6}>
                <Button variant="contained" type="submit" disabled={submitting}>
                  Submit
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={6}>
                <Typography>
                  <strong>Form field data</strong>
                </Typography>
                <Debug />
              </Grid>
              <Grid size={6}>
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
              </Grid>
            </Grid>
          </Stack>
        </form>
      )}
    />
  );
}
