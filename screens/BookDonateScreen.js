import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';
import { ListItem } from 'react-native-elements';


export default class BookDonateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      requestedBookList: [],
    };
    this.requestRef = null;
  }

  componentDidMount = () => {
    this.getRequestedBookList();
  };

  componentWillUnmount = () => {
    this.requestRef;
  };

  getRequestedBookList = () => {
    this.requestRef = db
      .collection('requested_books')
      .onSnapshot((snapshot) => {
        var requestedBookList = snapshot.docs.map((document) =>
          document.data()
        );
        this.setState({
          requestedBookList: requestedBookList,
        });
      });
  };

  keyExtractor = (item, index) => index.toString();
  renderItems = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
          <TouchableOpacity style={styles.button}
           onPress ={()=>{
                this.props.navigation.navigate("ReceiverDetails")
              }}>
          <Text style={{color: 'white'}}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View>
        <MyHeader />
        <View style={{flex:1}}>
          {
            this.state.requestedBookList.length === 0? (
              <View style={styles.subContainer}>
              <Text style={{fontSize:20}}>List of all Books</Text>
              </View>
            ):(
              <FlatList
              keyExtractor = {this.keyExtractor}
              data = {this.state.requestedBookList}
              renderItem = {this.renderItems}
              ></FlatList>
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
