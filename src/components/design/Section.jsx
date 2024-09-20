const Section = ({ className, color, id, style, children }) => {
  return (
    <div
      id={id}
      className={`relative max-lg:mt-4 flex flex-col flex-1 items-center text-start -z-1  ${
        className || "px-[4rem] max-md:px-[2rem] py-10 lg:py-16 xl:py-20 "
      }  ${color ? "bg-gray-300" : "bg-gray-200"} `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Section;
