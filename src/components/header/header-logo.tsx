import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <>
      <Link href={"/"} className="font-extrabold text-lg lg:hidden block">
        anazom
      </Link>
      <Link href={"/"} className="font-extrabold text-2xl hidden lg:block">
        anazom
      </Link>
    </>
  );
};

export default HeaderLogo;
