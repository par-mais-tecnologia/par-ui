import React, {Component, PropTypes} from 'react';
import DatePickerModel from './react-datepicker.min';
import Calendar from '../icons/calendar';
import DateInput from '../dateInput';
import moment from 'moment';


class DatePicker extends Component {
  componentWillMount() {
    this.setState({
      isDatePickerOpen: false,
    });
  }
  handleDatePickerOpen(){
    this.setState({
      isDatePickerOpen: true,
    });
  }

  handleClickOutside(){
    this.setState({
      isDatePickerOpen: false,
    });
  }

  render() {
    let date = this.props.value.length === 10 ? moment(this.props.value, 'DD/MM/YYYY') : moment();
    return (
      <div className=" flex-row dif bg-gray-03">
        <DateInput inputClassName={this.props.inputClassName} value={this.props.value} onChange={this.props.onChange} label='DATA DE NASCIMENTO'
                   requiredColor='Red'/>
        <div onClick={this.handleDatePickerOpen} style={{
          height: '48px',
          width: '48px',
          marginTop: '26px',
          backgroundColor: this.state.isDatePickerOpen ? 'var(--cottoncandy-02)' : ''
        }} className="flex flex-center-all">
          <DatePickerModel
            value={this.props.value}
            selected={date}
            onClickOutside={this.handleClickOutside}
            onChange={date => this.props.onChange({target: {value: date.format('DD/MM/YYYY')}})}
            customInput={<Calendar size={28} color={this.state.isDatePickerOpen ? 'white' : 'var(--gray-02)'}
                                   background={this.state.isDatePickerOpen ? 'var(--cottoncandy-02)' : ''}/>}
            popoverTargetOffset="7px -200px"/>
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
  inputClassName: PropTypes.string
};
DatePicker.defaultProps = {
  value: '',
  inputClassName:''
};

export default DatePicker;

