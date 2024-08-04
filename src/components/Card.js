import React from 'react';

const Card = ({ title, artist }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#2a2a2a]/60 backdrop-blur-md">
      <img
        src="/placeholder.svg"
        alt="Album Cover"
        className="h-full w-full object-cover"
        style={{ aspectRatio: "200/200", objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-[#b3b3b3]">{artist}</p>
      </div>
    </div>
  );
};

export default Card;
