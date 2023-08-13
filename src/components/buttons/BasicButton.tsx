import { Button } from "@mui/material";

interface BasicButtonProps {
  label: string;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  onClick?: () => void;
}

export const BasicButton = ({
  label,
  color = "primary",
  variant = "contained",
  onClick,
}: BasicButtonProps) => {
  return (
    <Button color={color} variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};
