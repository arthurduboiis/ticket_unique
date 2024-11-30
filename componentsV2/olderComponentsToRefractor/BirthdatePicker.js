import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from '../../constants/Colors';
import { globalStyles as global } from '../../styles/global';
import ChevronIcon from '../../assets/small_chevron_black.svg';
import { SecondaryButton } from '../molecules';
import { Button } from '../atoms';

const daysOfWeek = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

const BirthdatePicker = ({ initialDate, onDateChange }) => {
  const globalStyles = global();
  const [currentMonth, setCurrentMonth] = useState(new Date(initialDate));
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [isMonthYearPickerVisible, setMonthYearPickerVisibility] =
    useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentMonth.getFullYear());

  useEffect(() => {
    setSelectedDate(initialDate);
    setCurrentMonth(new Date(initialDate));
    setSelectedMonth(new Date(initialDate).getMonth());
    setSelectedYear(new Date(initialDate).getFullYear());
  }, [initialDate]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 50) {
          changeMonth(-1);
        } else if (gestureState.dx < -50) {
          changeMonth(1);
        }
      },
    })
  ).current;

  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const startDay = (startOfMonth.getDay() + 6) % 7;
  const totalDays = endOfMonth.getDate();

  const prevMonthEnd = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    0
  ).getDate();

  const daysInPrevMonth = Array.from(
    { length: startDay },
    (_, i) => prevMonthEnd - startDay + 1 + i
  );

  const nextMonthStart = 7 - ((startDay + totalDays) % 7);
  const daysInNextMonth = Array.from(
    { length: nextMonthStart },
    (_, i) => i + 1
  );

  const formatDate = (date) => {
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(date.getTime() - timezoneOffset);
    return adjustedDate.toISOString().split('T')[0];
  };

  const getDayStyle = (date) => {
    const dateString = formatDate(date);

    let dayStyle = [styles.dayContent];

    if (selectedDate === dateString) {
      dayStyle.push(styles.selectedDay);
    }

    return dayStyle;
  };

  const getDayTextStyle = (date) => {
    const dateString = formatDate(date);

    if (selectedDate === dateString) {
      return styles.selectedDayText;
    }
    return styles.dayText;
  };

  const onDayPress = (date) => {
    const dateString = formatDate(date);
    setSelectedDate(dateString);
    onDateChange(dateString);
  };

  const changeMonth = (direction) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + direction,
        1
      )
    );
  };

  const changeMonthYear = () => {
    setCurrentMonth(new Date(selectedYear, selectedMonth, 1));
    setMonthYearPickerVisibility(false);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderDays = () => {
    const days = [];
    const prevMonthDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    const nextMonthDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );

    for (let i = 0; i < daysInPrevMonth.length; i++) {
      const date = new Date(
        prevMonthDate.getFullYear(),
        prevMonthDate.getMonth(),
        daysInPrevMonth[i]
      );
      days.push(
        <TouchableOpacity
          key={`prev-${daysInPrevMonth[i]}`}
          style={styles.day}
          onPress={() => onDayPress(date)}
        >
          <View style={styles.dayWrapper}>
            <View style={styles.dayContent}>
              <Text style={styles.otherMonthDayText}>{daysInPrevMonth[i]}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      days.push(
        <TouchableOpacity
          key={`current-${i}`}
          style={styles.day}
          onPress={() => onDayPress(date)}
        >
          <View style={styles.dayWrapper}>
            <View style={getDayStyle(date)}>
              <Text style={getDayTextStyle(date)}>{i}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    for (let i = 0; i < daysInNextMonth.length; i++) {
      const date = new Date(
        nextMonthDate.getFullYear(),
        nextMonthDate.getMonth(),
        daysInNextMonth[i]
      );
      days.push(
        <TouchableOpacity
          key={`next-${daysInNextMonth[i]}`}
          style={styles.day}
          onPress={() => onDayPress(date)}
        >
          <View style={styles.dayWrapper}>
            <View style={styles.dayContent}>
              <Text style={styles.otherMonthDayText}>{daysInNextMonth[i]}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    return days;
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const years = [];
    for (let i = currentYear; i >= startYear; i--) {
      years.push(<Picker.Item key={i} label={`${i}`} value={i} />);
    }
    return years;
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => changeMonth(-1)}
          style={styles.chevronTouchable}
        >
          <ChevronIcon style={styles.arrow} width={10} height={10} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMonthYearPickerVisibility(true)}>
          <Text style={styles.month}>
            {capitalizeFirstLetter(
              currentMonth.toLocaleString('fr-FR', {
                month: 'long',
                year: 'numeric',
              })
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeMonth(1)}
          style={styles.chevronTouchable}
        >
          <ChevronIcon
            style={[styles.arrow, styles.arrowRight]}
            width={10}
            height={10}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayOfWeekContainer}>
            <Text style={styles.dayOfWeek}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.days}>{renderDays()}</View>
      </View>
      <Modal
        visible={isMonthYearPickerVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Picker
              selectedValue={selectedMonth}
              onValueChange={(itemValue) => setSelectedMonth(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {months.map((month, index) => (
                <Picker.Item key={index} label={month} value={index} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedYear}
              onValueChange={(itemValue) => setSelectedYear(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {renderYearOptions()}
            </Picker>
            <View
              style={[globalStyles.buttonContainer, styles.buttonContainer]}
            >
              <Button.Base
                title={'appliquer'}                
              />

              <SecondaryButton
              title='annuler'
              action={() => setMonthYearPickerVisibility(false)}
              left
              modalMode
            />
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.dark.primaryLight,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  arrow: {
    fontSize: 20,
    fill: Colors.dark.primaryDark,
  },
  month: {
    fontSize: 14,
    color: Colors.dark.primaryDark,
    fontFamily: 'Owners-Medium',
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dayOfWeekContainer: {
    width: '14.28%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayOfWeek: {
    color: Colors.dark.dimmedLight,
    fontSize: 14,
    fontFamily: 'Owners-Medium',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 6 * 30 + 5 * 12, // 6 weeks of 30px height with 12px margin-bottom
  },
  day: {
    width: '14.28%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  dayContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  selectedDay: {
    backgroundColor: Colors.dark.yellow,
    borderRadius: 15,
    width: 30,
    height: 30,
  },
  selectedDayText: {
    color: Colors.dark.primaryDark,
    fontFamily: 'Owners-Medium',
  },
  otherMonthDayText: {
    color: Colors.dark.dimmedLight,
  },
  dayText: {
    color: Colors.dark.primaryDark,
    fontFamily: 'Owners-Medium',
  },
  arrowRight: {
    transform: [{ rotate: '180deg' }],
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: Colors.dark.primaryLight,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.dark.primaryLight,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.dark.primaryDark,
    fontFamily: 'Owners-Medium',
  },
  picker: {
    width: '100%',
    color: Colors.dark.primaryDark,
  },
  pickerItem: {
    color: Colors.dark.primaryDark,
    fontFamily: 'Owners-Medium',
  },
  buttonContainer: {
    gap: 25,
  },
  chevronTouchable: {
    padding: 10,
  },
});

export default BirthdatePicker;
