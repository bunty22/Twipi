import React from 'react';
import instaImg from '../../public/icons/instagram.svg'
import githImg from '../../public/icons/github.svg';
import linkedImg from '../../public/icons/linkedin.svg';
import twitterImg from '../../public/icons/twitter.svg';

function Footer() {
    return (
        <footer>
        <div className="footer-header">Lets Connect 🌏.</div>
        <ul className="list-non-bullet">
          <li className="list-item-inline"><a href="https://github.com/ChaitanyaCodes" target="_blank" rel="noreferrer" className="link"><img src={githImg} alt="github" /></a></li>
          <li className="list-item-inline"><a href="https://twitter.com/ChaitanyaCodes" target="_blank" rel="noreferrer" className="link"><img src={twitterImg} alt="twitter" /></a></li>
          <li className="list-item-inline"><a href="https://www.linkedin.com/in/chaitanya-chanekar/" target="_blank" rel="noreferrer" className="link"><img src={linkedImg} alt="linkedin" /></a></li>
          <li className="list-item-inline"><a href="https://www.instagram.com/chaitanya.22_/" target="_blank" rel="noreferrer" className="link"><img src={instaImg} alt="instagram" /></a></li>
        </ul>
      </footer>

    )
}

export default Footer
