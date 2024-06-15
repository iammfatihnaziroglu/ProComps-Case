import Navbar from "./app/Navbar";
import Homepage from "./app/home/Homepage";

function App() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-black">
      <Navbar />
      <div className="flex flex-grow items-center justify-center overflow-y-auto">
        <Homepage />
      </div>
    </main>
  );
}

export default App;
