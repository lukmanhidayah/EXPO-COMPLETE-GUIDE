import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
   return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
         <View style={styles.listItem}>
            <Text >{props.title}</Text>
         </View>
      </TouchableOpacity>
   );
};

export default GoalItem;

// style of Goalitem
const styles = StyleSheet.create({
   listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderWidth: 1,
      borderColor: 'black'
   }
});