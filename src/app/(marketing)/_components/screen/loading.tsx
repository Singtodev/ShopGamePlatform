import ReactLoading from "react-loading";
export const LoadingPage = () => {
  return (
    <div className="absolute bg-slate-5000 w-full h-full flex justify-center items-center">
      <ReactLoading
        type={"bubbles"}
        color={"#ff9500"}
        height={100}
        width={100}
      />
    </div>
  );
};
