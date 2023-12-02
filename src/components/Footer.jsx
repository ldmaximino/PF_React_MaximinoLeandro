import imgWapp from '../assets/imgWapp.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import '../styles/footer.css';

export const Footer = () => {
  
  return (
    <footer className="footer">
        <p>Tienda desarrollada por Leandro D. Maximino en React JS - 2023 - @ldmaximino</p>
        <Tippy content="Enviame un Wapp al +54 3465 481742" placement="right">
          <a href="https://api.whatsapp.com/send?phone=+3465481742text=" target="_blank">
              <img className="img-wapp" src={imgWapp} alt="" />
          </a>
        </Tippy>
    </footer>
  )
}
