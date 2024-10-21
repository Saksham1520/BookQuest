import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <div className=" border-2 font-[poppins] max-w-screen-xl container mx-auto md:px-10 px-4 mt-8">
      <div className="">
        <h1 className="font-extrabold  text-[30px] w-[80%] m-auto md:w-[70%] lg:w-[50%]">
          W're Delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-[50px] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          possimus. Recusandae voluptatem, non aspernatur consequatur rerum
          reiciendis. Vitae ipsam molestias deserunt quia natus, reiciendis
          impedit debitis labore quas non laudantium! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero magni explicabo, architecto
          voluptatibus est fuga molestias reprehenderit ipsa rerum autem
          voluptatum et repellat. Libero, dolore.
        </p>
        <div className=" text-[20px]  text-center w-[100%] m-auto md:w-[70%] lg:w-[50%]">
          <Link to="/">
            <button className="border-2 bg-pink-500 rounded-lg px-4 py-2 text-white hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className=" flex items-center justify-center flex-wrap gap-[50px]">
          {list.map((items) => (
            <Cards key={items.id} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
