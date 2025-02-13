import React from "react";
import LogoBCG from "../../Assets/Logo BCG.png";
import BankBRI from "../../Assets/Bank BRI.png";
import BankBJB from "../../Assets/Bank BJB.png";
import BankBTN from "../../Assets/Bank BTN.png";
import BankMandiri from "../../Assets/Bank Mandiri.png";
import BankBSI from "../../Assets/Bank BSI.png";
import "../../App.css";

function Section2() {
  return (
    <div className="flex flex-col items-center justify-center py-20 mx-20 my-10">
      <img src={LogoBCG} alt="" className="h-15 w-30 mb-7" />
      <h1 className="text-4xl font-semibold text-center mb-5">
        KERJASAMA BANK
      </h1>
      <div className="grid gap-2 my-10 gap-15 md:px-5 lg:px-20 lg:gap-20 items-center justify-items-center w-full object-cover grid-cols-3 md:grid-cols-5">
        <img src={BankBRI} alt="Bank BRI" className="h-auto w-auto mb-7" />
        <img src={BankBJB} alt="Bank BJB" className="h-auto w-auto mb-7" />
        <img
          src={BankBTN}
          alt="Bank BTN Konvensional"
          className="h-auto w-auto mb-7"
        />
        <img
          src={BankMandiri}
          alt="Bank Mandiri"
          className="h-auto w-auto mb-7"
        />
        <img src={BankBSI} alt="Bank BSI" className="h-auto w-auto mb-7" />
      </div>
    </div>
  );
}

export default Section2;
