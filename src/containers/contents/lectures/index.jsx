import { Box, Button, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { LectureFormBuilder } from "./form-builder";
import { lectures } from "./questions";

const Form = () => {
  const formik = useFormik(LectureFormBuilder());
  const isNonMobile = useMediaQuery("(min-width:600px)");

  console.log(formik.errors,'errors1213');
  return (
    <Box m="20px">
      <Header
        title="Create Lecture"
        subtitle="Create a Lecture to be added on a Topic(s)"
      />

      <form onSubmit={formik.handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(1, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {lectures.map((item, index) => {
            let InputComponent = item.component;
            return (
              <InputComponent
                formik={formik}
                key={item.name}
                name={item.name}
                label={item.label}
                type={item.type}
              />
            );
          })}
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
