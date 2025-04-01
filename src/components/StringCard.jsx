import React from 'react';

const StringCard = ({ stringMethod, onClick }) => {
  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body flex flex-row gap-6 items-center justify-center">
        <span>
          ¿Icono?
        </span>
        <h2 className="card-title text-primary">{stringMethod.title}</h2>
      </div>
    </div>
  );
};

export default StringCard;
