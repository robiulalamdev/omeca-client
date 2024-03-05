import React from "react";
import ReactDOM from "react-dom";
const Test = () => {
  const jsxCode = {
    data: (
      <div className="bg-red-600">
        <h1>Hello, World!</h1>
        <p>This is JSX rendered from a variable.</p>
      </div>
    ),
  };

  return (
    <div className="bg-teal-50 rounded-[10px] p-2 w-fit mx-auto">
      <p className="text-base text-blue-600 font-bold text-center uppercase tracking-[0.90px]">
        Form Data
      </p>
      <p className="text-sm text-slate-900 font-medium break-words">
        How are you Currently doing this
      </p>
      <p className="text-sm text-slate-900 font-medium break-words mt-2">
        How are you Currently doing this
      </p>
      <p className="text-sm text-slate-900 font-medium break-words mt-2">
        How are you Currently doing this
      </p>
      <p className="text-sm text-slate-900 font-medium break-words mt-2">
        How are you Currently doing this
      </p>
      <p className="text-sm text-slate-900 font-medium break-words mt-2">
        How are you Currently doing this
      </p>
    </div>
  );
};

export default Test;
