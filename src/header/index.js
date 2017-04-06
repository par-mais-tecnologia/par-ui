import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="h25 flex flex-row justify-between p-shadow-8 bb b--gray-01">
        <div className="flex flex-row pl3">
          {this.props.logo && <Link to={this.props.logoPath}>
            <img className="h25 w4 pointer"
                 src={this.props.logo}
                 alt={this.props.logoAlt}
            />
          </Link>}
          {(!this.props.logo) && <div className="h25 w4"/>}
          <div className="roboto-light gray-01 p-f18 pt3">
            {this.props.label}
          </div>
        </div>
        {this.props.isLogged &&
        <div className="flex flex-row pr3">
          <div className="h25 w25 pa2">

          </div>
          <div className="p-f14 w4 roboto-regular gray-02 pt3">
            {this.props.consultantName}
          </div>
          <div className="p-link pt3" onClick={this.props.onLogout}>
            {this.props.exitText}
          </div>
        </div>}
      </div>
    );
  }
}

Header.propTypes = {
  label: React.PropTypes.string,
  consultantName: React.PropTypes.string,
  exitText: React.PropTypes.string,
  isLogged: React.PropTypes.bool,
  logoHeight: React.PropTypes.number,
  logoWidth: React.PropTypes.number,
  logo: React.PropTypes.string,
  logoAlt: React.PropTypes.string,
  logoPath: React.PropTypes.string,

};

Header.defaultProps = {
  label: "Investimentos",
  consultantName: "Consultant Name",
  exitText: "Sair",
  isLogged: false,
  logoAlt: "Default img alt",
  logoPath:'/',
  onLogout:defaultLogout


};

function defaultLogout(){
  console.log("No logout function defined.");
}
export default Header;



