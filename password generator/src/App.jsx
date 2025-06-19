import { useEffect, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [length, setLength] = useState(0);

  const generateRandomPassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += '0123456789'
    if(characterAllowed) str += '!@#$%^&()*{}[]'
    for(let index = 1; index <= length; index++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);

    }
    setPassword(pass)
  };
  useEffect(() => {
    generateRandomPassword()
  },[length, characterAllowed, numberAllowed])

  return (
    <div className="max-w-md bg-gray-500 mx-auto my-7 rounded-md text-purple-700 px-4 py-2">
      <h1 className="text-center text-white font-bold text-2xl mb-5">
        Password generator
      </h1>
      <div className="flex rounded-lg shadow">
        <input
          value={password}
          readOnly
          type="text"
          placeholder="password"
          className="w-full py-3 px-2 outline-none text-white"
        />
        <button className="bg-sky-400 text-white px-3 py-1 rounded-md">
          Copy
        </button>
      </div>
      <div className="flex justify-between items-center gap-x-4 mt-5">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            min={8}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-white" htmlFor="rangeValue">
            Length {length}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label className="text-white" htmlFor="numberAllowed">
            number
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={numberAllowed}
            onChange={() => setCharacterAllowed(prev => !prev)}
          />
          <label className="text-white" htmlFor="characterAllowed">
            Character
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
