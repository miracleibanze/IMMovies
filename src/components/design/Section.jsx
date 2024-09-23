const Section = ({ className, color, id, style, children, noPadding }) => {
  return (
    <div
      id={id}
      className={`relative py-12 flex flex-col flex-1 items-center text-start -z-1  ${className}    ${
        color ? "bg-gray-300" : "bg-gray-200"
      } ${!noPadding ? "px-[4rem] max-md:px-[2rem]" : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Section;
