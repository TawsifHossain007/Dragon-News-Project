import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us On</h1>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 join-item"><Facebook></Facebook> Facebook</button>
          <button className="btn bg-base-100 join-item"><Instagram></Instagram> Instagram</button>
          <button className="btn bg-base-100 join-item"><Twitter></Twitter> Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
