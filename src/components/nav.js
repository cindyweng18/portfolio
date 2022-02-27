import React , {useState, useEffect} from 'react';
import '../styles.css';


function Nav()  {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])


    return (
        <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="brand d-block d-lg-none">Cindy Browning</span>

                {(toggleMenu || screenWidth > 1000) && (
                <ul className="navbar-nav d-lg-none">
                    <li className="nav-item d-lg-none"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item d-lg-none"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    <li className="nav-item d-lg-none"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item d-lg-none"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item d-lg-none"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item d-lg-none"><p className="love">Made with <i className="bi bi-suit-heart-fill"></i>. Template by Start Bootstrap.</p></li>
                    </ul>
                )}
            </a>
       
        <button onClick={toggleNav} className="btn d-lg-none" type="button"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">

            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                <li className="nav-item"><p className="love">Made with <i className="bi bi-suit-heart-fill"></i>. Template by Start Bootstrap.</p></li>
            </ul>

        </div>
    </nav>
    </>
        )
}
export default Nav;