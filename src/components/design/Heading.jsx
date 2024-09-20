const Heading = ({ title, color }) => {
  return (
    <div className="w-full bgLine pb-1">
      <h4
        className={`lg:h4 h5 h-full uppercase ${
          color ? "bg-slate-300" : "bg-slate-200"
        }`}
      >
        {title}
      </h4>
    </div>
  );
};

export default Heading;
