import { useState } from 'react';
import EuroIcon from './svgs/EuroIcon';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';

import animationPattern from './javascript/animations';

function App() {
  const [currentWindow, setCurrentWindow] = useState('');
  const [previousWindow, setPreviousWindow] = useState('');
  const handleClick = (e) => {
    setCurrentWindow((prevState) => {
      setPreviousWindow(prevState);
      return e.target.name;
    });
  };

  return (
    <>
      <main className="px-4 py-4 text-pink-800">
        <div className="nav flex justify-between gap-2 items-center ">
          <div className="buttons w-full relative">
            <button
              className={`btn w-[33.33%] py-1 active:bg-pink-300 transition ease-in-out duration-200 ${
                currentWindow === 'daily' ? 'bg-pink-300' : 'hover:bg-pink-200'
              }`}
              onClick={handleClick}
              name="daily"
            >
              Daily
            </button>
            <button
              className={`btn w-[33.33%] py-1 active:bg-pink-300 transition ease-in-out duration-200 ${
                currentWindow === 'weekly' ? 'bg-pink-300' : 'hover:bg-pink-200'
              }`}
              onClick={handleClick}
              name="weekly"
            >
              Weekly
            </button>
            <button
              className={`btn w-[33.33%] py-1 active:bg-pink-300 transition ease-in-out duration-200 ${
                currentWindow === 'monthly'
                  ? 'bg-pink-300'
                  : 'hover:bg-pink-200'
              }`}
              onClick={handleClick}
              name="monthly"
            >
              Monthly
            </button>
            <span
              className={`line w-[33.33%] h-1 bg-pink-800 block absolute ${animationPattern(
                currentWindow,
                previousWindow
              )}`}
            ></span>
          </div>
          <div className="logo">
            <EuroIcon />
          </div>
        </div>

        {currentWindow === 'daily' && <Daily />}
        {currentWindow === 'weekly' && <Weekly />}
        {currentWindow === 'monthly' && <Monthly />}
      </main>
    </>
  );
}

export default App;
