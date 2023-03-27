import React from "react";
import { MaterialUISwitch } from "./Switch.style";

interface SwitchProps {
  onClick: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ onClick }) => {
  return <MaterialUISwitch sx={{ m: 1 }} defaultChecked onClick={onClick} />;
};
