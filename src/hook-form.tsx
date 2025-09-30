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
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {yupResolver} from "@hookform/resolvers/yup";

import {
    INPUT_NAMES,
    INPUT_LABEL_MAP,
    AGE_OPTIONS,
    GENDER_OPTIONS,
} from "./constants";
import {schema, SchemaType} from "./yup";

const initialValues: Partial<SchemaType> = {
    [INPUT_NAMES.EMAIL]: undefined,
    [INPUT_NAMES.PASSWORD]: undefined,
    [INPUT_NAMES.AGE]: undefined,
    [INPUT_NAMES.GENDER]: undefined,
    [INPUT_NAMES.TERMS]: false,
};

export default function HookForm() {
    const {handleSubmit, control, reset,} = useForm<SchemaType>({
        resolver: yupResolver(schema),
        mode: 'all', // onBlur onChange onSubmit onTouched
        defaultValues: initialValues,
    });

    const onSubmit: SubmitHandler<SchemaType> = (data) => console.log(data);

    return (
        <>
            <DevTool control={control}/>
            <Typography variant="h4" sx={{mb: 2}}>
                Hook Form
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column" spacing={2}>
                    <Controller
                        name={INPUT_NAMES.EMAIL}
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <FormControl
                                required
                                error={!!error}
                            >
                                <InputLabel htmlFor={INPUT_NAMES.EMAIL}>
                                    {INPUT_LABEL_MAP[INPUT_NAMES.EMAIL]}
                                </InputLabel>
                                <OutlinedInput
                                    {...field}
                                    value={field.value || ''}
                                    id={INPUT_NAMES.EMAIL}
                                    label={INPUT_LABEL_MAP[INPUT_NAMES.EMAIL]}
                                    aria-describedby={`${INPUT_NAMES.EMAIL}-error-helper`}
                                />
                                <FormHelperText id={`${INPUT_NAMES.EMAIL}-error-helper`}>
                                    {error?.message}
                                </FormHelperText>
                            </FormControl>
                        )}
                    />
                    <Controller
                        name={INPUT_NAMES.PASSWORD}
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <FormControl
                                required
                                error={!!error}>
                                <InputLabel htmlFor={INPUT_NAMES.PASSWORD}>
                                    {INPUT_LABEL_MAP[INPUT_NAMES.PASSWORD]}
                                </InputLabel>
                                <OutlinedInput
                                    {...field}
                                    value={field.value || ''}
                                    type="password"
                                    id={INPUT_NAMES.PASSWORD}
                                    label={INPUT_LABEL_MAP[INPUT_NAMES.PASSWORD]}
                                    aria-describedby={`${INPUT_NAMES.PASSWORD}-error-helper`}
                                />
                                <FormHelperText id={`${INPUT_NAMES.PASSWORD}-error-helper`}>
                                    {error?.message}
                                </FormHelperText>
                            </FormControl>
                        )}
                    />

                    <Controller
                        name={INPUT_NAMES.AGE}
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <FormControl
                                required
                                fullWidth error={!!error}>
                                <InputLabel id={INPUT_LABEL_MAP[INPUT_NAMES.AGE]}>
                                    {INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
                                </InputLabel>
                                <Select
                                    {...field}
                                    value={field.value || null}
                                    labelId={INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
                                    id={INPUT_NAMES.AGE}
                                    label={INPUT_LABEL_MAP[INPUT_NAMES.AGE]}
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
                                    {error?.message}
                                </FormHelperText>
                            </FormControl>
                        )}
                    />
                    <Controller
                        name={INPUT_NAMES.GENDER}
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <FormControl
                                required
                                error={!!error}>
                                <FormLabel id={INPUT_LABEL_MAP[INPUT_NAMES.GENDER]}>
                                    {INPUT_LABEL_MAP[INPUT_NAMES.GENDER]}
                                </FormLabel>
                                <RadioGroup
                                    {...field}
                                    value={field.value || ''}
                                    row
                                    aria-labelledby={INPUT_LABEL_MAP[INPUT_NAMES.GENDER]}
                                >
                                    {GENDER_OPTIONS.map((item) => (
                                        <FormControlLabel
                                            key={`${item.label}--${item.value}`}
                                            value={item.value}
                                            control={<Radio/>}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                                <FormHelperText id={`${INPUT_NAMES.GENDER}-error-helper`}>
                                    {error?.message}
                                </FormHelperText>
                            </FormControl>
                        )}
                    />
                    <Controller
                        name={INPUT_NAMES.TERMS}
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <FormControl error={!!error}>
                                <FormLabel component="legend">
                                    You Should Accept Our Terms
                                </FormLabel>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            {...field}
                                            required
                                            checked={field.value || false}
                                            aria-describedby={`${INPUT_NAMES.TERMS}-error-helper`}
                                        />
                                    }
                                    label={INPUT_LABEL_MAP[INPUT_NAMES.TERMS]}
                                />
                                <FormHelperText id={`${INPUT_NAMES.TERMS}-error-helper`}>
                                    {error?.message}
                                </FormHelperText>
                            </FormControl>
                        )}
                    />
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <Button type="button" variant="contained" onClick={() => reset(initialValues)}>
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
