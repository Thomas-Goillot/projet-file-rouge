import React from "react";

interface CardStatProps {
    title: string;
    count: number;
}

const CardStatComponent: React.FC<CardStatProps> = ({ title, count }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-3xl">{count}</p>
    </div>
  );
};

export default CardStatComponent;
