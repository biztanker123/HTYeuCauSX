import React, { Component } from 'react'

import { Calendar } from 'react-native-big-calendar';
import { View, StyleSheet, SafeAreaView, Dimensions, Text, Button } from "react-native";

import Picker from './components/Picker/Picker'

const myEventsList = [
  { start: new Date(), end: new Date(), title: "V: 08:00 \n tes" },
  { start: new Date(), end: new Date(), title: "R: 17:00 \n <br/> tes" }
];

/* const today = new Date()
const [date, setDate] = React.useState(today) */
/* const [additionalEvents, setAdditionalEvents] = React.useState<ICalendarEventBase[]>([]) */

export default class App extends Component {


  constructor(props) {
    super(props)


  }
  state = {
    password: '',
    monthshow: (new Date().getMonth()+1).toString(),
    postingCaladar: new Date(),
  }



  pickerActivity = (val) => {
    this.setState({ monthshow: val });

  }
   handleEventSelection = (e) => {
    //console.log(e, "Event data");
    alert('Event data')
  };


  render() {

    /* this.setState.monthshow=new Date().getMonth() */




    return (
      
      <View>

        <View style={{ height: 60,  marginTop: 20, }}>
          <View style={{ marginLeft: 5, flex: 2, flexDirection: 'row' }}>
            <Text style={{ height: 50, width: 40, marginTop: 18 }}>Tháng</Text>
            <Picker
              mode="dropdown"
              selectedValue = {this.state.monthshow}
              style={{ height: 50, width: 90 }}
            /*   selectedValue={new Date('2022', this.state.monthshow - 1, '01').getMonth()} */
              onValueChange={(itemValue) => this.pickerActivity(itemValue)}
            >
              <Picker.Item value="1" label="1" />
              <Picker.Item value="2" label="2" />
              <Picker.Item value="3" label="3" />
              <Picker.Item value="4" label="4" />
              <Picker.Item value="5" label="5" />
              <Picker.Item value="6" label="6" />
              <Picker.Item value="7" label="7" />
              <Picker.Item value="8" label="8" />
              <Picker.Item value="9" label="9" />
              <Picker.Item value="10" label="10" />
              <Picker.Item value="11" label="11" />
              <Picker.Item value="12" label="12" />
            </Picker>

            <Text style={{ height: 50, width: 150, marginTop: 15 }}>
              {new Date('2022', this.state.monthshow - 1, '01').toLocaleDateString()
            
              }
              
              </Text>

          </View>
        </View>

        <View style={{
          marginTop: -10,
           borderWidth: 1,
          borderRadius: 1, 
        }}>
          <Calendar
            /* style={{marginTop:-15}} */
            events={myEventsList}
          

            onPressCell={(event) => alert(event.title)}
           
            date={new Date('2022', this.state.monthshow - 1, '01')}
            mode={'month'}
            height={Dimensions.get('window').height - 90}
            locale="vi"

            showAdjacentMonths='yes'
             onPressEvent={  alert('Event data')}
        
           


            calendarCellStyle={(date, index = 0) => {
              const isEvenRow: boolean = index % 2 === 0
              const isToday = date.getDate()
              if( date.getDay()==0 )
              {
                return {
                  backgroundColor:  'papayawhip',
                }
              }
              return {
                backgroundColor: isEvenRow ? 'aliceblue' : 'azure',
              }
            }}

          />
        </View>
      </View>
    )
  }
}
const darkTheme = {
  palette: {
    primary: {
      main: '#888',
      contrastText: '#fff',
    },
    gray: {
      '100': '#333',
      '200': '#666',
      '300': '#888',
      '500': '#aaa',
      '800': '#ccc',
    },
  },
}
const greentheme = {
  green_bg: {
    palette: {
      primary: {
        main: '#4caf50',
        contrastText: '#fff',
      },
    },
    eventCellOverlappings: [
      {
        main: '#17651a',
        contrastText: '#fff',
      },
      {
        main: '#08540b',
        contrastText: '#fff',
      },
    ],
  },
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  /*  containerView: {
     flex: 1,
 
     paddingTop: 40,
     alignItems: "center"
   } */
});
