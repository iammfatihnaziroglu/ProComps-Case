import React, { useState } from "react";
import ListComponent1 from "./base-components/ListComponents/ListComponent1";
import ListComponent2 from "./base-components/ListComponents/ListComponent2";
import ListComponent3 from "./base-components/ListComponents/ListComponent3";
import ListComponent4 from "./base-components/ListComponents/ListComponent4";
import ListComponent5 from "./base-components/ListComponents/ListComponent5";
import ListComponent6 from "./base-components/ListComponents/ListComponent6";
import NameComponent from "./modules/NameModule";
import Gamestyles from "./modules/GamestyleModule";
import AddedStyle from "./modules/Added";
import PopUp from "./modules/Pop-Up";
import EngageIcon from "../../utilities/icons/png/engage.png";
import PickIcon from "../../utilities/icons/png/pick.png";
import SplitIcon from "../../utilities/icons/png/split.png";
import SiegeIcon from "../../utilities/icons/png/siege.png";
import ProtectIcon from "../../utilities/icons/png/protect.png";

interface ComponentInfo {
  id: number;
  name: string;
  gamestyle: {
    name: string;
    icon: string;
  };
  component: JSX.Element;
}

const CompsPage: React.FC = () => {
  const [components, setComponents] = useState<ComponentInfo[]>([
    {
      id: 1,
      name: "Protect Ashe(Late)",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent1 />,
    },
    {
      id: 2,
      name: "Crush the enemy early",
      gamestyle: { name: "Engage", icon: EngageIcon },
      component: <ListComponent2 />,
    },
    {
      id: 3,
      name: "Favorite comp for scaling into the late game",
      gamestyle: { name: "Siege", icon: SiegeIcon },
      component: <ListComponent3 />,
    },
    {
      id: 4,
      name: "CompName Example 1",
      gamestyle: { name: "Pick", icon: PickIcon },
      component: <ListComponent4 />,
    },
    {
      id: 5,
      name: "CompName Example 2",
      gamestyle: { name: "Split", icon: SplitIcon },
      component: <ListComponent5 />,
    },
    {
      id: 6,
      name: "CompName Example Win",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent6 />,
    },
    {
      id: 7,
      name: "CompName Example Win",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent6 />,
    },
    {
      id: 8,
      name: "CompName Example Win",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent6 />,
    },
    {
      id: 9,
      name: "CompName Example Win",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent6 />,
    },
    {
      id: 10,
      name: "CompName Example Win",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent6 />,
    },
    {
      id: 11,
      name: "CompName Example Win",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent6 />,
    },
    {
      id: 12,
      name: "CompName Example Win",
      gamestyle: { name: "Protect", icon: ProtectIcon },
      component: <ListComponent6 />,
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [selectedGamestyle, setSelectedGamestyle] = useState<
    | {
        name: string;
        icon: string;
      }
    | any
  >(null);

  const handleDelete = (id: number) => {
    const updatedComponents = components.filter((comp) => comp.id !== id);
    setComponents(updatedComponents);
  };

  const handleComponentClick = (
    name: string,
    gamestyle: { name: string; icon: string },
  ) => {
    setSelectedName(name);
    setSelectedGamestyle(gamestyle);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNameSortClick = (clickCount: number) => {
    let sortedComponents = [...components];

    if (clickCount === 1) {
      // A-Z sıralama
      sortedComponents.sort((a, b) => a.name.localeCompare(b.name));
    } else if (clickCount === 2) {
      // Z-A sıralama
      sortedComponents.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // Varsayılan sıralama
      sortedComponents = sortedComponents.sort((a, b) => a.id - b.id);
    }

    setComponents(sortedComponents);
  };

  const handleGameSortClick = (clickCount: number) => {
    let sortedComponents = [...components];

    if (clickCount === 1) {
      // A-Z sıralama
      sortedComponents.sort((a, b) =>
        a.gamestyle.name.localeCompare(b.gamestyle.name),
      );
    } else if (clickCount === 2) {
      // Z-A sıralama
      sortedComponents.sort((a, b) =>
        b.gamestyle.name.localeCompare(a.gamestyle.name),
      );
    } else {
      // Varsayılan sıralama
      sortedComponents = sortedComponents.sort((a, b) => a.id - b.id);
    }

    setComponents(sortedComponents);
  };

  return (
    <div className="flex h-[670px] w-[1096px] flex-col items-center justify-center ">
      <div className="flex h-[632px] w-[1056px]">
        <div className="flex h-[632px] w-[1056px] rounded-[24px] bg-compName-gray">
          <div className="absolute -mt-10 ml-[42px] h-4 w-[61px] transition duration-300 ease-in-out">
            <NameComponent onClick={handleNameSortClick} />
          </div>
          <div className="absolute ml-[320px] mt-4 h-4 w-[61px] transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Champions
              </p>
            </div>
          </div>
          <div className="absolute -mt-10 ml-[552px] h-4 w-[61px] transition duration-300 ease-in-out">
            <Gamestyles onClick={handleGameSortClick} />
          </div>
          <div className="absolute ml-[672px] mt-4 h-4 w-[61px] transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Scaling
              </p>
            </div>
          </div>
          <div className="absolute -mt-10 ml-[776px] h-4 w-[61px] transition duration-300 ease-in-out">
            <AddedStyle />
          </div>
          <div className="ml-8 mt-12 flex h-[552px] max-h-[552px] w-[1008px] flex-col items-start">
            <div className="flex h-[552px] w-[1008px] flex-col gap-8 ">
              <div className="flex h-full overflow-y-auto">
                <div className="flex h-[944px] w-[976px] flex-col gap-4">
                  {components.map((comp) => (
                    <div
                      key={comp.id}
                      className="group relative"
                      onMouseEnter={() => setIsDeleteHovered(true)}
                      onMouseLeave={() => setIsDeleteHovered(false)}
                      onClick={() =>
                        handleComponentClick(comp.name, comp.gamestyle)
                      }
                    >
                      {comp.component}
                      <div
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className={`absolute right-0 top-0 mb-20 hidden group-hover:block ${
                          isDeleteHovered ? "block" : "hidden"
                        }`}
                      >
                        <div className="absolute -right-[10px] top-[28px]">
                          <div
                            id="red"
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-delete-border bg-delete-gray hover:bg-delete-red"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(comp.id);
                            }}
                          >
                            <div
                              id="white"
                              className={`h-[1.13px] w-[9px] rounded-lg bg-scaling-gray ${
                                isButtonHovered
                                  ? "bg-scaling-white"
                                  : "bg-scaling-gray"
                              }`}
                              // className="hover:bg-delete-white h-[1.13px] w-[9px] rounded-lg bg-scaling-gray"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="fixed flex items-center justify-center">
                  {showPopup && (
                    <PopUp
                      name={selectedName}
                      gamestyle={selectedGamestyle}
                      onClose={handleClosePopup}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompsPage;
