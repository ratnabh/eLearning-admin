import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { tokens } from "../../theme";
import _ from "lodash";

export const InputWrapper = (props) => {
  const { formik, question, name } = props;
  const error = _.get(formik.errors, name);
  const touched = _.get(formik.touched, name);
  console.log(formik,'formik123',name,error,touched)
  return (
    <Wrapper formik={formik} name={name} {...props}>
      <p>{question}</p>
      {props.children}
      {error && touched && <ErrorDiv>{error}</ErrorDiv>}
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme, formik, name }) => {
  const error = _.get(formik.errors, name);
  const touched = _.get(formik.touched, name);
  console.log(error, touched, "asf");
  return {
    position: "relative",
    // ...(error && touched && { border: "1px solid red" }),
  };
});

const ErrorDiv = styled("div")({
  color: "red",
});
