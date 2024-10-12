import { useNavigate } from "react-router-dom";
import Button from "./components/utility/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto pt-20 pb-[140px] font-poppins">
      {/* Not Found */}
      <div className="flex flex-col justify-center items-center gap-10 pt-[140px]">
        <h1 className="font-medium font-inter text-4xl sm:text-6xl md:text-7xl xl:text-[6.875rem] text-text-3">
          404 Not Found
        </h1>
        <p className="font-normal text-xs  sm:text-base text-text-3">
          Your visited page not found. You may go home page.
        </p>
        <Button onClick={() => navigate("/")}>Back to home page</Button>
      </div>
    </div>
  );
}
