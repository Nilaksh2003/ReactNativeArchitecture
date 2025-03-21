import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { styles } from '@/screens/Login/Login.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { shadow } from '@/theme';

export function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((state) => errorsSelector([TYPES.LOGIN], state), shallowEqual);
  const isLoading = useSelector((state) => isLoadingSelector([TYPES.LOGIN], state));

  const handleSubmit = () => {
    dispatch(login(userName, password));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
        <TextField
          autoCapitalize="none"
          accessibilityHint="Enter your username"
          accessibilityLabel="Username"
          onChangeText={setUserName}
          placeholder="Username"
          value={userName}
        />
        <TextField
          secureTextEntry
          accessibilityHint="Enter your password"
          accessibilityLabel="Password"
          autoCapitalize="none"
          onChangeText={setPassword}
          placeholder="Password"
          textContentType="password"
          value={password}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? 'Loading' : 'Login'}
        />
      </View>
    </View>
  );
}
