import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {

   //React Hooks
   const [enteredGoal, setEnteredGoal] = useState('');

   //fucntion on GoalInput Component
   const goalInputHandler = (enterText) => {
      setEnteredGoal(enterText);
   };
   return (
      <View style={styles.inputContainer}>
         <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
         />
         <Button
            title="ADD"
            onPress={props.onAddGoal.bind(this, enteredGoal)}
         />
      </View>
   )
}

export default GoalInput


const styles = StyleSheet.create({
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
   }
});