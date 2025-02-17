import { Image, StyleSheet, SafeAreaView, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { FC, ReactElement } from 'react';

interface ButtonProps {
    title: string;
    press: () => void;
}
const AddBtn:FC<ButtonProps> = ({title, press })   => {
    return(
        <TouchableOpacity onPress={press}
            style={{
                height: 40,
                minWidth: 80,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#EEEEEE',
                borderRadius: 12,
                paddingHorizontal: 8,
            }}
        >
            <Ionicons
                name={'add'}
                size={16}
                color={'#0077B6'}
            />
            <Text style={{color: '#0077B6', fontSize: 12, fontWeight: '500', marginLeft: 8}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AddBtn;