import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

function HomeScreen({ navigation }) {
    const [user, setUser] = useState('fukhaos');
    const [loading, setLoading] = useState(false);

    const url = `https://api.github.com/users/${user}`;

    const submit = async () => {
        setLoading(true);

        try {
            const response = await axios.get(url);
            navigation.navigate('Detail', { user: response.data});
        } catch (error) {
            alert("Usuário não encontrado!");
        }
        
        setLoading(false);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={styles.title}>Busca Usuário</Text>

            <TextInput style={styles.input} value={user} onChangeText={setUser} />

            <TouchableOpacity
                disabled={loading}
                style={styles.button}
                onPress={() => {
                    //navigation.navigate('Detail');
                    submit();
                }}
            >
                {loading == false && <Text style={styles.textButton}>BUSCAR</Text>}
                {loading == true && <ActivityIndicator color='white' />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    input: {
        color: 'white',
        width: 200,
        borderRadius: 15,
        height: 40,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: '#29088A',
        fontWeight: 'bold',

    },

    button: {
        width: 200,
        borderRadius: 15,
        height: 40,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',

    }
});

export default HomeScreen;