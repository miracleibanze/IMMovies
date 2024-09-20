import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative body-2">
        <h4 className="h4">
          <span className="text-red-500">Error!</span> Page not found.
        </h4>
        <p>
          Link provided not found, Please try other pages or{" "}
          <Link to={"/"}>
            <u>go back to Home</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
