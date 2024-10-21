import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import Book9 from "../../public/Book9.jpg";

function FreeBookCarousel() {
  const filteredData = list.filter((item) => item.category === "Free");

  return (
    <>
      <div className="font-[poppins] max-w-screen-xl  container mx-auto md:px-10 px-4 mt-8  ">
        <div className=" relative    ">
          <div className="absolute top-[50%]">
            <button className="bg-black rounded-2xl text-white ">
              <IoIosArrowDropleft size={35}></IoIosArrowDropleft>
            </button>
          </div>
          <div className="absolute top-[50%] right-0">
            <button className="bg-black rounded-2xl text-white ">
              <IoIosArrowDropright size={35}></IoIosArrowDropright>
            </button>
          </div>

          <div className="flex  items-center overflow-hidden gap-4   ">
            {filteredData.map((items) => {
              return <Cards items={items} key={items.id}></Cards>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBookCarousel;

// <div className="h-[500px] ">
//           <div className="grid grid-cols-1 md:grid-cols-2 md:grid md:gap-20 lg:grid lg:grid-cols-3 overflow-hidden h-[516px] mx-6">
//             <Cards></Cards>
//             <Cards></Cards>
//             <Cards></Cards>
//             <Cards></Cards>
//           </div>
//           <div className="   ">
//             <button>
//               <IoIosArrowDropleft />
//             </button>
//             <button>
//               <IoIosArrowDropright />{" "}
//             </button>
//           </div>
//         </div>
