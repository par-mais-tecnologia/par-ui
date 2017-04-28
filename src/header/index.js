import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Avatar from '../avatar'

class Header extends Component {
  render() {
    const {
      logo,
      logoPath,
      logoAlt,
      label,
      isLogged,
      name,
      exitText,
      onLogout,
      className
    } = this.props;

    const headerClassName = "h25 w-100 flex flex-row justify-between p-shadow-8 bb b--gray-04 bg-white fixed z-999 " + className

    return (
      <div className={headerClassName}>
        <div className="flex flex-row">
          {logo && <Link to={logoPath}>
            <img
              style={{'width': 150}}
              className="h25 w4 pointer"
              src={logo}
              alt={logoAlt}
            />
          </Link>}
          {(!logo) && <div className="h25 w4" />}
          <div className="roboto-light gray-01 p-f18 pt3">
            {label}
          </div>
        </div>
        {isLogged &&
        <div className="flex flex-row pr3 fadein-1">
          <Avatar customClassName="b--gray-04" initialLetter={name.substring(0,1).toUpperCase()}/>
          <div className="p-f14 roboto-regular gray-02 pt3">
            {name}
          </div>
          <div className="p-link p-pt35 ml4" onClick={onLogout}>
            {exitText}
          </div>
        </div>}
      </div>
    )
  }
}

Header.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  exitText: PropTypes.string,
  isLogged: PropTypes.bool,
  logoHeight: PropTypes.number,
  logoWidth: PropTypes.number,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  logoPath: PropTypes.string,
  className: PropTypes.string
}

Header.defaultProps = {
  label: 'Label',
  name: 'Name',
  exitText: 'SAIR',
  isLogged: false,
  logoAlt: 'Default img alt',
  logoPath: '/',
  onLogout: defaultLogout,
  className: ''
}

function defaultLogout() {
  console.log('No logout function defined.')
}

export default Header


