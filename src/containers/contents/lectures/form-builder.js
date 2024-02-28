import { post } from "../../../api";
import { schema } from "./schema";
import * as Yup from "yup";

// import { throwSuccess } from "components/Alerts/success";
// import { throwError } from "components/Alerts/error";

export const LectureFormBuilder = () => ({
  enableReinitialize: true,
  initialValues: {
    lectureName: null,
    lectureDescription: null,
    lectureFile: null,
  },
  validateOnChange: true,
  validateOnBlur: true,

  onSubmit: async (values, { setSubmitting, setErrors }) => {
    try {
      const formData = new FormData();
      formData.append("lectureFile", values.lectureFile);
      formData.append("lectureName", values.lectureName);
      formData.append("lectureDescription", values.lectureDescription);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await post("/lecture-upload", formData);
      console.log(response);
    } catch (error) {
      console.log(error, "error12");
    }
  },
  validationSchema: Yup.object().shape({
    lectureName: Yup.string()
      .required("Lecture Name is required")
      .typeError("Lecture Name is required"),
    lectureDescription: Yup.string()
      .required("Lecture Description is required")
      .typeError("Lecture Description is required"),
    lectureFile: Yup.mixed()
      .required("A file is required")
      .test("fileType", "Invalid file format", (value) => {
        console.log(value?.type);
        if (!value) return false;
        else
          return [
            "image/jpeg",
            "image/png",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type);
      })
      .test(
        "fileSize",
        "File size must not exceed 5 MB",
        (value) => value && value.size <= 5000000
      ),
  }),
});
