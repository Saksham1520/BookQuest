import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" font-[poppins] max-w-screen-xl container mx-auto md:px-10 px-4   ">
        <nav className="flex justify-between items-center h-14 ">
          <div className=" font-bold text-2xl">BookQuest</div>
          <div className="flex items-center gap-8 ">
            <div
              className={`md:block  font-bold text-[20px] ${
                isOpen ? "block" : "hidden "
              }`}
            >
              <ul className="md:flex md:bg-none bg-white md:flex-row md:justify-center md:items-center md:static md:gap-4  absolute right-[0px] top-[54.5px] w-[200px] h-[250px] md:w-auto md:h-auto flex flex-col gap-6 items-center">
                <li className="mt-4 md:mt-0">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="course">Courses</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="about">About</a>
                </li>
              </ul>
            </div>
            <div className="lg:flex relative hidden  md:mr-[41px] ">
              <input
                className="px-4 py-2 rounded-lg hover:bg-gray-200 border-2  "
                type="text"
                placeholder="Search Here"
              />
              <div className="absolute right-0   mr-2 my-[14px] ">
                <RiSearchLine />
              </div>
            </div>
            <div className="flex items-center gap-4 font-bold ">
              <button className="bg-black text-white px-4 py-2 rounded-md text-[18px]">
                Login
              </button>
              <button onClick={handleClick} className="md:hidden">
                {isOpen ? (
                  <IoMdClose className=" text-[40px]" />
                ) : (
                  <IoMenu className=" text-[40px]" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;

// <div className="h-14 w-full flex justify-between items-center bg-red-600 font-[poppins] ">
//   <div className=" w- border-4">
//     <div className="ml-[20px] md:ml-[80px] font-bold text-[35px] w-auto">
//       BookQuest
//     </div>
//   </div>

//   <div className="flex justify-evenly items-center w-full border-4 ">
//     {/* HOME ABOUT AND other li div */}
//     <div className=" border-2 hidden md:block ">
//       <ul className="md:flex  md:items-center bg-red-500 space-x-6 font-bold  ">
//         <li>
//           <a href="">Home</a>
//         </li>
//         <li>
//           <a href="">Course</a>
//         </li>
//         <li>
//           <a href="">Contact</a>
//         </li>
//         <li>
//           <a href="">About</a>
//         </li>
//       </ul>
//     </div>
//     {/* search div */}
//     <div className="hidden border-2 md:flex md:items-center relative">
//       <input
//         className="px-4 py-2 rounded-lg hover:bg-gray-200"
//         type="text"
//         placeholder="Search"
//       />
//       <RiSearchLine className="absolute right-0 text-2xl mr-2" />
//     </div>
//     {/* login and hamburger div */}
//     <div className="ml-[150px] flex items-center border-2 md:mx-4">
//       <button className="mx-4 border-2 border-gray-500 px-6 py-2 rounded-md ">
//         Login
//       </button>

//       <div className="md:hidden mr-4">
//         <IoMenu />
//       </div>
//     </div>
//   </div>
// </div>;

// -------------------------------------------------------------------

// <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-violet-800">
//         <div className="h-14 flex justify-between items-center border-4 border-gray-950 font-[poppins] px-4 md:px-0 w-[100%] overflow-hidden">
//           <div className="w-full">
//             <div className="ml-[20px] md:ml-[80px] font-bold text-[25px] md:text-[35px]">
//               BookQuest
//             </div>
//           </div>
//           <div className="flex items-center justify-between w-auto md:w-full">
//             {/* Navigation Links - Hidden on small screens */}
//             <div className="hidden md:block">
//               <ul className="md:flex md:items-center space-x-6 font-bold">
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Course</a>
//                 </li>
//                 <li>
//                   <a href="">Contact</a>
//                 </li>
//                 <li>
//                   <a href="">About</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Search Box - Hidden on small screens */}
//             <div className="hidden md:flex items-center relative mx-4">
//               <input
//                 className="px-4 py-2 rounded-lg hover:bg-gray-200 max-w-full"
//                 type="text"
//                 placeholder="Search"
//               />
//               <RiSearchLine className="absolute right-0 text-2xl mr-2" />
//             </div>

//             {/* Login and Hamburger Menu */}
//             <div className="flex items-center ml-4">
//               <button className="mx-4 border-2 border-gray-500 px-4 py-2 rounded-md max-w-full">
//                 Login
//               </button>

//               {/* Hamburger menu for small screens */}
//               <div className="md:hidden">
//                 <IoMenu className="text-black text-3xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
