import { Link } from 'react-router-dom';
import { useState } from 'react';

import { CartWidget } from "./CartWidget"

import imgLogo from '../assets/logo.png';
import imgWapp from '../assets/imgWapp.png';
import imgIG from '../assets/imgIG.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '../styles/navBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
          <nav className="nav">
            <div className="nav-line1">
              <div className="logo">
                <Link to="/" onClick={() => handleLinkClick(4)}><img src={imgLogo} alt="Logo Hüaraché" /> </Link>
                <Link to="/" onClick={() => handleLinkClick(4)}><h1>Hüaraché</h1></Link>
              </div>
              <div className="social-media">
                <Tippy content="@leandrodanielmaximino" placement="left">
                  <a href="https://www.instagram.com/leandrodanielmaximino" target="_blank" rel="noopener noreferrer">
                    <img className="img-IG" src={imgIG} alt="" />
                  </a>
                </Tippy>
                <Tippy content="Enviame un Wapp al +54 3465 481742" placement="right">
                  {/*<a href="https://api.whatsapp.com/send?phone=+3465481742text=" target="_blank">*/}
                  <a href="https://api.whatsapp.com/send?phone=+543465481742&text=Hola%20Huarache!%20Los%20contacto%20desde%20la%20web...." target="_blank">
                    <img className="img-wapp" src={imgWapp} alt="" />
                  </a>
                </Tippy>
              </div>
              <CartWidget />
            </div>
            <div className="destello1"></div>
            <div  className="nav-line2">
              <Link className={`nav-line2-text ${activeLink === 4 ? 'nav-active' : ''}`} to="/" onClick={() => handleLinkClick(4)}>Inicio</Link>
              <Link className={`nav-line2-text ${activeLink === 0 ? 'nav-active' : ''}`} to="/category/cuchillos" onClick={() => handleLinkClick(0)}>Cuchillos</Link>
              <Link className={`nav-line2-text ${activeLink === 1 ? 'nav-active' : ''}`} to="/category/sombreros" onClick={() => handleLinkClick(1)}>Gorras y Sombreros</Link>
              <Link className={`nav-line2-text ${activeLink === 2 ? 'nav-active' : ''}`} to="/category/mates" onClick={() => handleLinkClick(2)}>Mates</Link>
              <Link className={`nav-line2-text ${activeLink === 3 ? 'nav-active' : ''}`} to="/category/tablas" onClick={() => handleLinkClick(3)}>Tablas</Link>
            </div>
          </nav>
        
    </>
  )
}
