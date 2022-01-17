import React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Branco } from '../../styles/index.js';
import { useHistory } from 'react-router-dom'
import styles from './styles.js';

function Bar({home, children}){
  const history = useHistory();
 return <Appbar style={styles.bottom}>
   {home ? null : <Appbar.BackAction onPress={() => history.goBack()} color={Branco}/>}
   <Text style={home ? styles.textHome : styles.text}>{children}</Text>
  </Appbar>
};

export default Bar;