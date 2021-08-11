import * as React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MyHeader } from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email_id: '',
      firstName: '',
      lastName: '',
      address: '',
      docId: '',
      mobileNumber: '',
    };
  }

  componentDidMount = () => {
    this.getUserDetails();
  };

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('Users')
      .where('userName', '==', email)
      .get()
      .then((detailsSaved) => {
        detailsSaved.forEach((doc) => {
          var data = doc.data();
          this.setState({
            email_id: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            docId: doc.id,
            mobileNumber: data.mobileNumber,
          });
        });
      });
  };

  updateUserDetails=()=>{
db.collection('Users').doc(this.state.docId).
update({
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "address": this.state.address,
      "mobileNumber": this.state.mobileNumber
})
Alert.alert("Your profile has been updated.")
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <View style={styles.formContainer}>
                <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  mobileNumber: text
                })
              }}
                value ={this.state.mobileNumber}
            />
                  <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
                value ={this.state.address}
            />
      
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.updateUserDetails();
            }}>
            <Text style={styles.buttonText}>Update Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});
