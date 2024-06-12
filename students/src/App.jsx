import React, { useState, useEffect } from 'react';
import rectangle from './assets/rectangle.jpg';
import arrrowBack from './assets/arrowBack.jpg';
import search from './assets/search.jpg';
import InputWithArrow from './components/InputWithArrow';
import handbook from './assets/handbook.jpg';
import threedots from './assets/threedots.jpg';
import addPerson from './assets/addPerson.jpg';
import arrUpShowAll from './assets/arrUpShowAll.png';
import calendar from './assets/calendar.jpg';
import threeDotsHor from './assets/threeDotsHor.jpg';

import './App.css';

const App = () => {
  const [fullNames, setFullNames] = useState(['Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson', 'Cameron Williamson Williamson']);
  const [specializations, setSpecializations] = useState(['Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI', 'Frontend, UX/UI']);
  const [groups, setGroups] = useState(['UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62', 'UX/UI GR011-62']);
  const [numbers, setNumbers] = useState(['+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33', '+998 (90) 033-15-33']);
  const [mail, setMail] = useState(['mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com', 'mail@example.com']);
  const [teachers, setTeachers] = useState(['Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov']);
  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };



  return (
    <div className="app__students-container">
      <div className="app__students-filters-container">
        <div className="app__students-topFilters-container">
          <div className='app__students-topFilters-arrowBack-title-container'>
            <div className='app__students-topFilters-arrowBack-needed-container'>
              <div className='app__students-topFilters-arrowBack-container'>
                <img src={arrrowBack} alt='arrowBack' className='app__students-topFilters-arrowBack' />
              </div>
              <h1 className='app__students-topFilters-title'>Ученики</h1>
            </div>
            <div className='app__students-topFilters'>
              <div className='app__students-topFilter-searchStudent-container'>
                <img src={search} alt='search' className='searchStudent-icon' />
                <input className='app__students-topFilter-searchStudent' placeholder='Поиск по ученику' />
              </div>
              <InputWithArrow placeholder={'Статус'} defaultChoice='Все' choices={['Все']} />
              <InputWithArrow defaultChoice='Все' choices={['Все']} icon={handbook} />
              <InputWithArrow defaultChoice='Статус ученика' choices={['Первый', 'Второй']} />
              <InputWithArrow defaultChoice='Все группы' choices={['Все группы']} />
              <button className='app__students-topFilters-removeFilters' onClick={() => {}}><p>Сбросить фильтр</p></button>
            </div>
          </div>
          <div className='app__students-filters-addStudent-container'>
            <div className='rectangleIcon-container'>
              <img src={rectangle} alt='rectangle' />
            </div>
            <button className='app__students-filters-addStudent'>
              <img src={addPerson} alt='addPerson' />
              <p>Добавить ученика</p>
            </button>
            <div className='threedotsIcon-container'>
              <img src={threedots} alt='threedots' />
            </div>
          </div>
        </div>
        <div className='app__students-filters-showAll-container'>
          <h3 className='app__students-filters-showAll'>Показать все фильтры</h3>
          <img src={arrUpShowAll} alt='arrowUp' />
        </div>
        <div className="app__students-bottomFilters">
          <InputWithArrow defaultChoice='Финансовая ситуация' choices={['Финансовая ситуация']} />
          <InputWithArrow defaultChoice='По тегам' choices={['По тегам']} />
          <input className='app__students-bottomFilters-ID' placeholder='Дополнительный ID' />
          <InputWithArrow placeholder={'Начало даты'} add='extraLong' icon={calendar} />
          <InputWithArrow placeholder={'Конец даты'} add='extraLong' icon={calendar} />
        </div>
      </div>
      <div className="app__students-list-container">
        <div className='app__students-list-headers'>
          <div className='app__students-list-headers-fullname-container'>
            <input type='checkbox' checked={checked} onChange={handleChangeCheckBox} />
            <h2 className='app__students-list-headers-fullname'>ФИО</h2>
          </div>
          <div className='app__students-list-otherHeaders-container'>
            <h2 className='app__students-list-header-specialization'>Направление</h2>
            <h2 className='app__students-list-header-group'>Группа</h2>
            <h2 className='app__students-list-header-phoneNumber'>Номер</h2>
            <h2 className='app__students-list-header-mail'>Почта</h2>
            <h2 className='app__students-list-header-teacher'>Учитель</h2>
          </div>
        </div>
          <div className='app__students-list'>
            <div className='app__students-list-wrapper'>
            {fullNames.map((fullName, index) => (
              <div key={index} className={`app__students-list-item ${index % 2 !== 0 ? 'grey-background' : ''}`}>
                <div className='app__students-list-item-fullname-container'>
                  <input type='checkbox' />
                  <p className='app__students-list-item-fullname'>{fullName}</p>
                </div>
                <div className='app__students-list-item-otherInfo-container'>
                  <p className='app__students-list-item-specialization'>{specializations[index]}</p>
                  <p className='app__students-list-item-group'>{groups[index]}</p>
                  <p className='app__students-list-item-phoneNumber'>{numbers[index]}</p>
                  <p className='app__students-list-item-mail'>{mail[index]}</p>
                  <p className='app__students-list-item-teacher'>{teachers[index]}</p>
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