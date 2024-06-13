import React, { useState } from 'react';
import rectangle from './assets/rectangle.jpg';
import arrrowBack from './assets/arrowBack.jpg';
import search from './assets/search.jpg';
import addTeacher from './assets/addTeacher.jpg'
import InputWithArrow from './components/InputWithArrow';
import handbook from './assets/handbook.jpg';
import threeDotsHor from './assets/threeDotsHor.jpg';
import person from './assets/person.jpg';
import download from './assets/download.jpg';


import './App.css';

const App = () => {
  const [fullnames, setFullnames] = useState(['Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson']);
  const [specializations, setSpecializations] = useState(['Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI']);
  const [numberOfGroups, setNumberOfGroups] = useState(['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8']);
  const [phoneNumbers, setPhoneNumbers] = useState(['+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33']);
  const [numberOfStudents, setNumberOfStudents] = useState(['333', '333', '333', '333', '333', '333', '333', '333', '333', '333', '333', '333', '333', '333', '333']);
  const [hiredDates, setHiredDates] = useState(['21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024']);
  const [branch, setBranch] = useState(['IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent', 'IT Park Tashkent']);
  const [checked, setChecked] = useState(false);


  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <div className="app__teachers-container">
      <div className="app__teachers-filters-container">
          <div className='app__teachers-filters-arrowBack-title-container'>
            <div className='app__teachers-filters-arrowBack-needed-container'>
              <div className='app__teachers-filters-arrowBack-container'>
                <img src={arrrowBack} alt='arrowBack' className='app__teachers-filters-arrowBack' />
              </div>
              <h1 className='app__teachers-filters-title'>Учителя</h1>
            </div>
            <div className='app__teachers-filters'>
              <div className='app__teachers-filter-searchTeacher-container'>
                <img src={search} alt='search' className='searchTeacher-icon' />
                <input className='app__teachers-filter-searchTeacher' placeholder='Поиск по учителю' />
              </div>
              <InputWithArrow placeholder={'Статус'} defaultChoice='Все' choices={['Все']} />
              <InputWithArrow defaultChoice='Все' choices={['Все']} icon={handbook} />
            </div>
          </div>
          <div className='app__teachers-filters-addTeacher-container'>
            <div className='rectangleIcon-container'>
              <img src={rectangle} alt='rectangle' />
            </div>
            <div className='app__teachers-filters-downloadList'>
              <img src={download} alt='download' />
              <p className='downloadList-text'>Скачать список</p>
            </div>
            <button className='app__teachers-filters-addTeacher'>
              <img src={person} alt='person' />
              <p>Добавить учителя</p>
            </button>
          </div>
      </div> 
      <div className="app__teachers-list-container">
        <div className='app__teachers-list-headers'>
          <div className='app__teachers-list-headers-teacherName-container'>
            <input type='checkbox' checked={checked} onChange={handleChangeCheckBox} />
            <h2 className='app__teachers-list-headers-teacherName'>ФИО</h2>
          </div>
          <div className='app__teachers-list-otherHeaders-container'>
            <h2 className='app__teachers-list-header-specialization'>Направление</h2>
            <h2 className='app__teachers-list-header-numberOfGroups'>Количество групп</h2>
            <h2 className='app__teachers-list-header-phoneNumber'>Номер</h2>
            <h2 className='app__teachers-list-header-numberOfStudents'>Учеников всего</h2>
            <h2 className='app__teachers-list-header-HiredDate'>Дата трудоустройства</h2>
            <h2 className='app__teachers-list-header-branch'>Филиал</h2>
          </div>
        </div>
          <div className='app__teachers-list'>
            <div className='app__teachers-list-wrapper'>
            {fullnames.map((fullname, index) => (
              <div key={index} className={`app__teachers-list-item ${index % 2 !== 0 ? 'grey-background' : ''}`}>
                <div className='app__teachers-list-item-teacherName-container'>
                  <input type='checkbox' />
                  <p className='app__teachers-list-item-teacherName'>{fullname}</p>
                </div>
                <div className='app__teachers-list-item-otherInfo-container'>
                  <p className='app__teachers-list-item-specialization'>{specializations[index]}</p>
                  <p className='app__teachers-list-item-numberOfGroup'>{numberOfGroups[index]}</p>
                  <p className='app__teachers-list-item-phoneNumber'>{phoneNumbers[index]}</p>
                  <p className='app__teachers-list-item-numberOfStudents'>{numberOfStudents[index]}</p>
                  <p className='app__teachers-list-item-hiredDate'>{hiredDates[index]}</p>
                  <p className='app__teachers-list-item-branch'>{branch[index]}</p>
                  <div className='threeDotsHor-icon-container'>
                    <img src={threeDotsHor} alt='threeDotsHor'/>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;