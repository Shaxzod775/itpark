import React, { useState, useEffect } from 'react';
import rectangle from './assets/rectangle.jpg';
import arrrowBack from './assets/arrowBack.jpg';
import search from './assets/search.jpg';
import InputWithArrow from './components/InputWithArrow';
import handbook from './assets/handbook.jpg';
import addGroup from './assets/addGroup.jpg';
import arrUpShowAll from './assets/arrUpShowAll.png';
import calendar from './assets/calendar.jpg';
import threeDotsHor from './assets/threeDotsHor.jpg';
import people from './assets/people.jpg';

import './App.css';

const App = () => {
  const [groupNames, setGroupNames] = useState(['GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62', 'GR011-62']);
  const [startDates, setStartDates] = useState(['20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024', '20.03.2024']);
  const [completionDates, setCompletionDates] = useState(['21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024', '21.06.2024']);
  const [lessonDays, setLessonDays] = useState(['Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт', 'Пн, Ср, Чт']);
  const [teachers, setTeachers] = useState(['Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov', 'Arslan Koptleulov']);
  const [duration, setDurations] = useState(['3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок', '3 месяц / 36 урок']);
  const [room, setRooms] = useState(['2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет', '2 Кабинет']);
  const [studentsNumbers, setStudentsNumber] = useState(['10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников', '10 учеников']);
  const [groupNumber, setGroupNumber] = useState('222');
  const [checked, setChecked] = useState(false);


  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };



  return (
    <div className="app__groups-container">
      <div className="app__groups-filters-container">
        <div className="app__groups-topFilters-container">
          <div className='app__groups-topFilters-arrowBack-title-container'>
            <div className='app__groups-topFilters-arrowBack-needed-container'>
              <div className='app__groups-topFilters-arrowBack-container'>
                <img src={arrrowBack} alt='arrowBack' className='app__groups-topFilters-arrowBack' />
              </div>
              <h1 className='app__groups-topFilters-title'>Группы</h1>
            </div>
            <div className='app__groups-topFilters'>
              <div className='app__groups-topFilter-searchGroup-container'>
                <img src={search} alt='search' className='searchGroup-icon' />
                <input className='app__groups-topFilter-searchGroup' placeholder='Поиск по группе' />
              </div>
              <InputWithArrow placeholder={'Учителя'} defaultChoice='Все' choices={['Все']} />
              <InputWithArrow defaultChoice='Все' choices={['Все']} icon={handbook} />
              <button className='app__groups-topFilters-removeFilters' onClick={() => {}}><p>Сбросить фильтр</p></button>
            </div>
          </div>
          <div className='app__groups-filters-addGroup-container'>
            <div className='rectangleIcon-container'>
              <img src={rectangle} alt='rectangle' />
            </div>
            <div className='peopleIcon-container'>
              <img src={people} alt='people' className='peopleIcon'/>
              <p>{groupNumber}</p>
            </div>
            <button className='app__groups-filters-addStudent'>
              <img src={addGroup} alt='addGroup' />
              <p>Создать группу</p>
            </button>
          </div>
        </div>
        <div className='app__groups-filters-showAll-container'>
          <h3 className='app__gropus-filters-showAll'>Показать все фильтры</h3>
          <img src={arrUpShowAll} alt='arrowUp' />
        </div>
        <div className="app__groups-bottomFilters">
          <InputWithArrow defaultChoice='Действующие группы' choices={['']} />
          <InputWithArrow defaultChoice='Учителя' choices={['']} />
          <InputWithArrow defaultChoice='По курсам' choices={['']} />
          <InputWithArrow defaultChoice='Дни' choices={['']} />
          <InputWithArrow defaultChoice='Теги' choices={['']} />
          <InputWithArrow placeholder='Начало даты' add='extraLong' icon={calendar} />
          <InputWithArrow placeholder='Конец даты' add='extraLong' icon={calendar} />
        </div>
      </div> 
      <div className="app__groups-list-container">
        <div className='app__groups-list-headers'>
          <div className='app__groups-list-headers-groupName-container'>
            <input type='checkbox' checked={checked} onChange={handleChangeCheckBox} />
            <h2 className='app__groups-list-headers-groupName'>Название группы</h2>
          </div>
          <div className='app__groups-list-otherHeaders-container'>
            <h2 className='app__groups-list-header-startDate'>Дата начала</h2>
            <h2 className='app__groups-list-header-completionDate'>Дата завершения</h2>
            <h2 className='app__groups-list-header-lessonDays'>Дни урока</h2>
            <h2 className='app__groups-list-header-teacher'>Учитель</h2>
            <h2 className='app__groups-list-header-duration'>Продолжительность</h2>
            <h2 className='app__groups-list-header-room'>Кабинет</h2>
            <h2 className='app__groups-list-header-studentsNumber'>Учеников</h2>
          </div>
        </div>
          <div className='app__groups-list'>
            <div className='app__groups-list-wrapper'>
            {groupNames.map((groupName, index) => (
              <div key={index} className={`app__groups-list-item ${index % 2 !== 0 ? 'grey-background' : ''}`}>
                <div className='app__groups-list-item-fullname-container'>
                  <input type='checkbox' />
                  <p className='app__groups-list-item-groupName'>{groupName}</p>
                </div>
                <div className='app__groups-list-item-otherInfo-container'>
                  <p className='app__groups-list-item-startDate'>{startDates[index]}</p>
                  <p className='app__groups-list-item-completionDate'>{completionDates[index]}</p>
                  <p className='app__groups-list-item-lessonDays'>{lessonDays[index]}</p>
                  <p className='app__groups-list-item-teacher'>{teachers[index]}</p>
                  <p className='app__groups-list-item-duration'>{duration[index]}</p>
                  <p className='app__groups-list-item-room'>{room[index]}</p>
                  <p className='app__groups-list-item-studentsNumber'>{studentsNumbers[index]}</p>
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