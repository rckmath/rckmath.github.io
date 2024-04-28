import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColoredButton = styled(Button, { shouldForwardProp: (prop) => prop !== "backgroundColor" })(
  ({ theme, backgroundColor, variant }) => ({
    borderColor: backgroundColor,
    color: variant === "contained" ? theme.palette.getContrastText(backgroundColor) : backgroundColor,
    ...(variant === "contained" && { backgroundColor }),
    "&:hover": { ...(variant === "contained" && { backgroundColor }), borderColor: backgroundColor },
  })
);

export default ColoredButton;
