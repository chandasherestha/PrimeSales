import {StyleSheet} from 'react-native';
import {FONTS} from '../assets/theme';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  linerGradient: {height: 220},
  menuStyle: {width: 27, height: 19, marginTop: 27},
  companyLogo: {width: 150, height: 45, marginTop: 15},
  notificationStyle: {width: 25, height: 25, marginTop: 27},
  salesProfile: {
    width: '90%',
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 23,
    alignSelf: 'center',
    shadowColor: '#000',
    elevation: 5,
    position: 'absolute',
    top: 96,
  },
  firstView: {flexDirection: 'row', justifyContent: 'space-between'},
  profileImage: {
    borderRadius: 1000,
    width: 50,
    height: 50,
    marginTop: 18,
    marginLeft: 17,
  },
  sideBox: {
    width: '30%',
    height: 21,
    backgroundColor: ' rgba(255, 186, 109, 1)',
    borderBottomLeftRadius: 13,
    borderTopLeftRadius: 13,
    top: 30,
    left: 6,
  },
  salesText: {
    fontSize: 15,
    fontWeight: '800',
    color: 'rgba(135, 135, 135, 1)',
    ...FONTS.largeTitle,
    marginTop: 20,
  },
  sideBoxText: {color: '#fff', textAlign: 'center'},
  stockImage: {width: 20, height: 20},
  stockText: {color: 'rgba(84, 130, 182, 1)', fontWeight: '600', fontSize: 12},
  secondView: {flexDirection: 'row'},
  stockDetails: {width: '70%'},
  productImage: {width: '30%', marginTop: 36},
  stockInfo: {
    fontSize: 10,
    fontWeight: '600',
    ...FONTS.largeTitle,
    color: 'rgba(135, 135, 135, 1)',
    marginLeft: 23,
    marginTop: 7,
  },
  productImageStyle: {width: 72, height: 100},
  floorStockDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 50,
    marginTop: 7,
  },
  skyBlue: {
    width: 22,
    height: 28,
    backgroundColor: 'rgba(60, 221, 221, 1)',
    borderRadius: 5,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  },
  purple: {
    width: 22,
    height: 28,
    backgroundColor: 'rgba(188, 132, 243, 1)',
    borderRadius: 5,
  },
  yellow: {
    width: 22,
    height: 28,
    backgroundColor: 'rgba(223, 226, 58, 1)',
    borderRadius: 5,
  },
  priceDetail: {
    color: 'rgba(135, 135, 135, 1)',
    fontSize: 15,
    fontWeight: '400',
  },
  menu: {marginTop: 135, marginLeft: 27},
  menuText: {color: 'rgba(36, 174, 231, 1)', fontSize: 15, fontWeight: '700'},
  menuSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  menuContainer: {
    width: 94,
    height: 94,
    borderColor: '#4A96C6',
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 9,
    borderRadius: 12,
  },
  imageStyle: {width: 70, height: 70, marginTop: 12, marginLeft: 10},
  dispatchStyle: {color: '#24AEE7', fontSize: 15, fontWeight: '700'},
  shareImage: {width: 20, height: 20},
  dispatchBoxStyle: {
    width: '90%',
    height: 165,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    shadowColor: '#000',
    elevation: 8,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 7,
  },
  dispatchTitle: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(36, 174, 231, 1)',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    elevation: 4,
  },
  dispatchTextStyle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '700',
    padding: 10,
  },
  subDetail: {flexDirection: 'row', padding: 10},
  Text: {fontSize: 13, color: '#000', fontWeight: '400'},
  dispatchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  latestDispatchBox: {
    width: '90%',
    height:178,
    borderWidth: 1,
    shadowColor: '#000',
    elevation: 5,
    backgroundColor: '#fff',
    borderColor: '#C1C1C1',
    alignSelf: 'center',
    borderRadius: 8,
  },
  latestDispatchText:{fontSize: 13, color: '#000', fontWeight: '400',marginTop:3},
  purpleStyle:{width:"100%",height:25,backgroundColor:"rgba(207, 175, 238, 1)",borderRadius:8,shadowColor:"#000",elevation:2,flexDirection:"row",marginBottom:10},
  skyBlueStyle:{width:"100%",height:25,backgroundColor:"rgba(36, 174, 231, 1)",borderRadius:8,shadowColor:"#000",elevation:2,flexDirection:"row",marginBottom:10}
});
