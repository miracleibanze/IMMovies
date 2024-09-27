import { memo } from "react";

const Title = ({ content, span, text }) => {
  return (
    <div className="w-full h-auto my-4 flex items-center justify-center flex-col capitalize">
      <h1 className="h1 font-bold dark:text-slate-100">{content}</h1>
      <div className="flex items-center dark:text-slate-100/50">
        <span className="text-color-1 font-bold">{span}</span>
        &nbsp;
        {text}
      </div>
    </div>
  );
};

export default memo(Title);
