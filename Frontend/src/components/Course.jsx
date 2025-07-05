import React from "react";
import list from "../../public/list.json";
import Cards from "./cards";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Our free courses are designed to make learning easy and enjoyable!
            From creative storybooks to engaging music reads, you'll find
            everything you need to grow, learn, and have fun at your own pace
            </p>
            <br/>
            <p>
              No logins, no pressure — just pure learning vibes 🌟
            </p>

         
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
