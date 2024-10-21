import React from "react";
import { MdEmail } from "react-icons/md";
import book8 from "../../public/book8.png";

function BannerSection() {
  return (
    <>
      <div className=" font-[poppins]  max-w-screen-xl container mx-auto md:px-10 px-4  flex flex-col items-center mt-[40px] md:flex-row  md:mt-1 md:h-[550px]  ">
        {/* left div */}
        <div className="w-full md:w-1/2 space-y-8 ">
          <h1 className="text-3xl font-bold">
            HELLO, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!!</span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            nulla reprehenderit voluptates non veniam, earum eligendi optio
            obcaecati nostrum delectus labore voluptatibus, aliquid, atque illum
            asperiores consectetur quam aperiam recusandae.
          </p>
          <div className="flex items-center relative">
            <MdEmail className="text-4xl absolute  " />
            <input
              type="email"
              placeholder="Enter email here"
              className="border-2 w-full rounded-lg px-[40px] py-2 outline-none"
            />
          </div>
          <button className="bg-blue-700 px-8 py-4 rounded-md text-white ">
            HELLO
          </button>
        </div>
        {/* Right div */}
        <div className="w-full md:w-1/2  mt-12 md:ml-[28px]">
          <img className="" src={book8} alt="" />
        </div>
      </div>
      <div className="font-[poppins]  max-w-screen-xl container mx-auto md:px-10 px-4  mt-[1px] ">
        <h2 className="text-xl font-bold">Free Offered Courses</h2>
        <p className="text-[17px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          delectus deleniti, ipsum, ad eos dolor, error reprehenderit dolorem
          sunt impedit voluptatem ab doloremque quod unde eum cupiditate saepe
          laboriosam commodi.
        </p>
      </div>
    </>
  );
}

export default BannerSection;

// <h1 className="text-2xl font-bold">
//             HELLO, welcomes here to learn something{" "}
//             <span className="text-pink-500">new everyday!!!!</span>
//           </h1>
//           <p className="text-xl">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
//             nulla reprehenderit voluptates non veniam, earum eligendi optio
//             obcaecati nostrum delectus labore voluptatibus, aliquid, atque illum
//             asperiores consectetur quam aperiam recusandae.
//           </p>
//           <div className="flex items-center relative">
//             <MdEmail className="text-4xl absolute  " />
//             <input
//               type="email"
//               placeholder="Enter email here"
//               className="border-2 w-full rounded-lg px-[40px] py-2 outline-none"
//             />
//           </div>
//           <button className="bg-blue-700 px-8 py-4 rounded-md text-white ">
//             HELLO
//           </button>
