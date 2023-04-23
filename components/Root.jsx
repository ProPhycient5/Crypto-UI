import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Root = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-96 w-598 p-6 flex flex-col justify-between bg-secondary-dark border border-slate-700 rounded-2xl">
      <div className="w-full h-8 flex flex-row items-center justify-between">
        <div className="bg_primary_dark flex items-center h-full px-4 border border-slate-700 rounded-xl font-Bai_Jamjuree font-bold text-sm">
          Most Played
        </div>
        <div>
          <AiOutlineQuestionCircle className="h-6 w-6 text-slate-600" />
        </div>
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
      <button
        onClick={() => setShow(true)}
        className="bg-main-theme w-full h-10 flex justify-center items-center rounded-2xl pop_up_effect font-Bai_Jamjuree font-bold text-base tracking-wide"
      >
        Create Lot
      </button>
      {show && <OverLayLoader setShow={setShow} />}
    </div>
  );
};

export default Root;

const OverLayLoader = ({ setShow }) => {
  return (
    <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <div className="w-80 h-80 bg-teal-600 flex flex-col justify-center text-white">
        This is the pop-up.
        <button
          onClick={() => setShow(false)}
          className="bg_primary_dark flex items-center p-4 border border-slate-700 rounded-xl font-Bai_Jamjuree font-bold text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};
