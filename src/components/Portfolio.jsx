import React, { useEffect } from 'react'
import '../styles/Portfolio.css'
import Modal from './Modal'
import Data from '../assets/Mock.js'

const Portfolio = () => {
  const [data, setData] = React.useState({})
  const [show , setShow] = React.useState(false)
  const [portfolio, setPortfolio] = React.useState("all")
  const [projectName, setProjectName] = React.useState("")
  useEffect( () =>
  {

    if ( portfolio === "web" )
    {
      setData( Data.portfolio.web )
    }
    if ( portfolio === "data" )
    {
      setData( Data.portfolio.dataScience )
    }
    if ( portfolio === "all" ) {
      setData( Data.portfolio.all )
    }
  }, [ portfolio ] )

  const handleCLick = (project) => {
    setShow(true)
    setProjectName(project)
  }
  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className="hero" id="portfolio">
      <h1>My Projects</h1>
      <div>
        <div className='projects--nav'>
          <span id="btn-prj--all" onClick={() => {
            setPortfolio("all")
            let btn = document.getElementById( "btn-prj--all" )
            let btnw = document.getElementById( "btn-prj--web" )
            let btnd = document.getElementById( "btn-prj--data" )
            btn.style.fontWeight = "bold"
            btnw.style.fontWeight = "lighter"
            btnd.style.fontWeight = "lighter"
          }}>All</span>
          <span id="btn-prj--web" onClick={() => {
            setPortfolio("web")
            let btna = document.getElementById( "btn-prj--all" )
            let btnd = document.getElementById( "btn-prj--data" )
            let btn = document.getElementById( "btn-prj--web" )
            btn.style.fontWeight = "bold"
            btnd.style.fontWeight = "lighter"
            btna.style.fontWeight = "lighter"
          }}>Web Development</span>
          <span id="btn-prj--data" onClick={() => {
            setPortfolio("data")
            let btna = document.getElementById( "btn-prj--all" )
            let btnw = document.getElementById( "btn-prj--web" )
            let btn = document.getElementById( "btn-prj--data" )
            btna.style.fontWeight = "lighter"
            btnw.style.fontWeight = "lighter"
            btn.style.fontWeight = "bold"
        }}>Data Science</span>
        </div>
        <div className='projects--images'>
          {data !== undefined ?
            Object.getOwnPropertyNames(data).map((project) => {
                return (
                  <div>
                    <img className='projects--images__container--image' src={process.env.PUBLIC_URL + `/images/${data[project].photo}`} alt={data[project].title} onClick={() => handleCLick(project)}/>
                  </div>
                )
            }): null}
        </div>
          {show ?
            <Modal>
                <div className='modal--container__image'>
                  <span class="contact-icon material-icons material-icons-outlined" onClick={handleClose}>
                    close
                  </span>
                    <h3 className='modal--container__image--title'>{Data.portfolio.all[projectName].title}</h3>
                    <div className='modal--container__image--image'>
                          <img src={process.env.PUBLIC_URL + `/images/${ Data.portfolio.all[ projectName ].photo }`} alt={Data.portfolio.all[projectName].title}/>
                          <p className='modal--container__image--description'>{Data.portfolio.all[ projectName ].description}</p>
                    </div>
                    <div className="modal--container__image--buttons">
                      <button onClick={() => {
                        window.open(Data.portfolio.all[ projectName ].link, "_blank")
                      }}>Demo</button>
                      <button onClick={() =>{
                        window.open( Data.portfolio.all[ projectName ].github, "_blank" )
                      }}>Code</button>
                    </div>
                  </div>
            </Modal>
          : null}
      </div>
    </div>
  )
}

export default Portfolio