import React, {Component, PropTypes} from 'react'
import DatePickerModel from './react-datepicker.min'
import Calendar from '../icons/calendar'
import DateInput from '../dateInput'
import moment from 'moment'


class DateSelector extends Component {

  constructor(props){
    super(props)


    this.state = {
      isDatePickerOpen: false
    }
  }

  componentWillMount() {
    this.setState({
      isDatePickerOpen: false,
    })
  }

  handleDatePickerOpen(){
    this.setState({
      isDatePickerOpen: true,
    })
  }

  handleClickOutside(){
    this.setState({
      isDatePickerOpen: false,
    })
  }

  render() {
    let date = this.props.value.length === 10 ? moment(this.props.value, 'DD/MM/YYYY') : moment()
    return (
      <div className=" flex-row dif bg-gray-03 w-100">
        <DateInput 
          inputClassName={this.props.inputClassName} 
          disabled={this.props.disabled}
          showError={true}
          errorText={this.props.errorText}
          value={this.props.value} onChange={this.props.onChange} label='DATA DE NASCIMENTO'
                   requiredColor={this.props.requiredColor}/>
        <div onClick={this.handleDatePickerOpen.bind(this)} style={{
          height: '48px',
          width: '48px',
          marginTop: '26px',
          backgroundColor: this.state.isDatePickerOpen ? 'var(--cottoncandy-02)' : ''
        }} className="flex flex-center-all">
          <DatePickerModel
            value={this.props.value}
            selected={date}
            onClickOutside={this.handleClickOutside.bind(this)}
            onChange={date => {
              this.props.onChange(date.format('DD/MM/YYYY'))
              this.handleClickOutside()
            }}
            customInput={<Calendar size={28} color={this.state.isDatePickerOpen ? 'white' : 'var(--gray-02)'}
                                   background={this.state.isDatePickerOpen ? 'var(--cottoncandy-02)' : ''}/>}
            popoverTargetOffset="7px -200px"/>
        </div>
      </div>
    )
  }
}

DateSelector.propTypes = {
  onChange: PropTypes.func,
  inputClassName: PropTypes.string,
  requiredColor: PropTypes.string,
  errorText: PropTypes.string,
}
DateSelector.defaultProps = {
  value: '',
  inputClassName:'',
  errorText:''
}

export default DateSelector

