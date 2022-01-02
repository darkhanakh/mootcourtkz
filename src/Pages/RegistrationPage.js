import React from 'react'
import RegistrationIndividual from '../Components/RegistrationIndividual'
import RegistrationTeam from '../Components/RegistrationTeam'
import '../Style/Registration.css'

function Registration() {
    return (
        <div>
            <RegistrationTeam />
            <RegistrationIndividual />
        </div>
    )
}

export default Registration 