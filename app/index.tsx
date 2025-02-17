import { Image, StyleSheet, SafeAreaView, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header  from '@/components/Header';
import SearchBar  from '@/components/SearchBar';
import ProjectsField  from '@/components/ProjectsField';
import AddBtn  from '@/components/AddBtn';


export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ backgroundColor: '#FCFAF6' , flex: 1}}
    >
      
      <View style={{height: '60%', width: '100%', paddingHorizontal: 6}}>
        <View style={{height: 40}}>
          <StatusBar
            animated={true}
            backgroundColor='#FCFAF6'
          />
        </View>

        <Header />
        
        <SearchBar />

        <ProjectsField />
      </View>
      <View style={{height: '40%', width: '100%', backgroundColor: '#F5F5F5'}}>
        <View >
        <View style={{height: 60, width: '100%', flexDirection: 'row', paddingHorizontal: 16, marginTop: 30, }}>
                <View style={{height: '100%', width: '70%'}}>
                    <Text style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>{`Today's Task`}</Text>
                    <Text style={{color: '#989898', fontSize: 12, fontWeight: '500'}}>{'Wednesday, 11 May'}</Text>
                </View>
                <View style={{height: '100%', width: '30%', alignItems: 'flex-end'}}> 
                    <AddBtn title='New Task' press={() => console.log('press')} />
                </View>
            </View>
        </View>
      </View>

    </SafeAreaView>
  );
}


