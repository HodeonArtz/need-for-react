import { InputLabel, Stack } from "@mantine/core";
import "react";

const Labeler = ({ children, label, gap = "0px" }) => {
  return (
    <Stack gap={gap} justify="center" mt={3}>
      <InputLabel>{label}</InputLabel>
      {children}
    </Stack>
  );
};

export default Labeler;
