import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

//import components needed
import GoalItem from './components/GoalItem.component';
import GoalInput from './components/GoalInput.component';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //all functions on App's component
  const addGoalHandler = goalTitles => {
    // arrow function in function before for guarantee the latest snapshoot before it then applies your state
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitles }]);
    //hide modal after submit gaol's value
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      // if list on click, items will show all of item who is not same on clicked id
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  };

  const cancelGoalAdditionHanler = () => {
    setIsAddMode(false);
  };

  // render ui App.js
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHanler} />
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

// we prefer using stylesheet because adding performance and we can also add error handling on style
const styles = StyleSheet.create({
  screen: {
    padding: 30

  }
})