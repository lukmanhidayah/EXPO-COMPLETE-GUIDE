import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    // arrow function in function before for guarantee the latest snapshoot before it then applies your state
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={
          itemData => (
            <View style={styles.listItem}>
              <Text >{itemData.item.value}</Text>
            </View>
          )
        }
      >
      </FlatList>
    </View >
  );
}

// we are using stylesheet because adding performancing and we can also add error handling
const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black'
  }
})