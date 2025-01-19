import { Link } from "react-router-dom";
import BackgroundLayout from "@/layouts/common/BackgroundLayout";

const NotFound = () => {
  return (
    <BackgroundLayout>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 z-10">
        <div className="flex flex-col items-center justify-center gap-10 h-96">
          <div className="w-full max-w-80 bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="/404.svg" />
          </div>

          <h2 className="text-gray-800 text-xl font-medium">
            Parece que te has perdido....
          </h2>

          <Link
            to="/"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg 
                       font-medium hover:bg-primary/90 transition-colors text-center"
          >
            Regresar al inicio
          </Link>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default NotFound;
