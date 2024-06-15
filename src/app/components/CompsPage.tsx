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

interface ComponentInfo {
  id: number;
  name: string;
  gamestyle: string;
  component: JSX.Element;
}

const CompsPage: React.FC = () => {
  const [components, setComponents] = useState<ComponentInfo[]>([
    {
      id: 1,
      name: "Protect Ashe(Late)",
      gamestyle: "Protect",
      component: <ListComponent1 onDelete={() => handleDelete(1)} />,
    },
    {
      id: 2,
      name: "Crush the enemy early",
      gamestyle: "Engage",
      component: <ListComponent2 onDelete={() => handleDelete(2)} />,
    },
    {
      id: 3,
      name: "Favorite comp for scaling into the late game",
      gamestyle: "Siege",
      component: <ListComponent3 onDelete={() => handleDelete(3)} />,
    },
    {
      id: 4,
      name: "CompName Example 1",
      gamestyle: "Pick",
      component: <ListComponent4 onDelete={() => handleDelete(4)} />,
    },
    {
      id: 5,
      name: "CompName Example 2",
      gamestyle: "Split",
      component: <ListComponent5 onDelete={() => handleDelete(5)} />,
    },
    {
      id: 6,
      name: "CompName Example Win",
      gamestyle: "Protect",
      component: <ListComponent6 onDelete={() => handleDelete(6)} />,
    },
    {
      id: 7,
      name: "CompName Example Win",
      gamestyle: "Protect",
      component: <ListComponent6 onDelete={() => handleDelete(7)} />,
    },
    {
      id: 8,
      name: "CompName Example Win",
      gamestyle: "Protect",
      component: <ListComponent6 onDelete={() => handleDelete(8)} />,
    },
    {
      id: 9,
      name: "CompName Example Win",
      gamestyle: "Protect",
      component: <ListComponent6 onDelete={() => handleDelete(9)} />,
    },
    {
      id: 10,
      name: "CompName Example Win",
      gamestyle: "Protect",
      component: <ListComponent6 onDelete={() => handleDelete(10)} />,
    },
    {
      id: 11,
      name: "CompName Example Win",
      gamestyle: "Protect",
      component: <ListComponent6 onDelete={() => handleDelete(11)} />,
    },
    {
      id: 12,
      name: "CompName Example Win",
      gamestyle: "Protect",
      component: <ListComponent6 onDelete={() => handleDelete(12)} />,
    },
  ]);

  const handleDelete = (id: number) => {
    const updatedComponents = components.filter((comp) => comp.id !== id);
    setComponents(updatedComponents);
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
      sortedComponents.sort((a, b) => a.gamestyle.localeCompare(b.gamestyle));
    } else if (clickCount === 2) {
      // Z-A sıralama
      sortedComponents.sort((a, b) => b.gamestyle.localeCompare(a.gamestyle));
    } else {
      // Varsayılan sıralama
      sortedComponents = sortedComponents.sort((a, b) => a.id - b.id);
    }

    setComponents(sortedComponents);
  };

  return (
    <div className="md:min-w-screen flex h-[670px] w-[1096px] items-center justify-center ">
      <div className="flex h-[632px] w-[1056px]">
        <div className="flex h-[632px] w-[1056px] rounded-[24px] bg-compName-gray">
          <div className="absolute -mt-10 ml-[42px] h-4 w-[61px] transition duration-300 ease-in-out">
            <NameComponent onClick={handleNameSortClick} />
          </div>
          <div className="absolute ml-[320px] mt-4 h-4 w-[61px]  transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Champions
              </p>
            </div>
          </div>
          <div className="absolute -mt-10 ml-[552px] h-4 w-[61px]  transition duration-300 ease-in-out">
            <Gamestyles onClick={handleGameSortClick} />
          </div>
          <div className="absolute ml-[672px] mt-4 h-4 w-[61px]  transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Scaling
              </p>
            </div>
          </div>
          <div className="absolute -mt-10 ml-[776px] h-4 w-[61px]  transition duration-300 ease-in-out">
            <AddedStyle />
          </div>
          <div className="ml-8 mt-12 flex h-[552px] max-h-[552px] w-[1008px] flex-col items-start">
            <div className="flex h-[552px] w-[1008px] flex-col gap-8 ">
              <div className="flex h-full overflow-y-auto">
                <div className="flex h-[944px] w-[976px] flex-col gap-4">
                  {components.map((comp) => (
                    <div key={comp.id}>{comp.component}</div>
                  ))}
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
