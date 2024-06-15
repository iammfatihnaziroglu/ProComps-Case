import CompsPage from "../components/CompsPage";
import SolarTshirt from "../../utilities/icons/png/solar_t-shirt-bold.png";

function Homepage() {
  return (
    <main className="min-w-screen flex min-h-screen items-center justify-center ">
      <div className="flex h-[846px] w-[1136px] flex-col items-center justify-center rounded-[20px]">
        <div className="flex h-[776px] w-[1056px] flex-col items-center justify-center gap-8">
          <div className="flex h-[30px] w-[267px] flex-row items-center justify-center gap-2 ">
            <img src={SolarTshirt} alt="Solar Tshirt" className="h-6 w-6" />
            <p className="h-[30px] w-[235px] font-unbounded text-[20px] font-medium leading-7 text-white">
              Team
            </p>
            <p className="h-[30px] w-[235px] font-unbounded text-[20px] font-light leading-7 text-white">
              Compositions
            </p>
          </div>
          <CompsPage />
        </div>
      </div>
    </main>
  );
}

export default Homepage;
