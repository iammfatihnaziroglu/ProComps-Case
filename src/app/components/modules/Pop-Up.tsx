import React from "react";

interface PopUpProps {
  name: string;
  gamestyle: string;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ name, gamestyle, onClose }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
      <div
        className="absolute h-full w-full bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="z-10 rounded-lg bg-white p-4 shadow-lg">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{gamestyle}</p>
        </div>
        <button
          className="rounded bg-gray-300 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUp;

// const [showPopup, setShowPopup] = useState(false);

// const handleComponentClick = (name: string, gamestyle: string) => {
//   setSelectedName(name);
//   setSelectedGamestyle(gamestyle);
//   setShowPopup(true);
// };

// const handleClosePopup = () => {
//   setShowPopup(false);
// };

// return sonrası aşağısı

// {components.map((comp) => (
//   <div
//     key={comp.id}
//     className="w-1/2 cursor-pointer p-2"
//     onClick={() =>
//       handleComponentClick(comp.name, comp.gamestyle)
//     }
//   >
//     <div className="rounded-lg bg-white p-4 shadow">
//       <h2 className="text-lg font-semibold">{comp.name}</h2>
//       <p className="text-sm text-gray-600">{comp.gamestyle}</p>
//     </div>
//   </div>
// ))}

// {showPopup && (
//   <PopUp
//     name={selectedName}
//     gamestyle={selectedGamestyle}
//     onClose={handleClosePopup}
//   />
// )}
