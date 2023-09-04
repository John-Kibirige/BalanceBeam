import { useEffect, useState } from 'react';
import EuroIcon from './svgs/EuroIcon';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';

import animationPattern from './javascript/animations';
import { onValue, ref, database } from '../firebasae';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentWindow, changePreviousWindow } from './redux/navbar';

function App() {
  const dispatch = useDispatch();
  const { currentWindow, previousWindow } = useSelector((st) => st.navbar);

  const handleClick = (e) => {
    dispatch(changePreviousWindow(currentWindow));
    dispatch(changeCurrentWindow(e.target.name));
  };

  const [data, setData] = useState({});
  useEffect(() => {
    onValue(ref(database, 'balance-beam'), (snapshot) => {
      if (snapshot.exists()) {
        const dataRetrieved = snapshot.val() || {};
        setData(dataRetrieved);
      }
    });
  }, []);

  return (
    <>
      <main className="px-4 py-4 text-pink-800 relative">
        <div className="nav flex justify-between gap-2 items-center mb-5 font-poppins">
          <div className="buttons w-full relative shadow-md pb">
            <button
              className={`btn w-[33.33%] py-[6px] active:bg-pink-300 transition ease-in-out duration-200 tracking-wider  ${
                currentWindow === 'daily' ? 'bg-pink-300' : 'hover:bg-pink-200'
              }`}
              onClick={handleClick}
              name="daily"
            >
              Daily
            </button>
            <button
              className={`btn w-[33.33%] py-[6px] active:bg-pink-300 transition ease-in-out duration-200 tracking-wider ${
                currentWindow === 'weekly' ? 'bg-pink-300' : 'hover:bg-pink-200'
              }`}
              onClick={handleClick}
              name="weekly"
            >
              Weekly
            </button>
            <button
              className={`btn w-[33.33%] py-[6px] active:bg-pink-300 transition ease-in-out duration-200 tracking-wider ${
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

        {currentWindow === 'daily' && <Daily data={data} />}
        {currentWindow === 'weekly' && <Weekly data={data} />}
        {currentWindow === 'monthly' && <Monthly data={data} />}
      </main>
    </>
  );
}

export default App;
