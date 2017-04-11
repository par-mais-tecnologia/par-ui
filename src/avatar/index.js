import React, {Component, PropTypes} from 'react';


class Avatar extends Component {
  getStyle() {
    const {
      backgroundColor,
      size,
      src,
      initialLetter
    } = this.props;

    let areaInlineStyle;
    let photoInlineStyle;

    if (backgroundColor) {
      areaInlineStyle = {backgroundColor: backgroundColor}
    }

    switch (size){
      case "small":{
        areaInlineStyle = {...areaInlineStyle,
          height: '48px',
          width: '48px',
        };
        photoInlineStyle = {...photoInlineStyle,
          height: '32px',
          width: '32px',
          margin: '6px',
          padding: src ? '' :'0'
        };
        break;
      }
      case "medium":{
        areaInlineStyle = {...areaInlineStyle,
          height: '88px',
          width: '88px',
        };
        photoInlineStyle = {...photoInlineStyle,
          height: '86px',
          width: '86px',
          padding:src?'':'6px 0 0 0',
          fontSize:'56px'
        };
        break;
      }
      case "large":{
        areaInlineStyle = {...areaInlineStyle,
          height: '128px',
          width: '128px',
        };
        photoInlineStyle = {...photoInlineStyle,
          height: '126px',
          width: '126px',
          padding:src?'':'6px 0 0 2px',
          fontSize:'96px'

        };
        break;
      }
      case "xlarge": {
        areaInlineStyle = {
          ...areaInlineStyle,
          height: '100%',
          width: '100%',
        };
        photoInlineStyle = {
          ...photoInlineStyle,
          height: '100%',
          width: '100%',
          padding: src ? '' : '6px 0 0 2px',
          fontSize: '96px'
        };
        break;
      }
    }

    return {
      areaInlineStyle: areaInlineStyle,
      photoInlineStyle: photoInlineStyle
    };
  }

  render() {

    const style = this.getStyle();

    const {
      src,
      initialLetter
    } = this.props;

    if (src) {
      return (
        <div style={style.areaInlineStyle} className="dif">
          <img style={style.photoInlineStyle} src={src} className="br-100 ba b--gray-04"/>
        </div>
      );
    } else {
      return (
        <div style={style.areaInlineStyle} className="dif" >
          <span style={style.photoInlineStyle} className="br-100 ba b--gray-04 roboto-regular f3 white tc bg-gray-06 flex justify-center items-center">
            {initialLetter}
          </span>
        </div>
      );
    }
  }
}

Avatar.defaultProps = {
  size: 'small',
};

Avatar.propTypes = {
  /** The backgroundColor of the avatar. Does not apply to image avatars.**/
  backgroundColor: PropTypes.string,
  /** Can be used, for instance, to render a letter inside the avatar.**/
  initialLetter: PropTypes.node,
  /** The css class name of the root `div` or `img` element.**/
  customClassName: PropTypes.string,
  /** This is the size of the avatar in pixels. **/
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  /** If passed in, this component will render an img element. Otherwise, a div will be rendered.**/
  src: PropTypes.string,
};

export default Avatar;
