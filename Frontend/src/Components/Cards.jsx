import React from "react";

import Book9 from "../../public/Book9.jpg";

function Cards({ items }) {
  return (
    <>
      <div className="max-w-[310px] min-w-[300px] shadow-xl space-y-2 mt-[25px] rounded-lg border-2 hover:scale-105 duration-200 ">
        <div className="">
          <img src={Book9} alt="" className="w-[310px] h-[237px]" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 ml-2">
            <h1>{items.name}</h1>
            <span className="bg-pink-500 text-white rounded-lg px-2">Free</span>
          </div>
          <p className="ml-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, illum.
          </p>
        </div>
        <div className="flex items-centere justify-between mx-2">
          <div className="border-2 px-4 rounded-[12px] font-bold">
            {items.price}
          </div>
          <div className="border-2 px-2 rounded-[12px] font-bold ">Buy Now</div>
        </div>
      </div>
    </>
  );
}

export default Cards;
