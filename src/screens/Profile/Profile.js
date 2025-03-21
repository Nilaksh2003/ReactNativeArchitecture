import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { styles } from '@/screens/Profile/Profile.styles';
import { typography } from '@/theme';

export function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={[typography.title, styles.title, { color: colors.text }]}>
      This screen has the iOS native large header.
      </Text>
      <Button title="Logout" onPress={logoutUser} />
    </View>
  );
}
