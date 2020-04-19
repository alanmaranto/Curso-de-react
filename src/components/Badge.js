import React from 'react';

import confLogo from '../assets/images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Alan <br /> Maranto
          </h1>
        </div>

        <div>
          <p>Full Stack Developer</p>
          <p>@Alan Maranto</p>
        </div>

        <div>#DevF</div>
      </div>
    );
  }
}

export default Badge;