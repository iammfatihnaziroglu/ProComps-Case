import React, { useState } from "react";
import CompsPage from "../components/CompsPage";
import SolarTshirt from "../../utilities/icons/png/solar_t-shirt-bold.png";
import PickIcon from "../../utilities/icons/png/pick-procomps.png";
import SplitIcon from "../../utilities/icons/png/split-procomps.png";
import SiegeIcon from "../../utilities/icons/png/siege-procomps.png";
import EngageIcon from "../../utilities/icons/png/engage-procomps2.png";
import ProtectIcon from "../../utilities/icons/png/protect-procomps.png";

function Homepage() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonId: string) => {
    setActiveButton((prevActiveButton) =>
      prevActiveButton === buttonId ? null : buttonId,
    );
  };

  const isButtonActive = (buttonId: string) => {
    return activeButton === buttonId;
  };

  const getButtonClass = (buttonId: string) => {
    const baseClass =
      "p-[0px, 9.7px, 0px, 9.7px] flex h-10 w-10 items-center justify-center rounded-full border border-compName-gray";
    const activeClass = "bg-procomps_dark bg-opacity-10";
    const defaultClass = "bg-compName-gray hover:bg-delete-border";

    return `${baseClass} ${isButtonActive(buttonId) ? activeClass : defaultClass}`;
  };

  return (
    <main className="flex items-center justify-center md:m-8 md:p-8 ">
      <div className="max-w-screen flex max-h-screen flex-col items-center justify-center rounded-[20px] md:m-20 md:h-full md:w-48">
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
          <div className="flex h-10 w-[393px] flex-row items-center justify-center gap-4 ">
            <p className="h-4 w-[113px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
              Filter by Gamestyles:
            </p>
            <div className="flex h-10 w-[264px] flex-row items-center justify-start gap-4">
              <button
                className={getButtonClass("pick")}
                onClick={() => handleButtonClick("pick")}
              >
                <div
                  id="Pick"
                  className="-ml-[1px] flex h-6 w-6 items-center justify-center"
                >
                  <img
                    src={PickIcon}
                    alt="Pick Procomps Icon"
                    className="h-[16.3px] w-6 "
                  />
                </div>
              </button>
              <button
                className={getButtonClass("siege")}
                onClick={() => handleButtonClick("siege")}
              >
                <div
                  id="Siege"
                  className="ml-[1px] flex h-6 w-6 items-center justify-center"
                >
                  <img
                    src={SiegeIcon}
                    alt="Siege Procomps Icon"
                    className="h-[18px] w-[21px] "
                  />
                </div>
              </button>
              <button
                className={getButtonClass("engage")}
                onClick={() => handleButtonClick("engage")}
              >
                <div
                  id="Engage"
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <img
                    src={EngageIcon}
                    alt="Engage Procomps Icon"
                    className="-ml-[1px] h-[21px] w-[19px] "
                  />
                </div>
              </button>
              <button
                className={getButtonClass("protect")}
                onClick={() => handleButtonClick("protect")}
              >
                <div
                  id="Protect"
                  className="-ml-[1px] flex h-6 w-6 items-center justify-center"
                >
                  <img
                    src={ProtectIcon}
                    alt="Protect Procomps Icon"
                    className="h-6 w-6 "
                  />
                </div>
              </button>
              <button
                className={getButtonClass("split")}
                onClick={() => handleButtonClick("split")}
              >
                <div
                  id="Split"
                  className="-ml-[1px] flex h-6 w-6 items-center justify-center"
                >
                  <img
                    src={SplitIcon}
                    alt="Split Procomps Icon"
                    className="h-[19.26px] w-[21.26px] "
                  />
                </div>
              </button>
            </div>
          </div>
          <CompsPage />
        </div>
      </div>
    </main>
  );
}

export default Homepage;
