import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';


export default function TodoList() {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#3143e8',
        },
        appTitle: {
          color: '#fff',
          fontSize: 36,
          marginTop: 30,
          marginBottom: 30,
          fontWeight: '300',
          textAlign: 'center',
          backgroundColor: '#3143e8',
        },
        card: {
          backgroundColor: '#fff',
          flex: 1,
          borderTopLeftRadius: 10, // to provide rounded corners
          borderTopRightRadius: 10, // to provide rounded corners
          marginLeft: 10,
          marginRight: 10,
        },
        input: {
          padding: 20,
          borderBottomColor: '#bbb',
          borderBottomWidth: 1,
          fontSize: 24,
          marginLeft: 20,
        },
    });
    
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.appTitle}>Hello Poem</Text>
          <View style={styles.card}>
            <TextInput style={styles.input} placeholder="Add an item!" />
            <ScrollView>
                <Text>TodoList</Text>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    };
    
