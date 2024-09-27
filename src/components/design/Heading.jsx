const Heading = ({ title, color }) => {
  return (
    <div className="w-full bgLine pb-1">
      <h4
        className={`lg:h4 h5 h-full uppercase dark:text-slate-100 ${
          color
            ? "bg-slate-300 dark:bg-slate-800"
            : "bg-slate-200 dark:bg-slate-900"
        }`}
      >
        {title}
      </h4>
    </div>
  );
};

export default Heading;
