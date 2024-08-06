import React from "react";
import Link from "next/link";
import { IconType } from "react-icons"; // Import the IconType type from react-icons

interface HeroPillsProps {
  LinkName: string;
  link: string;
  Icon: IconType;
}

const HeroPills: React.FC<HeroPillsProps> = ({ LinkName, link, Icon }) => {
  return (
    <>
      <div className="flex border-2 border-green-500 hover:border-green-700 hover:text-green-500 rounded-lg px-4 py-2 transition ease-in-out duration-300">
        <Link href={link} className="flex items-center gap-2 w-full h-full">
          <Icon style={{ color: "green" }} />{" "}
          {/* Appliquer la couleur verte à l'icône */}
          <p>{LinkName}</p>
        </Link>
      </div>
    </>
  );
};

export default HeroPills;
