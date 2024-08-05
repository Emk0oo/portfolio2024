import React from 'react';

interface TechnologyItemProps {
  name: string;
  color: string;
  svg: React.ReactNode;
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ name, color, svg }) => {
  return (
    <li 
      className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 bg-neutral-900 border border-slate-800 max-w-full "
    >
      <div 
        className={`p-2 items-center justify-center rounded-lg bg-opacity-15 transition-transform transform`} 
        style={{ 
          backgroundColor: color, 
          boxShadow: '0 0 10px rgba(255, 255, 255, 0)', /* Initial shadow */
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 10px 3px rgba(255, 255, 255, 0.5)'; /* Subtle white aura on hover */
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 10px rgba(255, 255, 255, 0)'; /* Remove aura on mouse leave */
        }}
      >
        {svg}
      </div>
      <span className="text-smaller md:text-small">{name}</span>
    </li>
  );
};

export default TechnologyItem;
