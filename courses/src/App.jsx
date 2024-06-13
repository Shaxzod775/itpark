import React, { useState } from 'react';
import rectangle from './assets/rectangle.jpg';
import arrrowBack from './assets/arrowBack.jpg';
import threeDotsHor from './assets/threeDotsHor.jpg';
import add from './assets/add.jpg'

import './App.css';

const App = () => {
  const [courseNames, setCourseNames] = useState(['Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson']);
  const [completionDates, setCompletionDates] = useState(['21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024', '21.03.2024']);
  const [groups, setGroups] = useState(['UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62', 'UX/UI GR0111-62']);
  const [phoneNumbers, setPhoneNumbers] = useState(['+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33']);
  const [emails, setEmails] = useState(['example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com', 'example@gmail.com']);
  const [teachers, setTeachers] = useState(['Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov']);
  const [checked, setChecked] = useState(false);


  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <div className="app__courses-container">
      <div className="app__courses-filters-container">
          <div className='app__courses-filters-arrowBack-title-container'>
            <div className='app__courses-filters-arrowBack-needed-container'>
              <div className='app__courses-filters-arrowBack-container'>
                <img src={arrrowBack} alt='arrowBack' className='app__courses-filters-arrowBack' />
              </div>
              <h1 className='app__courses-filters-title'>Курсы</h1>
            </div>
          </div>
          <div className='app__courses-filters-addCourse-container'>
            <div className='rectangleIcon-container'>
              <img src={rectangle} alt='rectangle' />
            </div>
            <button className='app__courses-filters-addCourse'>
              <img src={add} alt='add' />
              <p>Добавить курс</p>
            </button>
          </div>
      </div> 
      <div className="app__courses-list-container">
        <div className='app__courses-list-headers'>
          <div className='app__courses-list-headers-courseName-container'>
            <input type='checkbox' checked={checked} onChange={handleChangeCheckBox} />
            <h2 className='app__courses-list-headers-courseName'>Название курса</h2>
          </div>
          <div className='app__courses-list-otherHeaders-container'>
            <h2 className='app__courses-list-header-completionDate'>Дата завершения</h2>
            <h2 className='app__courses-list-header-groups'>Группы</h2>
            <h2 className='app__courses-list-header-phoneNumber'>Номер</h2>
            <h2 className='app__courses-list-header-email'>Почта</h2>
            <h2 className='app__courses-list-header-teacher'>Учитель</h2>
          </div>
        </div>
          <div className='app__courses-list'>
            <div className='app__courses-list-wrapper'>
            {courseNames.map((courseName, index) => (
              <div key={index} className={`app__courses-list-item ${index % 2 !== 0 ? 'grey-background' : ''}`}>
                <div className='app__courses-list-item-courseName-container'>
                  <input type='checkbox' />
                  <p className='app__courses-list-item-courseName'>{courseName}</p>
                </div>
                <div className='app__courses-list-item-otherInfo-container'>
                  <p className='app__courses-list-item-specialization'>{completionDates[index]}</p>
                  <p className='app__courses-list-item-numberOfGroup'>{groups[index]}</p>
                  <p className='app__courses-list-item-phoneNumber'>{phoneNumbers[index]}</p>
                  <p className='app__courses-list-item-emails'>{emails[index]}</p>
                  <p className='app__courses-list-item-teacher'>{teachers[index]}</p>
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