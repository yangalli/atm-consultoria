import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

const Estilos = {

  textoTitulo: {
    color: '#B9C941',
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

  detalheClientes: {
    padding: 20
  },

  textoCliente: {
    fontSize: 18,
    marginLeft: 20
  }

}

const cliente1 = require('../../assets/cliente1.png');
const cliente2 = require('../../assets/cliente2.png');
const detalheCliente = require('../../assets/detalhe_cliente.png');


export default class CenaClientes extends React.Component {
  render() {
    const { textoTitulo, cabecalho, detalheClientes, textoCliente, fundo } = Estilos;
    return (
      <View style={fundo}>
        <StatusBar
          hidden={true}
        />

        <View style={cabecalho}>
          <Image source={detalheCliente} />
          <Text style={textoTitulo}>Nossos Clientes</Text>
        </View>

        <View style={detalheClientes}>
          <Image source={cliente1} />
          <Text style={textoCliente}>Lorem Ipsum</Text>
        </View>

        <View style={detalheClientes}>
          <Image source={cliente2} />
          <Text style={textoCliente}>Lorem Ipsum</Text>
        </View>

      </View>
    );
  }
}
