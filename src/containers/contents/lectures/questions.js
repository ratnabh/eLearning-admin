import { FileUpload } from "../../../components/Inputs/fileUpload";
import { TextAreaComponent } from "../../../components/Inputs/textArea";
import { TextFieldComponent } from "../../../components/Inputs/textField";

export const lectures = [
  {
    component: TextFieldComponent,
    name: "lectureName",
    type: "text",
    label: "Lecture Name",
  },
  {
    component: TextAreaComponent,
    name: "lectureDescription",
    type: "text",
    label: "Lecture Description",
  },
  {
    component: FileUpload,
    name: "lectureFile",
    label: "Lecture Content",
  },
  // {
  //   component: TextFieldComponent,
  //   name: "lectureDescription",
  //   type: "text",
  //   label: "Lecture Description",
  // },
  // {
  //   component: TextFieldComponent,
  //   name: "lectureDescription",
  //   type: "text",
  //   label: "Lecture Description",
  // },
];
