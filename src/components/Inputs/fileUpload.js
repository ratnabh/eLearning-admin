import * as React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { tokens } from "../../theme";
import ClearIcon from "@mui/icons-material/Clear";
import { InputWrapper } from "./wrapper";

export const FileUpload = ({ name, formik, label, type, question }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [fileName, setFileName] = React.useState(null);
  const [file, setFile] = React.useState(null);

  function displayFileName(e) {
    const fileInput = document.getElementById("fileInput");
    setFile(e.target.files[0]);
    const fileName = fileInput?.value.split("\\").pop();
    setFileName(fileName);
    formik.setFieldValue(name, e.target.files[0]);
  }

  return (
    <InputWrapper {...{ label, name, question, formik, type }}>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Stack direction="row" alignItems="center" gap={2}>
          <Button
            variant="contained"
            component="label"
            sx={{
              ":hover": {
                backgroundColor: colors.bgMode,
              },
              backgroundColor: colors.bgMode,
              color: colors.colorMode,
            }}
          >
            Upload
            <input
              hidden
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              id="fileInput"
              type="file"
              name={name}
              onChange={(e) => displayFileName(e)}
            />
          </Button>
          <Stack direction="row" alignItems="center" gap={2}>
            {fileName && <span>{fileName}</span>}
            {fileName && (
              <ClearIcon
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => {
                  setFileName(null);
                  setFile(null);
                }}
              />
            )}
          </Stack>
        </Stack>
        <label>Choose a file to upload into lecture.</label>
      </Stack>
    </InputWrapper>
  );
};
