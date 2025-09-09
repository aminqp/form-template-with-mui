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
import {
  INPUT_NAMES,
  INPUT_LABEL_MAP,
  AGE_OPTIONS,
  GENDER_OPTIONS,
} from "./constants";
// import { schema } from "./yup";

export default function HookForm() {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Hook Form
      </Typography>
      <form action="">
        <Stack direction="column" spacing={2}>
          <FormControl required>
            <InputLabel htmlFor={INPUT_NAMES.EMAIL}>
              {INPUT_LABEL_MAP[INPUT_NAMES.EMAIL]}
            </InputLabel>
            <OutlinedInput
              id={INPUT_NAMES.EMAIL}
              label={INPUT_LABEL_MAP[INPUT_NAMES.EMAIL]}
              aria-describedby={`${INPUT_NAMES.EMAIL}-error-helper`}
            />
            <FormHelperText id={`${INPUT_NAMES.EMAIL}-error-helper`}>
              {INPUT_NAMES.EMAIL} validation error
            </FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor={INPUT_NAMES.PASSWORD}>
              {INPUT_LABEL_MAP[INPUT_NAMES.PASSWORD]}
            </InputLabel>
            <OutlinedInput
              type="password"
              id={INPUT_NAMES.PASSWORD}
              label={INPUT_LABEL_MAP[INPUT_NAMES.PASSWORD]}
              aria-describedby={`${INPUT_NAMES.PASSWORD}-error-helper`}
            />
            <FormHelperText id={`${INPUT_NAMES.PASSWORD}-error-helper`}>
              {INPUT_NAMES.PASSWORD} validation error
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id={INPUT_LABEL_MAP[INPUT_NAMES.AGE]}>
              {INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
            </InputLabel>
            <Select
              labelId={INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
              id={INPUT_NAMES.PASSWORD}
              value={null}
              label={INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
              // onChange={handleChange}
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
              {INPUT_NAMES.AGE} validation error
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel id={INPUT_LABEL_MAP[INPUT_NAMES.GENDER]}>
              {INPUT_LABEL_MAP[INPUT_NAMES.GENDER]}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby={INPUT_LABEL_MAP[INPUT_NAMES.GENDER]}
              name={INPUT_NAMES.GENDER}
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
              {INPUT_NAMES.GENDER} validation error
            </FormHelperText>
          </FormControl>
          <FormControl
          // error
          >
            <FormLabel component="legend">
              You Should Accept Our Terms
            </FormLabel>
            <FormControlLabel
              required
              control={
                <Checkbox
                  // checked={gilad}
                  // onChange={handleChange}GENDER
                  name={INPUT_NAMES.TERMS}
                  aria-describedby={`${INPUT_NAMES.PASSWORD}-error-helper`}
                />
              }
              label={INPUT_LABEL_MAP[INPUT_NAMES.TERMS]}
            />
            <FormHelperText id={`${INPUT_NAMES.TERMS}-error-helper`}>
              {INPUT_NAMES.TERMS} validation error
            </FormHelperText>
          </FormControl>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Button type="button" variant="contained">
                Reset
              </Button>
            </Grid>
            <Grid size={6}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </form>
    </>
  );
}
