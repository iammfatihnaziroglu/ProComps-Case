import Navbar from "./app/Navbar";
import Homepage from "./app/home/Homepage";

function App() {
  return (
    <main className="max-w-1xl max-h-1xl flex min-h-screen w-full flex-col bg-black">
      <div className="fixed">
        <Navbar />
      </div>
      <div className="flex items-center justify-center overflow-y-auto">
        <Homepage />
      </div>
    </main>
  );
}

export default App;
