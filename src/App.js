import { useState } from "react";


function App() {
  const [color , setColor] = useState("Red")
  return (
    <div className="w-full h-screen " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Red"}}
            onClick={() => {setColor("Red")}}>
              Red
          </button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Brown"}}
            onClick={() => {setColor("Brown")}}>
              Yellow
          </button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Green"}}
            onClick={() => {setColor("Green")}}>
              Green
          </button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Purple"}}
            onClick={() => {setColor("Purple")}}>
              Purple
          </button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Magenta"}}
            onClick={() => {setColor("Magenta")}}>
              Magenta
          </button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Olive"}}
            onClick={() => {setColor("Olive")}}>
              Olive
          </button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Pink"}}
            onClick={() => {setColor("Pink")}}>
              Pink
          </button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Orange"}}
            onClick={() => {setColor("Orange")}}>
              Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
