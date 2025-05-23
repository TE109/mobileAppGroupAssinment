import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FinishAccountSetupScreen = ({ navigation }) => {
  const handleFinish = () => {
    // Navigate to the desired next screen (e.g., Dashboard or HomeScreen)
    navigation.navigate('AdminMenuScreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.message}>
        You have finished setting up your account. Click finish.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.finishButton]} onPress={handleFinish}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  finishButton: {
    backgroundColor: '#4CAF50', // Green color for the finish button
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default FinishAccountSetupScreen;
