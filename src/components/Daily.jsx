import AddIcon from '../svgs/Add';
import Form from './Form';
import BusinessCard from './BusinessCard';
import { categorizeData } from '../javascript/data';
import { getTodayDate } from '../javascript/date';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFormDisplay } from '../redux/popup';
import { v4 as randomId } from 'uuid';

const Daily = ({ data }) => {
  const { formDialog } = useSelector((st) => st.popup);
  const { deleteDialog } = useSelector((st) => st.delete);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFormDisplay());

    setTimeout(() => {
      const formElement = document.getElementById('form-id');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };
  return (
    <section>
      <h1 className=" font-semibold text-lg text-center font-poppins mb-3">
        Today's balancing
      </h1>
      <div className="article mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-6 gap-8 md:gap-4">
        {categorizeData(data, getTodayDate()).map((elem) => {
          if (elem.length !== 0) {
            return (
              <BusinessCard
                name={elem[0].business}
                costs={elem}
                key={randomId()}
              />
            );
          }
        })}
      </div>

      <button className="add" onClick={handleClick}>
        <AddIcon />
      </button>

      {formDialog && <Form />}
      {(formDialog || deleteDialog) && (
        <div className="popup w-screen bg-gray-400 opacity-60 absolute top-0 left-0 bottom-0 z-10 backdrop-blur-lg mb-[-180%] transition ease-in-out duration-75"></div>
      )}
    </section>
  );
};

export default Daily;
