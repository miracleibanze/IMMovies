import { Link } from "react-router-dom";
import { goUp } from "../Constants";

const Button = ({ className, onClick, children, link, hover, scale }) => {
  const classes = `button relative inline-flex items-center justify-center py-3 cursor-pointer transition-colors  border border-color-1 rounded-md px-4 duration-500 dark:text-slate-900 group ${
    className && ""
  } ${
    hover
      ? "bg-transparent border-none hover:bg-color-1"
      : "bg-color-1 text-slate-100 "
  } ${scale && "hover:scale-[1.1] duration-200"}`;

  const spanClasses = `relative flex gap-2 items-center dark:text-slate-100 duration-200 ${
    hover
      ? "group-hover:text-slate-100 text-color-t dark:text-blue-300"
      : "text-slate-100"
  }`;

  const renderButton = () => (
    <Link to={link} onClick={goUp}>
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
      </button>
    </Link>
  );

  const renderTop = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  return link ? renderButton() : renderTop();
};

export default Button;
