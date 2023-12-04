import imgWapp from '../assets/imgWapp.png';
import imgIG from '../assets/imgIG.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import '../styles/footer.css';

export const Footer = () => {
  
  return (
    <footer className="footer">
        <Tippy content="@leandrodanielmaximino" placement="left">
          <a href="https://www.instagram.com/leandrodanielmaximino" target="_blank" rel="noopener noreferrer">
            <img className="img-IG" src={imgIG} alt="" />
          </a>
        </Tippy>
        <p>Tienda desarrollada por Leandro D. Maximino en React JS - 2023 - @ldmaximino</p>
        <Tippy content="Enviame un Wapp al +54 3465 481742" placement="right">
        <a href="https://api.whatsapp.com/send?phone=+543465481742&text=Hola%20Huarache!%20Los%20contacto%20desde%20la%20web...." target="_blank">
              <img className="img-wapp" src={imgWapp} alt="" />
          </a>
        </Tippy>
    </footer>
  )
}
