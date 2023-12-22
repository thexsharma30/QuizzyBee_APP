import React from "react";

const cardClassName = `bg-white rounded-3xl drop-shadow-xl flex flex-col`;

const Card = ({ children, className }) => {
  return <div className={`${cardClassName} ${className}`}>{children}</div>;
};

export default Card;
