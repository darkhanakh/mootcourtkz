import React from 'react'
import RegistrationIndividual from '../Components/RegistrationIndividual'
import RegistrationTeam from '../Components/RegistrationTeam'
import '../Style/Registration.css'

function Registration() {
    return (
        <div>
            <RegistrationTeam />
            <p style={{ paddingBottom: '70px' }}>Регистрация завершилась</p>
        </div>
    )
}

export default Registration 