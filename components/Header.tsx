import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header  () {
  return(
    <View style={{height: 70, width: '100%',  paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={{width: '20%', height: '100%', justifyContent:'center' }}>
        <Image 
          source={require('../assets/images/user.jpg')} 
          style={{
            height: 50, 
            width: 50, 
            borderRadius: 25
          }} 
          resizeMode='center'
        />
      </TouchableOpacity>

      <View style={{flex: 1,  height: '100%', justifyContent: 'space-between', paddingVertical: 12}}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>{'Ala Mannai'}</Text>
        <Text style={{color: '#989898', fontSize: 12}}>{'Good Morning, Ala..'}</Text>
      </View>

      <View style={{width: '30%', height: '100%', justifyContent:'center', alignItems: 'flex-end' }}>
        <TouchableOpacity
          style={{
            height: 50, 
            width: 50, 
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#EEEEEE',
            position: 'relative'
          }} 
        >
          <Ionicons
            name={ 'notifications-outline'}
            size={22}
            color={'#00000'}
          />
          <View 
            style={{
              backgroundColor: '#EC9006', 
              height: 6 , 
              width: 6, 
              borderRadius: 3,
              position: 'absolute',
              bottom: 16,
              right: 16 
            }} 
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}