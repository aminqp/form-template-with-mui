import * as React from "react";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import BasicForm from "./basic";
import FinalForm from "./final-form";
import Formik from "./formik";
import HookForm from "./hook-form";

type Form = "basic" | "final-form" | "formik" | "hook-form";

export default function App() {
  const [form, setForm] = React.useState<Form>("basic");

  return (
    <>
      <ToggleButtonGroup
        value={form}
        exclusive
        onChange={(_e, newForm) => setForm(newForm)}
        aria-label="selected form"
        sx={{ mb: 2, textAlign: "center" }}
      >
        <ToggleButton value="basic" aria-label="basic">
          <Typography>Basic</Typography>
        </ToggleButton>
        <ToggleButton value="hook-form" aria-label="hook-form">
          <Typography>Hook Form</Typography>
        </ToggleButton>
        <ToggleButton value="formik" aria-label="formik">
          <Typography>Formik</Typography>
        </ToggleButton>
        <ToggleButton value="final-form" aria-label="final-form">
          <Typography>Final Form</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      {!form && <Typography>Please select a form</Typography>}
      {form === "basic" && <BasicForm />}
      {form === "hook-form" && <HookForm />}
      {form === "formik" && <Formik />}
      {form === "final-form" && <FinalForm />}
    </>
  );
}
