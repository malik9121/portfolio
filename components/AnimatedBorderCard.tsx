'use client';

import React, { ReactNode } from 'react';
import './AnimatedBorderCard.css';

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedBorderCard({
  children,
  className = 'p-6 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5',
}: AnimatedBorderCardProps) {
  return (
    <div className={`animated-border-card ${className}`}>
      <div className="animated-border-card__content">
        {children}
      </div>
    </div>
  );
}
