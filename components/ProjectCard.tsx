import { Image, StyleSheet, SafeAreaView, View, StatusBar, TouchableOpacity, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { FC, ReactElement } from 'react';

interface CardProps {
    idx: number;
    title: string;
    press: () => void;
    bgColor: string;
    adv: number;
}

const ProjectCard:FC<CardProps> = ({idx, title, press, bgColor, adv })   => {
    return(
        <Pressable onPress={press} key={idx}
            style={{
                backgroundColor: bgColor, 
                height: '100%', 
                width: 270, 
                borderRadius: 14, 
                marginRight: 20, 
                paddingHorizontal: 16, 
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 6,
                elevation: 7,
            }}
        >
            <View style={{flexDirection: 'row', width: '100%', height: '45%'}}>
                <View style={{flex: 1,  paddingTop: 16, }}>
                    <Text numberOfLines={2} style={{color: '#FFFFFF', fontSize: 22}}>{title}</Text>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-end', paddingTop: 16,}}>
                    <TouchableOpacity style={{height: 30, width: 30 , alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Ionicons
                            name={'ellipsis-horizontal'}
                            size={16}
                            color={'#FFFFFF'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{width: '100%', height: 40}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12, color: '#FFFFFF', opacity: 0.6}}>{'Progress'}</Text>
                    <Text style={{fontSize: 12, color: '#FFFFFF', opacity: 0.6}}>{adv +'%'}</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 6}}>
                    <View style={{height: 5, width: '18%', backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
                        <View style={{backgroundColor:'#FFFFFF', width:'100%', height:'100%' ,  borderRadius: 3}} />
                    </View>

                    <View style={{height: 5, width: '18%', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 3}}>
                        <View style={{backgroundColor:'#FFFFFF', width:'100%', height:'100%' ,  borderRadius: 3}} />
                    </View>

                    <View style={{height: 5, width: '18%', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 3}}>
                        <View style={{backgroundColor:'#FFFFFF', width:'70%', height:'100%' ,  borderRadius: 3}} />
                    </View>
                    <View style={{height: 5, width: '18%', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 3}}>
                        <View style={{backgroundColor:'#FFFFFF', width:'0%', height:'100%' ,  borderRadius: 3}} />
                    </View>

                    <View style={{height: 5, width: '18%', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 3}}>
                        <View style={{backgroundColor:'#FFFFFF', width:'0%', height:'100%' ,  borderRadius: 3}} />
                    </View>
                </View>
            </View>

            <View>
                <View></View>
                <View></View>
            </View>
        </Pressable>
    )
}

export default ProjectCard;