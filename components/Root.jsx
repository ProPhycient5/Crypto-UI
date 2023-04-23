import React from "react";

const Root = () => {
  return (
    <div className="h-96 w-598 p-6 flex flex-col justify-between bg-secondary-dark border border-slate-700 rounded-2xl">
      <div className="w-full h-8 flex flex-row items-center justify-between">
        <div className="bg_primary_dark flex items-center h-full px-4 border border-slate-700 rounded-xl font-Bai_Jamjuree font-bold text-sm">
          Most Played
        </div>
        <icon>?</icon>
      </div>
      <div className="w-full flex justify-between items-end">
        <icon>people</icon>
        <icon>reverse</icon>
        <icon>people</icon>
      </div>
      <div>
        <div>Multi-user Lot</div>
        <p>
          In this lot multiple people will bet against you. The condition for
          the lot to start is both sides should have equal funds.
        </p>
      </div>
      <button className="bg-main-theme w-full h-10 flex justify-center items-center rounded-2xl pop_up_effect font-Bai_Jamjuree font-bold text-base tracking-wide">
        Create Lot
      </button>
    </div>
  );
};

export default Root;
