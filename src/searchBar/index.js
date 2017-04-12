import React, {Component, PropTypes} from 'react';
import Magnifier from "../icons/magnifier"

class SearchBar extends Component {

  componentWillMount() {
    this.setState({
      isFocused: false,
    });
  }

  getStyle(state) {
    const {
      customClassName,
      inputClassName,
      containerClassName,
    } = this.props;

    let inputStyle = "roboto-regular gray-02 h2 p-f18 input-text-indent-12 bn placeholder";
    let containerStyle = "dif flex-row ba b--gray-04";


    if(state.isFocused===true){
      containerStyle = containerStyle.replace('b--gray-04', ' b--cottoncandy-01')
    }

    if (customClassName) {
      inputStyle = inputStyle.concat(" ", inputClassName)
    }
    if (containerClassName) {
      containerStyle = containerStyle.concat(" ", containerClassName)
    }

    return {
      containerStyle: containerStyle,
      inputStyle: inputStyle,
    };
  }

  handleInputBlur = (event) => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };
  handleInputChange = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  };
  handleInputFocus = (event) => {
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  render() {
    const {type, placeholder, value, width, height} = this.props;

    const customSize = {
      width: width,
      height:height
    }

    const inputProps = {
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      value: value
    };

    const {
      containerStyle,
      inputStyle
    } = this.getStyle(this.state);
    
    return (
      <div style={customSize} className={containerStyle}>
        <input {...inputProps} style={{ height:'38px', width:'100%'}} type={type} className={inputStyle} placeholder={placeholder}/>
        <div style={{width:'40px', height:'40px'}} className="bn dif flex-center-all">
          <Magnifier size={18} color="#D4D4D4"/>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  customClassName: PropTypes.string,
  placeholder: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.string,
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  type: 'text',
  placeholder: 'Search',
  height:40,
  width:280
};

SearchBar.state = {
  isFocused: false,
};

export default SearchBar;
