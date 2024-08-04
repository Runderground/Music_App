import React from 'react';

const Button = ({ variant, size, className, children, ...props }) => {
  let baseStyles = "px-4 py-2 rounded focus:outline-none focus:ring";
  let variantStyles = "";
  let sizeStyles = "";

  switch (variant) {
    case "ghost":
      variantStyles = "bg-transparent hover:bg-gray-700";
      break;
    // Adicione mais variantes conforme necessário
  }

  switch (size) {
    case "icon":
      sizeStyles = "p-2";
      break;
    // Adicione mais tamanhos conforme necessário
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default button;
