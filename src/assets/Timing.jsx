import React from "react";
import AppBar from "./AppBar";
import BackButton from "./BackButton";
import DateAndTime from "./DateAndTime";


function Timing() {
  return (
    <div className="flex flex-col">
      <AppBar />
      <BackButton />
      <div className="flex flex-col justify-center items-center p-24 gap-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue-600 font-extrabold">ریکت</h1>
          <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className="rounded-full border-sky-300 blue1 text-white border-4 w-96 h-96 flex justify-center items-center flex-col gap-6">
          <span className="text-8xl font-bold"> <DateAndTime type="time" /></span>
          <span className="text-3xl font-extralight">13:30</span>
        </div>
        <button
          className="blue1 hover:blue2 hover:blue1 text-white p-2 rounded-full hover:bg-sky-950 w-32"
        >
          شروع
        </button>
      </div>
    </div>
  );
}

export default Timing;
