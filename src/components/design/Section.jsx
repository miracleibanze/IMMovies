const Section = ({ className, color, id, style, children, noPadding }) => {
  return (
    <div
      id={id}
      className={`relative flex flex-col flex-1 items-center text-start -z-1 ${className}    ${
        color
          ? "bg-gray-300 dark:bg-slate-800"
          : "bg-gray-200 dark:bg-slate-900"
      } ${!noPadding ? "px-[4rem] max-md:px-[2rem] py-12" : ""}`}
      style={style}
    >
      <div className="max-w-screen-2xl w-full overflow-hidden">{children}</div>
    </div>
  );
};

export default Section;
