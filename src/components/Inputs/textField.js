import * as React from "react";
import TextField from "@mui/material/TextField";
import { IconButton, Typography, useTheme } from "@mui/material";
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

export const TextFieldComponent = ({ label, name, question, formik, type }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <InputWrapper {...{ label, name, question, formik, type }}>
      <StyledTextField
        id="outlined-basic"
        label={label}
        name={name}
        variant="outlined"
        onChange={formik.handleChange}
        // onChange={(e) => formik.setFieldValue(name, e.target.value)}
        colors={colors}
      />
    </InputWrapper>
  );
};
