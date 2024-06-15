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
  component: JSX.Element;
}

const CompsPage: React.FC = () => {
  const [components, setComponents] = useState<ComponentInfo[]>([
    { id: 1, component: <ListComponent1 onDelete={() => handleDelete(1)} /> },
    { id: 2, component: <ListComponent2 onDelete={() => handleDelete(2)} /> },
    { id: 3, component: <ListComponent3 onDelete={() => handleDelete(3)} /> },
    { id: 4, component: <ListComponent4 onDelete={() => handleDelete(4)} /> },
    { id: 5, component: <ListComponent5 onDelete={() => handleDelete(5)} /> },
    { id: 6, component: <ListComponent6 onDelete={() => handleDelete(6)} /> },
    { id: 7, component: <ListComponent6 onDelete={() => handleDelete(6)} /> },
    { id: 8, component: <ListComponent6 onDelete={() => handleDelete(6)} /> },
    { id: 9, component: <ListComponent6 onDelete={() => handleDelete(6)} /> },
    { id: 10, component: <ListComponent6 onDelete={() => handleDelete(6)} /> },
    { id: 11, component: <ListComponent6 onDelete={() => handleDelete(6)} /> },
    { id: 12, component: <ListComponent6 onDelete={() => handleDelete(6)} /> },
    // Buraya kadar olan örneklerin sayısını ihtiyacınıza göre arttırabilirsiniz
  ]);
  const handleDelete = (id: number) => {
    const updatedComponents = components.filter((comp) => comp.id !== id);
    setComponents(updatedComponents);
    // console.log(`Deleting component with ID: ${id}`);
  };
  return (
    <div className="md:min-w-screen flex h-[670px] w-[1096px] items-center justify-center ">
      <div className="flex h-[632px] w-[1056px]">
        <div className="flex h-[632px] w-[1056px] rounded-[24px] bg-compName-gray">
          <div className="absolute -mt-10 ml-[42px] h-4 w-[61px] transition duration-300 ease-in-out">
            <NameComponent />
            {/* <div className="h-4 w-[51px] gap-2">
              <p className="h-4 w-[33px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Name
              </p>
            </div> */}
          </div>
          <div className="absolute ml-[320px] mt-4 h-4 w-[61px]  transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Champions
              </p>
            </div>
          </div>
          <div className="absolute -mt-10 ml-[552px] h-4 w-[61px]  transition duration-300 ease-in-out">
            <Gamestyles />
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
                {/* <div
                className="fixed ml-[1004px] mt-1 flex h-[250px] w-1 overflow-y-auto rounded-[200px] bg-delete-gray"
              ></div> */}
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
