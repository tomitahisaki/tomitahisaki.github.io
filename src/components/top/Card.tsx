interface CardProps {
  children: React.ReactNode;
  padding?: 'default' | 'large';
}

export function Card({ children, padding = 'default' }: CardProps) {
  const paddingClass = padding === 'large' ? 'p-6' : 'p-5';
  
  return (
    <div className={`bg-white shadow rounded-lg ${paddingClass}`}>
      {children}
    </div>
  );
}
