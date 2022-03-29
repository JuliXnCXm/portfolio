import React from 'react'
import Spinner from './Spinner'
import '../styles/Skills.css'

const Skills = ({skills}) => {
    const [isLoading, setIsLoading] = React.useState(false)

    return (
        isLoading ? <Spinner/> :
        <div className='skillsection'>
            <div className='skillsContainer'>
                <h1>Skills</h1>
                <ul className='skillsContainer--list'>
                    {skills !== undefined ?
                        Object.getOwnPropertyNames(skills).map(key => {
                        return (
                        <li className='skillsContainer--key'>
                            <div className='skillsContainer--key__text'>
                                <h2>{key}</h2>
                                <span>{skills[key].percent}%</span>
                            </div>
                            <div className='lineSkill'>
                                <div className='skillBar' style={{ width: `${ skills[ key ].percent }%`, backgroundColor: skills[ key ].color}}>
                                </div>
                            </div>
                        </li>)}):null}
                </ul>
            </div>
            <button className='downloadCv'>Download CV</button>
        </div>
  )
}

export default Skills