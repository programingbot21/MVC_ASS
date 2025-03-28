import React from 'react';

const Button = ({ children, className = "", variant = "default", ...props }) => {
   
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

   
    return (
        <div>
          <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>  
        </div>
    );
}

export default Button;
