import React from 'react';

interface StatCardProps {
  label: string;
  sublabel?: string;
  accent?: 'primary' | 'emerald' | 'cyan' | 'amber';
}

export const StatCard: React.FC<StatCardProps> = ({ label, sublabel, accent = 'primary' }) => {
  return (
    <div className={`stat-card stat-card--${accent}`}>
      <div className="stat-card__label">{label}</div>
      {sublabel && <div className="stat-card__sublabel">{sublabel}</div>}
    </div>
  );
};
