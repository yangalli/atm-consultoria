import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

const Estilos = {

  textoTitulo: {
    color: '#EC7148',
    fontSize: 30,
    margin: 20,
  },

  fundo: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  cabecalho: {
    flexDirection: 'row',
    marginVertical: 20
  },

  detalhesEmpresa: {
    padding: 20
  },

  textoEmpresa: {
    fontSize: 18,
    marginLeft: 20
  }


}

const detalheEmpresa = require('../../assets/detalhe_empresa.png');

export default class CenaEmpresa extends React.Component {
  render() {
    const { textoTitulo, cabecalho, detalhesEmpresa, textoEmpresa, fundo } = Estilos;
    return (
      <View style={fundo}>
        <StatusBar
          hidden={true}
        />

        <View style={cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={textoTitulo}>A Empresa</Text>
        </View>

        <View style={detalhesEmpresa}>
          <Text style={textoEmpresa}>Lorem Ipsum</Text>
        </View>

      </View>
    );
  }
}
