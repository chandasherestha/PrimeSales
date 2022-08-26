import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../Style/Login';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <View>
        <LinearGradient
          style={styles.linerStyle}
          colors={['rgba(72, 176, 251, 0.85)', 'rgba(215, 217, 128, 0)']}>
          <Image
            source={require('../../assets/image-1.png')}
            style={styles.companyLogo}></Image>
          <Text style={styles.title}>PhoneNumber / Email address</Text>
          <View style={styles.emailInput}>
            <TextInput
              style={styles.emailText}
              placeholder="Email address"
              onChangeText={email => setEmail(email)}
            />
          </View>
        </LinearGradient>
      </View>
      <View>
        <Text style={styles.passwordTitle}> Password</Text>
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.passwordText}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          secureTextEntry={hidePass ? true : false}
          right={
            <TextInput.Icon
              name={hidePass ? 'eye-off' : 'eye'}
              color={'#AEAEB2'}
              onPress={() => setHidePass(!hidePass)}
            />
          }
        />
      </View>
      <View style={styles.loginBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.loginStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
