import * as React from "react";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { tokens } from "../../theme";
import { InputWrapper } from "./wrapper";
import { alpha, styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: tokens(theme.palette.mode)?.bgMode,
    },
  },
  width: "100%",
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: tokens(theme.palette.mode)?.bgMode,
    },
  },
}));

export const TextAreaComponent = ({ label, name, question, formik, type }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <InputWrapper {...{ label, name, question, formik, type }}>
      <StyledTextField
        id="outlined-basic"
        label={label}
        multiline
        name={name}
        onChange={formik.handleChange}
        // onChange={(e) => formik.setFieldValue(name, e.target.value)}
        variant="outlined"
        colors={colors}
      />
    </InputWrapper>
  );
};
