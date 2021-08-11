import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class MyHeader extends React.Component{
render(){
  return(
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>BOOK SANTA</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
 textStyle: {
   fontWeight: "bold",
   fontSize: 25,
   color: "blue",
   padding: 20,
   textAlign: "center" 
 },
 viewStyle: {
   backgroundColor: "pink"

  }
});
export default MyHeader;