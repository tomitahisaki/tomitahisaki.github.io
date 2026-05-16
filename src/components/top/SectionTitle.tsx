interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-semibold mb-5 text-gray-800 border-b-2 border-gray-300 pb-3">
      {children}
    </h2>
  );
}
