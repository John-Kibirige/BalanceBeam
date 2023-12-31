import { useEffect, useState } from 'react';
import EuroIcon from './svgs/EuroIcon';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';

import animationPattern from './javascript/animations';
import { onValue, ref, database } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentWindow, changePreviousWindow } from './redux/navbar';
import SignIn from './components/auth/SignIn';
import Splash from './components/Splash';
import { setSignedInUpUser } from './redux/signedInUpUser';
import { setSplashScreen } from './redux/screens';
import Logout from './svgs/Logout';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const { currentWindow, previousWindow } = useSelector((st) => st.navbar);
  const { signInScreen, splashScreen } = useSelector((st) => st.screens);
  const { signedInUpUser } = useSelector((st) => st.signedInUpUser);

  const handleClick = (e) => {
    dispatch(changePreviousWindow(currentWindow));
    dispatch(changeCurrentWindow(e.target.name));
  };

  const [data, setData] = useState({});
  useEffect(() => {
    if (auth.currentUser) {
      onValue(ref(database, 'balance-beam'), (snapshot) => {
        if (snapshot.exists()) {
          const dataRetrieved = snapshot.val() || {};
          setData(dataRetrieved);
        }
      });
    }
  }, [auth.currentUser]);

  // handle logout clicked
  const handleLogOut = () => {
    dispatch(setSignedInUpUser(''));
    dispatch(setSplashScreen(true));
  };

  return (
    <>
      {splashScreen && <Splash />}
      {signInScreen && <SignIn />}
      {signedInUpUser !== '' && (
        <main className="px-4 py-4 text-pink-800 relative">
          <div className="top mb-2 flex justify-between items-center">
            <button
              onClick={handleLogOut}
              className="logout px-2 text-sm py-1 active:scale-105 cursor-pointer border border-slate-100 rounded-full hover:slate-100 transition-all duration-75 shadow-lg"
            >
              <Logout />
            </button>
            <p className="text-sm text-right text-slate-500">
              {signedInUpUser}
            </p>
          </div>
          <div className="nav flex justify-between gap-2 items-center mb-5 font-poppins">
            <div className="buttons w-full relative shadow-md pb">
              <button
                className={`btn w-[33.33%] py-[6px] sm:py-2 lg:py-3 active:bg-pink-300 transition ease-in-out duration-200 tracking-wider   ${
                  currentWindow === 'daily'
                    ? 'bg-pink-300'
                    : 'hover:bg-pink-200'
                }`}
                onClick={handleClick}
                name="daily"
              >
                Daily
              </button>
              <button
                className={`btn w-[33.33%] py-[6px] sm:py-2 lg:py-3 active:bg-pink-300 transition ease-in-out duration-200 tracking-wider  ${
                  currentWindow === 'weekly'
                    ? 'bg-pink-300'
                    : 'hover:bg-pink-200'
                }`}
                onClick={handleClick}
                name="weekly"
              >
                Weekly
              </button>
              <button
                className={`btn w-[33.33%] py-[6px] sm:py-2 lg:py-3 active:bg-pink-300 transition ease-in-out duration-200 tracking-wider  ${
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
      )}
    </>
  );
}

export default App;
