import React from 'react';

interface TechnologyItemProps {
  name: string;
  color: string;
  svg: React.ReactNode;
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ name, color, svg }) => {
  return (
    <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 bg-black border border-slate-800 max-w-full">
      <div className={`p-2 items-center justify-center rounded-lg bg-opacity-15`} style={{ backgroundColor: color }}>
        {svg}
      </div>
      <span className="text-smaller md:text-small">{name}</span>
    </li>
  );
};

export default TechnologyItem;