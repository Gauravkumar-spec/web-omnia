import Link from "next/link";
import React from "react";



const GradientLink = ({ location, text }) => {
  return (
    <Link href={location}>
      <span className="text-transparent cursor-pointer bg-gradient bg-clip-text font-extrabold">
        {text}
      </span>
    </Link>
  );
};

export default GradientLink;
