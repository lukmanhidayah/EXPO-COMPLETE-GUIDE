import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

//import components needed
import GoalItem from './components/GoalItem.component';
import GoalInput from './components/GoalInput.component';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  //all functions on App's component
  const addGoalHandler = goalTitles => {
    // arrow function in function before for guarantee the latest snapshoot before it then applies your state
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitles }])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      // if list on click, items will show all of item who is not same on clicked id
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  };

  // render ui
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={
          itemData => (<GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />)
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

  }
})