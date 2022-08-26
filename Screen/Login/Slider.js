import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar,StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

// import styles from './LaunchingStyle';
const Launching = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [hidden, setHidden] = useState(true);
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true); 
  };
  const handleSubmit = () => {

  };


 
//   const RenderNextButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <StatusBar hidden={hidden} />
//         <Text style={styles.toptext}>Next</Text>
//       </View>
//     );
//   };


 
  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {/* {showRealApp ? (
        <View style={styles.container1}>
          <StatusBar hidden={hidden} />

          <Text style={styles.text}>Welcome to</Text>
          <Text style={styles.text1}>Ensure Insurance</Text>
          <Image
            style={styles.logoText}
            source={require('../assets/abc.png')}
          />
          <TouchableOpacity
            style={styles.button1}
            activeOpacity={0.5}
            onPress={() => handleSubmit()}>
            <Image
              source={require('../assets/Message.png')}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle1} />
            <Text style={styles.buttonText1}>Sign up  with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => handleSkip()}>
            <Text style={{marginTop: 15, color: '#AEAEB2'}}>Skip Login</Text>
          </TouchableOpacity>

          <View style={styles.pressableText}>
            <TouchableOpacity>
              <Text style={styles.registertext}>Already Registered?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => handleLogin()}>
            <Text style={styles.logintext}> Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : ( */}
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          activeDotStyle={{backgroundColor:'#F57722'}}
          
          dotStyle={{backgroundColor:'rgba(245, 119, 34, 0.2)'}}
        
         
        />
      
    </>
  );
};

export default Launching;

const slides = [
  {
    key: 's1',
    text: 'To maintain the standard of living to which you and your family are accustomed, you need sufficient money.',
    title: 'Endowment Plan',
    image: require('../../assets/image.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's2',
    title: 'Children’s Endowment Plan',
    text: 'This is a with profits endowment assurance plan available for children of 10 years or less.',
    image: require('../../assets/image-9.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's3',
    title: 'Money Back Plan',
    text: 'The bonus additions to the policy will be reckoned on the full SA and are payable at the end.',
    image: require('../../assets/image-1.png'),
    backgroundColor: '#FFFFFF',
  },
];



const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
      },
    
      introImageStyle: {
        marginTop: 0,
        width: '100%',
        height: 430,
      },
      toptext: {
        // color: 'black',
        fontSize: 15,
        fontWeight: '700',
        left: 13,
        color: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      skiptext: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 0,
        color: '#ffff',
      },
      skiptext1: {
        color: '#AEAEB2',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 0,
      },
      introTextStyle: {
        fontWeight: '400',
        color: '#333333',
        marginTop: 17,
        marginLeft: 32,
        marginRight: 32,
        lineHeight: 24,
        fontSize: 16,
      },
      introTitleStyle: {
        color: '#303030',
        marginTop: 35,
        marginLeft: 32,
        height: 32,
        fontWeight: '700',
        fontSize: 24,
        marginRight: 70,
        fontStyle: 'normal',
      },
      container1: {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1,
      },
    
      logoText: {
        marginTop: 75,
    
        height: 72,
        width: 210,
        alignSelf: 'center',
      },
      logoText1: {
        marginTop: 75,
        marginLeft: 97,
        marginRight: 96,
    
        width: 30,
        height: 30,
      },
    
      text: {
        color: '#4FB44E',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 238,
        fontWeight: '700',
        fontSize: 16,
        fontWeight: '400',
      },
    
      text1: {
        fontWeight: '700',
        color: '#4BB851',
        marginTop: 8,
        marginLeft: 20,
        marginRight: 135,
    
        fontSize: 24,
      },
    
      button: {
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        //width: '80%',
        marginTop: 80,
        flexDirection: 'row',
        marginLeft: 32,
        marginRight: 32,
      },
      buttonText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: 45,
      },
    
      button1: {
        backgroundColor: '#34C759',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        width: '80%',
        marginTop: 18,
        marginLeft: 48,
        marginRight: 48,
        flexDirection: 'row',
      },
    
      buttonText1: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 35,
      },
    
      pressableText: {
        backgroundColor: '#FAFAFA',
        fontWeight: '400',
        marginTop: 40,
        color: '#34C759',
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 12,
        marginLeft: 82,
        marginRight: 32,
        width: '85%',
        marginTop: 100,
      },
      buttonGPlusStyle: {
        borderWidth: 1,
        width: '80%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
        marginTop: 80,
        flexDirection: 'row',
        borderColor: '#E5E5EA',
      },
    
      buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
    
      buttonIconSeparatorStyle: {
        backgroundColor: '#FAFAFA',
        width: 1,
        height: 40,
      },
      buttonIconSeparatorStyle1: {
        backgroundColor: '#34C759',
        width: 1,
        height: 40,
      },
      buttonCircle: {
        backgroundColor: '#F57722',
        // borderColor: '#dfa00a',
        // borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        // marginRight: 50,
        flex: 30,
        width: '150%',
    
        // bottom:40,
        right: 20,
      },
      buttonCircle1: {
        // backgroundColor: '#34C759',
        // borderColor: '#dfa00a',
        // borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginRight: 20,
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // bottom:40
      },
      registertext: {
        marginLeft: 65,
        fontWeight: '500',
        color: '#8E8E93',
        height: 16,
        fontSize: 12,
      },
      logintext: {
        marginLeft: 3,
        fontWeight: '500',
        color: '#34C759',
        height: 16,
        fontSize: 12,
      },
    
})