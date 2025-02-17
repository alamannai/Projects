import { Image, StyleSheet, SafeAreaView, View, StatusBar, TouchableOpacity, Text, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddBtn  from './AddBtn';
import ProjectCard  from './ProjectCard';

export default function ProjectsField () {
    const data = [
        {title: 'Duxica Dribble Team', bgColor: '#577DFF', adv: 55}, 
        {title: 'Crypto Wallet Redesign', bgColor: '#000000', adv: 20},
        {title: 'Game Science Team', bgColor: '#FFA500', adv: 70},
    ]

    return(
        <View style={{flex: 1}}>
            <View style={{height: 60, width: '100%', flexDirection: 'row', paddingHorizontal: 16, marginTop: 20, }}>
                <View style={{height: '100%', width: '70%'}}>
                    <Text style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>{'Projects'}</Text>
                    <Text style={{color: '#989898', fontSize: 12}}>
                        You have {''}
                        <Text style={{color: 'blue', fontSize: 12, opacity: 0.4}}>{ data.length }</Text> {''}
                        Projects
                    </Text>
                </View>
                <View style={{height: '100%', width: '30%', alignItems: 'flex-end'}}> 
                    <AddBtn title='Add' press={() => console.log('press')} />
                </View>
            </View>

            <View style={{flex: 1, width: '100%', paddingVertical: 8, paddingLeft: 16, }}>
                {data.length === 0?
                    <View style={{flex: 1, width:'100%' ,alignItems:'center', justifyContent:'center', }}>
                        <Text style={{color: '#000000', fontSize: 12, opacity: 0.4}}>{'You have no projects yet.'}</Text>
                    </View>
                :
                    <FlatList 
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) =>  
                            <ProjectCard 
                                idx={index}
                                title={item?.title} 
                                press={() => console.log('projec card ', index )} 
                                bgColor={item?.bgColor} 
                                adv={item?.adv}
                            />
                        }
                    />
                }
                
            </View>
        </View>
    )
}