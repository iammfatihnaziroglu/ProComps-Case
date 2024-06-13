import { useState } from "react";
import SectionLabel from "./utilities/SectionLabel";

function Homepage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const showModal = () => {
    setIsPopupVisible(true);
  };

  return (
    <main className="min-w-screen flex min-h-screen items-center justify-center">
      <SectionLabel />
    </main>
  );
}

export default Homepage;
