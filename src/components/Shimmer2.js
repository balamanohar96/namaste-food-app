import React from "react";

function Shimmer2() {
  return (
    <div className="py-20 p-4 md:w-1/2 m-auto">
      <div className="w-40 h-3  bg-slate-100 mb-2"></div>
      <div className="flex gap-3 ">
        {/* start */}
        <div className="mr-4">
          <div className="w-80 h-52  bg-slate-200 my-4"></div>
          <div className="w-40 h-2  bg-slate-100 mb-2"></div>
          <div className="flex justify-between">
            <div>
              <div className="w-16 h-2  bg-slate-100 mb-2"></div>
              <div className="w-10 h-2  bg-slate-100 mb-2"></div>
            </div>
            <div>
              <div className="w-12 h-4  bg-slate-200 mb-2"></div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="hidden md:block mr-4">
          <div className="w-80 h-52  bg-slate-200 my-4"></div>
          <div className="w-40 h-2  bg-slate-100 mb-2"></div>
          <div className="flex justify-between">
            <div>
              <div className="w-16 h-2  bg-slate-100 mb-2"></div>
              <div className="w-10 h-2  bg-slate-100 mb-2"></div>
            </div>
            <div>
              <div className="w-12 h-4  bg-slate-200 mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer2;
