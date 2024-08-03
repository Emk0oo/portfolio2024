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
      <div className="flex border-2 border-green-500 hover:border-green-700 hover:text-green-500 rounded-lg px-4 py-2">
        <Link href={link}>
          <div className="flex items-center gap-2">
            <Icon style={{ color: 'green' }} /> {/* Apply green color to the icon */}
            <p className="">{LinkName}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeroPills;
