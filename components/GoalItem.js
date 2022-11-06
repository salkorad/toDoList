import { StyleSheet, Text, Pressable, View } from 'react-native';
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
        <Pressable 
            android_ripple={{color: '#210644'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem }
        >
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 9,
        borderRadius: 6,
        backgroundColor: 'lightgreen',
      },
    pressedItem: {
          opacity: 0.5,
      },
    goalText: {
        color:'blue',
        padding: 8
    }
});