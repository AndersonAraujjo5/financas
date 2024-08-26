import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const FinancialCategories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row', justifyContent: 'center', 
                alignItems: 'center', alignContent: 'center', gap: 52
            }}>
                <CategoryButton icon={
                    () => <AntDesign name='creditcard' size={24} />
                } label="Credito" color="#3498db" />
                <CategoryButton icon={
                    () => <AntDesign name='creditcard' size={24} />
                } label="Credito" color="#2ecc71" />
                <CategoryButton icon={
                    () => <FontAwesome5 name='coins' size={24} />
                } label="Credito" color="#1abc9c" />
                <CategoryButton icon={
                    () => <MaterialIcons name='pix' size={24} />
                } label="Credito" color="#e67e22" />
       
            </View>
        </ScrollView>
        </View>
    );
};

const CategoryButton = ({ icon: Icon, label, color }) => {

    return (
        <View>
            <TouchableOpacity style={[styles.button, {
                borderColor: color,
                shadowColor: color
            }]}>
                {
                    !Icon ?
                        <AntDesign name="creditcard" size={24} color={color} />
                        :
                        <Icon color={color} />
                }
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 22,
        marginHorizontal: 12,
        borderRadius: 8,
    },
    button: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    label: {
        marginTop: 5,
        fontSize: 12,
        color: '#333',
        textAlign: 'center'
    },
});

export default FinancialCategories;
