import {StyleSheet} from 'react-native';
import {FONTS} from '../assets/theme';
export default StyleSheet.create({
  linerStyle: {minHeight: 200, position: 'relative'},
  companyLogo: {
    height: 54,
    width: 191,
    marginTop: 60,
    alignSelf: 'center',
    marginBottom: 52,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginLeft: 32,
    ...FONTS.largeTitle,
  },
  emailInput: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    top: 200,
  },
  emailText: {color: 'black', opacity: 50, height: '100%'},
  passwordTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginLeft: 32,
    ...FONTS.largeTitle,
    marginTop: 60,
  },
  passwordInput:{width:"80%",height:50,alignSelf:"center",marginTop:10},
  passwordText:{color: 'black', opacity: 50, height: '100%'},
  loginBtn:{width:"80%",height:50,backgroundColor:'rgba(36, 174, 231, 1)',borderRadius:4,alignSelf:"center",marginTop:62},
  loginStyle:{color:"#fff",marginTop:12,textAlign:"center",fontWeight:"400",fontSize:15,...FONTS.h2}
});
