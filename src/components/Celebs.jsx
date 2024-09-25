import { memo } from "react";
import Section from "./design/Section";
import Heading from "./design/Heading";
import { movieStars } from "./Constants";
import Button from "./design/Button";

const Celebs = () => {
  return (
    <>
      <Section id="movieStars" color>
        <Heading title="Our Stars" color />
        <div className="container relative mt-4 flex items-center justify-center flex-wrap gap-4 ">
          {movieStars.map((item) => (
            <div
              className="relative h-auto flex flex-col items-center justify-between"
              key={item.id}
            >
              <img
                src={item.avatar}
                alt="avatar"
                className="min-w-[10rem] max-w-[10rem] h-[15rem] rounded-3xl border object-cover object-center"
              />
              <p className="body-2 font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default memo(Celebs);
