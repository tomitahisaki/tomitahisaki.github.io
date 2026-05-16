import React from 'react';
import { MdContentCopy } from 'react-icons/md';

interface PdfButtonProps {
  onClick: () => void;
}

export const PdfButton: React.FC<PdfButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 shadow-sm hover:opacity-80 bg-white text-gray-700"
    >
      <MdContentCopy className="w-5 h-5" />
    </button>
  );
};
