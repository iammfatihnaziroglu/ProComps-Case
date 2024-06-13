import Navbar from "./components/Navbar";
import Homepage from "./components/home/Homepage";

function App() {
  return (
    <main className="min-w-screen min-h-screen bg-black">
      <Navbar />
      <div className="items-center justify-center">
        <Homepage />
      </div>
    </main>
  );
}

export default App;
