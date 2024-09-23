const Title = ({ content, span, text }) => {
  return (
    <div className="w-full h-auto my-4 flex items-center justify-center flex-col">
      <h1 className="h1 font-bold">{content}</h1>
      <div className="flex items-center">
        <span className="text-color-1 font-bold">{span}</span>&nbsp;
        {text}
      </div>
    </div>
  );
};

export default Title;
