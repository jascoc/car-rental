import { SearchBarProps } from "@/types";
import Image from "next/image";
import React from "react";

const SearchButton = ({ otherClasses }: SearchBarProps) => {
  return (
    <button type="submit" className={"-ml-3 z-10 " + otherClasses}>
      <Image
        src={"/magnifying-glass.svg"}
        alt="magnifying class"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
