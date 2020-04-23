import React from 'react';

import confLogo from '../assets/images/badge-header.svg';
import './style.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Alan <br /> Maranto
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Full Stack Developer</h3>
          <div>@Alan Maranto</div>
        </div>

        <div className="Badge__footer">#DevF</div>
      </div>
    );
  }
}

export default Badge;