import { memo, useEffect, useState } from "react";
import { blogs, randomMovies } from "./Constants";
import Overlay from "./design/Overlay";
import Section from "./design/Section";
import Heading from "./design/Heading";
import { useNavigate, useParams } from "react-router-dom";

const Trending = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex place-content-center bg-slate-200">
        <div className="relative grid grid-cols-2 gap-2 max-w-sm items.center min-w-[700px]">
          <div
            className={`body-2 font-normal h-full w-full  p-4 text-color-t duration-200 hover:bg-slate-300 flex place-content-center`}
            onClick={() => navigate("/trending/box-office")}
          >
            Box office
          </div>
          <div
            className={`body-2 font-normal text-color-t h-full p-4 w-full duration-200 hover:bg-slate-300 flex place-content-center`}
            onClick={() => navigate("/trending/blog")}
          >
            Blog
          </div>
        </div>
      </div>
      <Section
        id="boxOffice"
        className={`${type === "box-office" ? "flex" : "hidden"}`}
      >
        <Heading title="Box office" />
        <div className="flex items-center justify-start gap-3 flex-wrap overflow-x-hidden w-full mt-4">
          {randomMovies.map((item) => (
            <div
              className="relative w-[15rem] h-[20rem] flex border bg-cover items-center justify-center bg-center font-medium shadow-black shadow-md group"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              key={item.id}
            >
              <Overlay name={item.name} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="blog" className={`${type === "blog" ? "flex" : "hidden"}`}>
        <Heading title="Our Blog" />
        <div className="container relative flex flex-wrap items-center justify-start gap-4 px-2 py-4">
          {blogs.map((item) => (
            <div
              className="relative flex flex-col items-start justify-between w-[18rem] h-[24rem] p-2 border shadow-lg shadow-black"
              key={item.id}
            >
              <div
                className="w-full h-[10rem] border bg-cover bg-center"
                style={{ backgroundImage: `url(${item.bgUrl})` }}
              />
              <div className="relative flex-1 pt-2">
                <h6 className="h6 font-bold">{item.title}</h6>
                <p className="body-2 text-color-t font-semibold">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src={item.avatar}
                  alt="commenter"
                  className="w-12 aspect-square rounded-full border object-cover object-center"
                />
                <div className="relative flex-1 body-1">
                  <div className="font-semibold flex flex-col leading-5">
                    {item.commenter}
                    <span className="text-[70%] font-extralight">
                      {item.commenterAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default memo(Trending);
