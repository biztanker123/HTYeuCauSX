import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
/* import Calendar1 from './components/calendar/Calendar' */
LocaleConfig.locales['fr'] = {
  monthNames: ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
  monthNamesShort: ['1.','2.','3','4','5','6','7.','8','9.','10.','11.','12.'],
  dayNames: ['Thứ 2.','Thứ 3.','Thứ 4.','Thứ 5.','Thứ 6.','Thứ 7.','Chủ Nhật.'],
  dayNamesShort: ['2.','3.','4.','5.','6.','7.','CN.'],
  today: 'tháng 3\'3' 
}; 


export default class calander extends Component {
  render() {
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};
    return (
        <View style={styles.container}>
        <Calendar
    markingType={'period'}
    markedDates={{
      '2022-03-01': {textColor: 'green'},
      '2022-03-08': {disabled: true, startingDay: false, color: 'green', endingDay: false},
      '2022-03-09': {disabled: true, startingDay: false, color: 'green', endingDay: false}
    }}
  />
   {/*      <Calendar1 /> */}
  
  {/* 
  <Calendar
    // Specify style for calendar container element. Default = {}
    style={{
      borderWidth: 1,
      borderColor: 'gray',
      height: 350
    }}
  
    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme={{
      backgroundColor: '#ffffff',
      calendarBackground: '#ffffff',
      textSectionTitleColor: '#b6c1cd',
      textSectionTitleDisabledColor: '#d9e1e8',
      selectedDayBackgroundColor: '#00adf5',
      selectedDayTextColor: '#ffffff',
      todayTextColor: '#00adf5',
      dayTextColor: '#2d4150',
      textDisabledColor: '#d9e1e8',
      dotColor: '#00adf5',
      selectedDotColor: '#ffffff',
      arrowColor: 'orange',
      disabledArrowColor: '#d9e1e8',
      monthTextColor: 'blue',
      indicatorColor: 'blue',
      textDayFontFamily: 'monospace',
      textMonthFontFamily: 'monospace',
      textDayHeaderFontFamily: 'monospace',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '300',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
    }}
  />
   */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  