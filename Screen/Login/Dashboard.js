import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../Style/Dashboard';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slider from './Slider';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{position: 'relative'}}>
          <LinearGradient
            style={styles.linerGradient}
            colors={['rgba(72, 176, 251, 0.85)', 'rgba(215, 217, 128, 0)']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <Image
                style={styles.menuStyle}
                source={require('../../assets/Vector.png')}></Image>
              <Image
                style={styles.companyLogo}
                source={require('../../assets/image-1.png')}></Image>
              <Image
                style={styles.notificationStyle}
                source={require('../../assets/Notification.png')}></Image>
            </View>
          </LinearGradient>

          <View style={styles.salesProfile}>
            <View style={styles.firstView}>
              <View>
                <Image
                  source={require('../../assets/PP-1.png')}
                  style={styles.profileImage}></Image>
              </View>
              <View>
                <Text style={styles.salesText}>RUPESH MALLA</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.stockImage}
                    source={require('../../assets/image.png')}></Image>
                  <Text style={styles.stockText}>SALES OFFICER</Text>
                </View>
              </View>
              <View style={styles.sideBox}>
                <Text style={styles.sideBoxText}>24 CARAT</Text>
              </View>
            </View>
            <View style={styles.secondView}>
              <View style={styles.stockDetails}>
                <View style={styles.stockInfo}>
                  <Text>FLOOR STOCK</Text>
                </View>
                <View style={styles.floorStockDesc}>
                  <View style={styles.skyBlue}>
                    <Text style={styles.textStyle}>F</Text>
                  </View>
                  <View>
                    <Text style={styles.priceDetail}>395</Text>
                  </View>
                  <View style={styles.purple}>
                    <Text style={styles.textStyle}>H</Text>
                  </View>
                  <View>
                    <Text style={styles.priceDetail}>83</Text>
                  </View>
                  <View style={styles.yellow}>
                    <Text style={styles.textStyle}>Q</Text>
                  </View>
                  <View>
                    <Text style={styles.priceDetail}>456</Text>
                  </View>
                </View>
                <View style={styles.stockInfo}>
                  <Text>TOTAL BOTTLE ORDERED</Text>
                </View>
                <View style={styles.floorStockDesc}>
                  <View style={styles.skyBlue}>
                    <Text style={styles.textStyle}>F</Text>
                  </View>
                  <View>
                    <Text style={styles.priceDetail}>86</Text>
                  </View>
                  <View style={styles.purple}>
                    <Text style={styles.textStyle}>H</Text>
                  </View>
                  <View>
                    <Text style={styles.priceDetail}>93</Text>
                  </View>
                  <View style={styles.yellow}>
                    <Text style={styles.textStyle}>Q</Text>
                  </View>
                  <View>
                    <Text style={styles.priceDetail}>999</Text>
                  </View>
                </View>
              </View>

              <View style={styles.productImage}>
                <Image
                  style={styles.productImageStyle}
                  source={require('../../assets/image-9.png')}></Image>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Menu</Text>
        </View>
        <View style={styles.menuSection}>
          <View>
            <View style={styles.menuContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/store-2.png')}
                  style={styles.imageStyle}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={{marginTop: 9, color: '#000'}}>
                Create New Outlet
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.menuContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/inventory-2.png')}
                  style={styles.imageStyle}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={{marginTop: 9, color: '#000'}}>Floor Listing</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.menuContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/cargo-2.png')}
                  style={styles.imageStyle}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={{marginTop: 9, color: '#000'}}>Order Listing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.dispatchSection}>
          <Text style={styles.dispatchStyle}>Dispatch Pending</Text>
          <Image
            style={styles.shareImage}
            source={require('../../assets/share.png')}></Image>
        </View>
        <View style={styles.dispatchBoxStyle}>
          <View style={styles.dispatchTitle}>
            <View style={{width: '50%'}}>
              <Text style={styles.dispatchTextStyle}>Outlet</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.dispatchTextStyle}>Date</Text>
            </View>
          </View>
          <View style={styles.subDetail}>
            <View style={{width: '50%'}}>
              <Text style={styles.Text}>Sukrapath Ashok Supplies</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.Text}>17/12/2021</Text>
            </View>
          </View>
          <View style={styles.subDetail}>
            <View style={{width: '50%'}}>
              <Text style={styles.Text}>ST Liquor Shop</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.Text}>17/12/2021</Text>
            </View>
          </View>
          <View style={styles.subDetail}>
            <View style={{width: '50%'}}>
              <Text style={styles.Text}>Kamal madira</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.Text}>17/12/2021</Text>
            </View>
          </View>
        </View>
        <View
          style={styles.dispatchSection}>
          <Text style={styles.dispatchStyle}>Latest Dispatch</Text>
          <Image
            style={styles.shareImage}
            source={require('../../assets/share.png')}></Image>
        </View>
        <View style={styles.latestDispatchBox}>
<View style={styles.purpleStyle}>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>17/12/2021</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Sukrapath Supplies</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Baneshwor</Text></View>
  </View>
  <View style={styles.skyBlueStyle}>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>17/12/2021</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>ST Liquor Shop</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Sinamangal</Text></View>
  </View>
  <View style={styles.purpleStyle}>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>17/12/2021</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Kamal madira</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Maitidevi</Text></View>
  </View>
  <View style={styles.skyBlueStyle}>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>17/12/2021</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Sudip Liquor Shop</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Battisputali</Text></View>
  </View>
  <View style={styles.purpleStyle}>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>17/12/2021</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>kharel kirana pasal</Text></View>
  <View style={{width:"33%"}}><Text style={styles.latestDispatchText}>Maitidevi</Text></View>
  </View>
   </View>
  <View style={{borderWidth:1,width:"100%",height:70,borderTopColor:"#24AEE7",marginTop:40,flexDirection:"row",justifyContent:"space-between",padding:10}}>
    <View>
      <Image source={require('../../assets/shop-1.png')} style={{width:30,height:30}}></Image>
      <Text></Text>
    </View>
    <View>
      <Image source={require('../../assets/boxes-1.png')} style={{width:30,height:30}}></Image>
    </View>
    <View>
      <Image source={require('../../assets/Ellipse-15.png')}></Image>
      <Image source={require('../../assets/Ellipse-15.png')}></Image>
    </View>
    <View>
    <Image source={require('../../assets/package-1.png')}></Image>
    </View>
    <View>
    <Image source={require('../../assets/user-1.png')}></Image>
    </View>
    </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
