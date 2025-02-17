import { Image, StyleSheet, SafeAreaView, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchBar  () {
    return(
        <View 
            style={{
                height: 70, 
                width: '100%',  
                paddingHorizontal: 16, 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}
        >
            <TouchableOpacity 
                style={{
                    height: 50, 
                    width: '100%',  
                    flexDirection: 'row', 
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#EEEEEE',
                    borderRadius: 12,
                    paddingHorizontal: 10
                }}
            >
                <Ionicons
                    name={ 'search-outline'}
                    size={18}
                    color={'#797979'}
                />

                <View style={{paddingLeft: 20}}>
                    <Text style={{color: '#989898'}}>{'Find your Task, Projects ...'}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}
