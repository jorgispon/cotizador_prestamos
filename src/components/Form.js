import React, {useState} from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from '../utils/colors';

export default function Form(props){

    const {setCapital, setInteres, setMonths} = props;
    const [selectedOptionPicker, setSelectedOptionPicker] = useState(null);
    
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
             <TextInput 
                placeholder="Cantidad a pedir"
                keyboardType='numeric'
                style={styles.input}
                onChange={e => setCapital(e.nativeEvent.text)}
             />
             <TextInput 
                placeholder="Interes %"
                keyboardType='numeric'
                style={[styles.input, styles.inputPercentage]}
                onChange={e => setInteres(e.nativeEvent.text)}
             />
            </View>
            <Picker
                selectedValue={selectedOptionPicker}
                style={pickerSelectStyles}
                onValueChange={(value) => [setSelectedOptionPicker(value), setMonths(value)]}
                >
                <Picker.Item label="Seleccione los plazos..." value=""/>
                <Picker.Item label="3 meses" value="3" />
                <Picker.Item label="6 meses" value="6" />
                <Picker.Item label="12 meses" value="12" />
                <Picker.Item label="24 meses" value="24" />
                <Picker.Item label="36 meses" value="36" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50, //Esto aplica tanto a paddingLeft como a paddingRight
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center' //Esto lo centra verticalmente
    },
    viewInputs: {
        flexDirection: 'row' //Esto es para que se coloquen uno al lado del otro
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20    
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5

    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff'
    }
});