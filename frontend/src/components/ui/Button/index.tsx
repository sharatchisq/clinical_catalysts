import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<CustomButtonProps> = ({ 
  buttonType = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const typeClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    danger: 'bg-danger text-white hover:bg-danger/90',
  };

  return (
    <button
      className={`${baseClasses} ${typeClasses[buttonType]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 