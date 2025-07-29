import React from 'react';
import linkedinIcon from '../assets/images/linkedin.svg';
import githubIcon from '../assets/images/github.svg';
import emailIcon from '../assets/images/email.svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const LinkedInIcon: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  className = '' 
}) => {
  return (
    <img 
      src={linkedinIcon} 
      alt="LinkedIn" 
      width={width} 
      height={height}
      className={className}
      style={{ 
        filter: 'brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(85%)', // デフォルトグレー
        display: 'block',
        transition: 'filter 0.2s ease'
      }}
    />
  );
};

export const GitHubIcon: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  className = '' 
}) => {
  return (
    <img 
      src={githubIcon} 
      alt="GitHub" 
      width={width} 
      height={height}
      className={className}
      style={{ 
        filter: 'brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(85%)', // デフォルトグレー
        display: 'block',
        transition: 'filter 0.2s ease'
      }}
    />
  );
};

export const EmailIcon: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  className = '' 
}) => {
  return (
    <img 
      src={emailIcon} 
      alt="Email" 
      width={width} 
      height={height}
      className={className}
      style={{ 
        filter: 'brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(85%)', // デフォルトグレー
        display: 'block',
        transition: 'filter 0.2s ease'
      }}
    />
  );
};
