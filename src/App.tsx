import Navbar from "./app/Navbar";
import Homepage from "./app/home/Homepage";

function App() {
  return (
    <main className="max-w-1xl max-h-1xl fixed h-full w-full bg-black">
      <Navbar />
      <div className="items-center justify-center">
        <Homepage />
      </div>
    </main>
  );
}

export default App;
