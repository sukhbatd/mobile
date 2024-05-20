import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';

import { signInWithEmailAndPassword, signOut,createUserWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../../zustand/store'; // Adjust the path if necessary
import { auth } from '@/firebase';

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const { user, setUser, clearUser } = useAuthStore();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({ userName: user.email || '', password: user.uid || '' });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => clearUser())
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text>Welcome, {user.userName}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});
