import {
  Button,
  Grid,
  Stack,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Formik as FormikProvider, Form } from "formik";
import {
  INPUT_NAMES,
  INPUT_LABEL_MAP,
  AGE_OPTIONS,
  GENDER_OPTIONS,
} from "./constants";
import { schema } from "./yup";

type FormValues = {
  [INPUT_NAMES.EMAIL]: string;
  [INPUT_NAMES.PASSWORD]: string;
  [INPUT_NAMES.AGE]: string | number | null;
  [INPUT_NAMES.GENDER]: string | null;
  [INPUT_NAMES.TERMS]: boolean;
};

const initialValues: FormValues = {
  [INPUT_NAMES.EMAIL]: "",
  [INPUT_NAMES.PASSWORD]: "",
  [INPUT_NAMES.AGE]: "",
  [INPUT_NAMES.GENDER]: "",
  [INPUT_NAMES.TERMS]: false,
};

export default function Formik() {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Formik
      </Typography>

      <FormikProvider
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submit action:", values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          resetForm,
        }) => {
          const emailError =
            touched[INPUT_NAMES.EMAIL] && errors[INPUT_NAMES.EMAIL];
          const passwordError =
            touched[INPUT_NAMES.PASSWORD] && errors[INPUT_NAMES.PASSWORD];
          const ageError = touched[INPUT_NAMES.AGE] && errors[INPUT_NAMES.AGE];
          const genderError =
            touched[INPUT_NAMES.GENDER] && errors[INPUT_NAMES.GENDER];
          const termsError =
            touched[INPUT_NAMES.TERMS] && errors[INPUT_NAMES.TERMS];

          return (
            <Form noValidate onSubmit={handleSubmit}>
              <Stack direction="column" spacing={2}>
                {/* EMAIL */}
                <FormControl required error={Boolean(emailError)}>
                  <InputLabel htmlFor={INPUT_NAMES.EMAIL}>
                    {INPUT_LABEL_MAP[INPUT_NAMES.EMAIL]}
                  </InputLabel>
                  <OutlinedInput
                    id={INPUT_NAMES.EMAIL}
                    name={INPUT_NAMES.EMAIL}
                    value={values[INPUT_NAMES.EMAIL]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label={INPUT_LABEL_MAP[INPUT_NAMES.EMAIL]}
                    aria-describedby={`${INPUT_NAMES.EMAIL}-error-helper`}
                    autoComplete="email"
                  />
                  <FormHelperText id={`${INPUT_NAMES.EMAIL}-error-helper`}>
                    {emailError ? String(emailError) : " "}
                  </FormHelperText>
                </FormControl>

                <FormControl required error={Boolean(passwordError)}>
                  <InputLabel htmlFor={INPUT_NAMES.PASSWORD}>
                    {INPUT_LABEL_MAP[INPUT_NAMES.PASSWORD]}
                  </InputLabel>
                  <OutlinedInput
                    type="password"
                    id={INPUT_NAMES.PASSWORD}
                    name={INPUT_NAMES.PASSWORD}
                    value={values[INPUT_NAMES.PASSWORD]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label={INPUT_LABEL_MAP[INPUT_NAMES.PASSWORD]}
                    aria-describedby={`${INPUT_NAMES.PASSWORD}-error-helper`}
                    autoComplete="new-password"
                  />
                  <FormHelperText id={`${INPUT_NAMES.PASSWORD}-error-helper`}>
                    {passwordError ? String(passwordError) : " "}
                  </FormHelperText>
                </FormControl>

                <FormControl fullWidth error={Boolean(ageError)}>
                  <InputLabel id={`${INPUT_NAMES.AGE}-label`}>
                    {INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
                  </InputLabel>
                  <Select
                    labelId={`${INPUT_NAMES.AGE}-label`}
                    id={INPUT_NAMES.AGE}
                    name={INPUT_NAMES.AGE}
                    value={values[INPUT_NAMES.AGE] ?? ""}
                    label={INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
                    onChange={(e) =>
                      setFieldValue(INPUT_NAMES.AGE, e.target.value)
                    }
                    onBlur={handleBlur}
                    aria-describedby={`${INPUT_NAMES.AGE}-error-helper`}
                  >
                    {AGE_OPTIONS.map((item) => (
                      <MenuItem
                        key={`${item.label}--${item.value}`}
                        value={item.value}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText id={`${INPUT_NAMES.AGE}-error-helper`}>
                    {ageError ? String(ageError) : " "}
                  </FormHelperText>
                </FormControl>

                <FormControl error={Boolean(genderError)}>
                  <FormLabel id={`${INPUT_NAMES.GENDER}-label`}>
                    {INPUT_LABEL_MAP[INPUT_NAMES.GENDER]}
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={`${INPUT_NAMES.GENDER}-label`}
                    name={INPUT_NAMES.GENDER}
                    value={values[INPUT_NAMES.GENDER] ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={`${INPUT_NAMES.GENDER}-error-helper`}
                  >
                    {GENDER_OPTIONS.map((item) => (
                      <FormControlLabel
                        key={`${item.label}--${item.value}`}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                      />
                    ))}
                  </RadioGroup>
                  <FormHelperText id={`${INPUT_NAMES.GENDER}-error-helper`}>
                    {genderError ? String(genderError) : " "}
                  </FormHelperText>
                </FormControl>

                <FormControl error={Boolean(termsError)}>
                  <FormLabel component="legend">
                    You Should Accept Our Terms
                  </FormLabel>
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        name={INPUT_NAMES.TERMS}
                        checked={Boolean(values[INPUT_NAMES.TERMS])}
                        onChange={(e) =>
                          setFieldValue(INPUT_NAMES.TERMS, e.target.checked)
                        }
                        onBlur={handleBlur}
                        aria-describedby={`${INPUT_NAMES.TERMS}-error-helper`}
                      />
                    }
                    label={INPUT_LABEL_MAP[INPUT_NAMES.TERMS]}
                  />
                  <FormHelperText id={`${INPUT_NAMES.TERMS}-error-helper`}>
                    {termsError ? String(termsError) : " "}
                  </FormHelperText>
                </FormControl>

                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Button
                      type="button"
                      variant="contained"
                      color="inherit"
                      onClick={() => resetForm()}
                      disabled={isSubmitting}
                    >
                      Reset
                    </Button>
                  </Grid>
                  <Grid size={6}>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Form>
          );
        }}
      </FormikProvider>
    </>
  );
}
