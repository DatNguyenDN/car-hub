"use client";

// import { CustomeButtonProps } from "@/types";

// export default function CustomButton({
//   title,
//   containerStyles,
//   handleClick,
// }: CustomeButtonProps) {
//   return (
//     <button
//       type="button"
//       className={`custom-btn ${containerStyles}`}
//       onClick={handleClick}
//     >
//       <span className="flex-1"> {title}</span>
//     </button>
//   );
// }

import React from "react";
import { Button } from "@/components/ui/button";
import { CustomeButtonProps } from "@/types";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  ...props
}: CustomeButtonProps) => {
  return (
    <Button {...props} onClick={handleClick} className={`${containerStyles}`}>
      {title}
    </Button>
  );
};

export default CustomButton;
