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
      <div className="flex bg-gray-900 rounded-full px-4 py-2">
        <Link href={link}>
            <div className="flex items-center gap-2">
                <Icon />
                <p>{LinkName}</p>
            </div>
        </Link>
      </div>
    </>
  );
};

export default HeroPills;
