import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiHatenabookmark } from 'react-icons/si';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const LinkedInIcon: React.FC<IconProps> = ({ 
  width = 24, 
  className = '' 
}) => {
  return (
    <FaLinkedin 
      size={width}
      className={`${className} text-gray-600 hover:text-blue-600 transition-colors duration-200 ease-in-out`}
    />
  );
};

export const GitHubIcon: React.FC<IconProps> = ({ 
  width = 24, 
  className = '' 
}) => {
  return (
    <FaGithub 
      size={width}
      className={`${className} text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out`}
    />
  );
};

export const EmailIcon: React.FC<IconProps> = ({ 
  width = 24, 
  className = '' 
}) => {
  return (
    <MdEmail 
      size={width}
      className={`${className} text-gray-600 hover:text-red-500 transition-colors duration-200 ease-in-out`}
    />
  );
};

export const XIcon: React.FC<IconProps> = ({ 
  width = 24, 
  className = '' 
}) => {
  return (
    <FaXTwitter 
      size={width}
      className={`${className} text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out`}
    />
  );
};

export const HatenaIcon: React.FC<IconProps> = ({ 
  width = 24, 
  className = '' 
}) => {
  return (
    <SiHatenabookmark 
      size={width}
      className={`${className} text-gray-600 hover:text-blue-500 transition-colors duration-200 ease-in-out`}
    />
  );
};
