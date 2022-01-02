import React, { useState } from 'react';
import { db, firebase } from '../db.js'


function RegistrationTeam() {

    async function sendInfo(e) {
        e.preventDefault()

        const studentsRef = db.collection('participantsTeam')
        if (teamName != '' && schoolName != '' && grade != '' && participants != '' && contacts != '' && checkbox1 && checkbox2) {
            setError(false)
            setTeamName('')
            setSchoolName('')
            setGrade('')
            setParticipants('')
            setMentors('')
            setContacts('')
            setRegistered(true)
            await studentsRef.add({
                teamName: teamName,
                schoolName: schoolName,
                grade: grade,
                participants: participants,
                mentors: mentors,
                contacts: contacts,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }
        else {
            console.log('empty field');
            setError(true)
            setRegistered(false)
        }
    }

    const [teamName, setTeamName] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [grade, setGrade] = useState('')
    const [participants, setParticipants] = useState('')
    const [mentors, setMentors] = useState('')
    const [contacts, setContacts] = useState('')
    const [registered, setRegistered] = useState(false)
    const [checkbox1, setCheckbox1] = useState('')
    const [checkbox2, setCheckbox2] = useState('')
    const [error, setError] = useState(false)

    return (
        <div className="reg">
            <h3>Регистрация с командой</h3>
            <p></p>
            {registered ?
                <div>
                    <form onSubmit={sendInfo} className="reg-form">
                        <input value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder='Наименование команды*' />
                        <input value={schoolName} onChange={(e) => setSchoolName(e.target.value)} placeholder='Наименование школы*' />
                        <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder='Классы обучения*' />
                        <input value={participants} onChange={(e) => setParticipants(e.target.value)} placeholder='Участники команды (2-4 человека) (ФИО)*' />
                        <input value={mentors} onChange={(e) => setMentors(e.target.value)} placeholder='Тренеры (если имеются)' />
                        <input value={contacts} onChange={(e) => setContacts(e.target.value)} placeholder='Контактные данные (телефон,эл.почта участников команды, тренеров)*' />
                        <span className='invisible-padding' />
                        <div className='checkbox-container'>
                            <input checked={checkbox1} onChange={(e) => setCheckbox1(e.target.checked)} className='checkbox' type="checkbox" />
                            <p className='checkbox-p'>«Отправлением настоящей регистрационной формой подтверждаем участие в Moot Court for High School Правовой конкурс «Игровой судебный процесс для учеников старшей школы»»</p>
                        </div>
                        <div className='checkbox-container'>
                            <input checked={checkbox2} onChange={(e) => setCheckbox2(e.target.checked)} className='checkbox' type="checkbox" />
                            <p className='checkbox-p'>«Даю свое согласие на обработку и использование персональных данных»</p>
                        </div>
                        <button type='submit' className='form-btn'>Отправить заявку</button>
                    </form>
                    <h6 className="feedback-text" id="success-text">Вы успешно зарегистрировались на Moot Court Kazakhstan for High School!</h6>
                </div>
                :
                <div>
                    <form onSubmit={sendInfo} className="reg-form">
                        <input value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder='Наименование команды*' />
                        <input value={schoolName} onChange={(e) => setSchoolName(e.target.value)} placeholder='Наименование школы*' />
                        <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder='Классы обучения*' />
                        <input value={participants} onChange={(e) => setParticipants(e.target.value)} placeholder='Участники команды (2-4 человека) (ФИО)*' />
                        <input value={mentors} onChange={(e) => setMentors(e.target.value)} placeholder='Тренеры (если имеются)' />
                        <input value={contacts} onChange={(e) => setContacts(e.target.value)} placeholder='Контактные данные (телефон,эл.почта участников команды, тренеров)*' />
                        <span className='invisible-padding' />
                        <div className='checkbox-container'>
                            <input checked={checkbox1} onChange={(e) => setCheckbox1(e.target.checked)} className='checkbox' type="checkbox" />
                            <p className='checkbox-p'>«Отправлением настоящей регистрационной формой подтверждаем участие в Moot Court for High School Правовой конкурс «Игровой судебный процесс для учеников старшей школы»»</p>
                        </div>
                        <div className='checkbox-container'>
                            <input checked={checkbox2} onChange={(e) => setCheckbox2(e.target.checked)} className='checkbox' type="checkbox" />
                            <p className='checkbox-p'>«Даю свое согласие на обработку и использование персональных данных»</p>
                        </div>
                        <button type='submit' className='form-btn'>Отправить заявку</button>
                        {error ?
                            <h6 className="feedback-text" id="error-text">Ошибка: заполните нужные поля</h6>
                            :
                            ''
                        }
                    </form>
                </div>
            }
        </div>
    )
}

export default RegistrationTeam