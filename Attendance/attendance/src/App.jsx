import React from 'react';
import profileImage from './assets/profileImage.jpg';
import wallet from './assets/wallet.jpg';
import person from './assets/person.jpg';
import AttendanceCalendar from './components/attendance-calendar/AttendanceCalendar'
import { FaCircle } from 'react-icons/fa';

import './App.css'

function App() {


  return (
    <>
      <div className='app__attendance-container'>
        <div className='app__attendance-profile-container'>
          <div className='app__attendance-profileInfo'>
            <div className='app__attendance-profileInfo-details'>
              <img src={profileImage} alt="profileImage" />
              <div className='app__attendance-profileInfo-detailsText'>
                <h1 className='app__attendance-profileInfo-studentName'>Sakurai Hiro</h1>
                <h5 className='app__attendance-profileInfo-studentID'>ID: 011/256</h5>
                <h5 className='app__attendance-profileInfo-announcementDate'>Дата объявления: 21.03.2024</h5>
              </div>
              <button className='app__attendance-profileInfo-money'>
                <img src={wallet} alt="wallet" className='app__attendance-profileInfo-moneyIcon' />
                <p className='app__attendance-profileInfo-moneyText'>0 UZS</p>
              </button>
            </div>
          </div>
          <div className='app__attendance-profileInfo-buttons'>
            <button className='app__attendance-profileInfo-documentButton'>
              <p>Документы</p>
            </button>
            <button className='app__attendance-profileInfo-changeButton'>
              <p>Изменить</p>
            </button>
          </div>
        </div>
        <div className='app__attendance-dashboard-container'>
          <div className='app__attendance-dashboard-sectionsButtons'>
            <button className='app__attendance-dashboard-section-personalInfo'><p className='app__attendance-dashboard-section-personalInfoText'>Личная Информация</p></button>
            <FaCircle className='dotIcon' />
            <button className='app__attendance-dashboard-section-groups'><p className='app__attendance-dashboard-section-groupsText'>Группы</p></button>
            <FaCircle className='dotIcon' />
            <button className='app__attendance-dashboard-section-attendance'><p className='app__attendance-dashboard-section-attendanceText'>Посещаемость</p></button>
            <FaCircle className='dotIcon' />
            <button className='app__attendance-dashboard-section-callsHistory'><p className='app__attendance-dashboard-section-callsHistoryText'>История звонков</p></button>
            <FaCircle className='dotIcon' />
            <button className='app__attendance-dashboard-section-SMS'><p className='app__attendance-dashboard-section-SMSText'>SMS</p></button>
            <FaCircle className='dotIcon' />
            <button className='app__attendance-dashboard-section-history'><p className='app__attendance-dashboard-section-historyText'>История</p></button>
          </div>
          <div className='app__attendance-dashboard-title-container'>
            <h1 className='app__attendance-dashboard-title'><img className='attendanceIcon' src={person} alt='person' />Посещаемость</h1></div>
          <div className='app__attendance-dashboard-table'>
          {/* <AttendanceCalendar /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
