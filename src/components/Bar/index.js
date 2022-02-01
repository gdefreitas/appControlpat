import React from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Appbar } from 'react-native-paper';
import { Branco } from '../../styles/index.js';
import { useHistory } from 'react-router-dom'
import styles from './styles.js';

function Bar({home, children}){
  const navigation = useNavigation();
  const history = useHistory();
 return <Appbar style={styles.bottom}>
   {home ? null : <Appbar.BackAction onPress={() => navigation.goBack()} color={Branco}/>}
   <Text style={home ? styles.textHome : styles.text}>{children}</Text>
  </Appbar>
};

export default Bar;