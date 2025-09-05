import {
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
} from "@mui/material";

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

export default function App() {
  return (
    <form action="">
      <Stack direction="column" spacing={2}>
        <FormControl required>
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
        </FormControl>
        <FormControl required>
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
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id={INPUT_LABLE_MAP[INPUT_NAMES.AGE]}>
            {INPUT_LABLE_MAP[INPUT_NAMES.AGE]}
          </InputLabel>
          <Select
            labelId={INPUT_LABLE_MAP[INPUT_NAMES.AGE]}
            id={INPUT_NAMES.PASSWORD}
            value={null}
            label={INPUT_LABLE_MAP[INPUT_NAMES.AGE]}
            // onChange={handleChange}
          >
            {AGE_OPTIONS.map((item) => (
              <MenuItem key={`${item.label}--${item.value}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText id={`${INPUT_NAMES.AGE}-error-heler`}>
            {INPUT_NAMES.AGE} validation error
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel id={INPUT_LABLE_MAP[INPUT_NAMES.GENDER]}>
            {INPUT_LABLE_MAP[INPUT_NAMES.GENDER]}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby={INPUT_LABLE_MAP[INPUT_NAMES.GENDER]}
            name={INPUT_NAMES.GENDER}
            aria-describedby={`${INPUT_NAMES.GENDER}-error-heler`}
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
          <FormHelperText id={`${INPUT_NAMES.GENDER}-error-heler`}>
            {INPUT_NAMES.GENDER} validation error
          </FormHelperText>
        </FormControl>
        <FormControl
        // error
        >
          <FormLabel component="legend">You Should Accest Our Terms</FormLabel>
          <FormControlLabel
            required
            control={
              <Checkbox
                // checked={gilad}
                // onChange={handleChange}GENDER
                name={INPUT_NAMES.TERMS}
                aria-describedby={`${INPUT_NAMES.PASSWORD}-error-heler`}
              />
            }
            label={INPUT_LABLE_MAP[INPUT_NAMES.TERMS]}
          />
          <FormHelperText id={`${INPUT_NAMES.TERMS}-error-heler`}>
            {INPUT_NAMES.TERMS} validation error
          </FormHelperText>
        </FormControl>
      </Stack>
    </form>
  );
}
