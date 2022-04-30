import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button, props} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors';

export default function App() {

  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  //El useEffect se ejecuta cuando algo se actualiza, en este caso cuando los valores capital, interes o months se modifiquen
  useEffect(() => {
    //Si todos los campos están informados, se ejecuta el calcular, sino el reset
    if(capital && interes && months){
      calculate();
    }else{
      reset();
    }
  }, [capital, interes, months])  

  const calculate = () => {
    reset();
    if(!capital){
      setErrorMessage("Añade la cantidad que quieres solicitar.");
    }else if(!interes){
      setErrorMessage("Añade el interés del prestamo.");
    }else if(!months){
      setErrorMessage("Selecciona los meses a pagar.");
    }else{
      const int = interes / 100;
      const fee = capital / ((1 - Math.pow(int + 1, -months)) / int);
      setTotal({
        pagoMensual: fee.toFixed(2).replace('.',','), //Sacar solo dos decimales y reemplazamos el punto por la coma
        pagoTotal: (fee * months).toFixed(2).replace('.',',')
      })
    }
  };
    
  //Función para limpiar los errores, esta se llamará al darle al botón Calcular
  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  }

  return (
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
      <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
      <Form 
        setCapital={setCapital} 
        setInteres={setInteres} 
        setMonths={setMonths}
      />
    </SafeAreaView>

    <ResultCalculation 
      capital={capital}
      interes={interes}
      months={months}
      total={total}
      errorMessage={errorMessage}/>

    <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 15
  }
});