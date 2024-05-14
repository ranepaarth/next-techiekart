import BottomHeader from "@/components/header/header-bottom";
import TopHeader from "@/components/header/header-top";
import React from "react";

export type HeaderProp = {
  showOverlay: () => void;
};

const Header = ({ showOverlay }: HeaderProp) => {
  return (
    <header className="flex flex-col">
      <TopHeader showOverlay={showOverlay} />
      <BottomHeader />
    </header>
  );
};

export default Header;
