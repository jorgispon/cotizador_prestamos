import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {

    const {capital, interes, months, total, errorMessage} = props;

  return (
    <View style={styles.content}>
      {total && (
          <View style={styles.boxResult}>
              <Text style={styles.title}>RESUMEN</Text>
              <DataResult title="Cantidad solicitada" value={` ${capital} €`}/>
              <DataResult title="Interés %" value={` ${interes} %`}/>
              <DataResult title="Plazos" value={` ${months} meses`}/>
              <DataResult title="Pago mensual" value={` ${total.pagoMensual} €`}/>
              <DataResult title="Pago total" value={` ${total.pagoTotal} €`}/>
          </View>
      )}
      <View>
          <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  )
}

//Nuevo componente para renderizar
function DataResult(props) {
    const {title, value} = props;

    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    content: {
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30,
        color: 'red'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    value: {
        flexDirection: 'row', //Esto es para que se ponga uno al lado de otro
        justifyContent: 'space-between', //Para que un dato se vaya a la izquierda y otro a la derecha
        marginBottom: 20 
    }
})