import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

const Estilos = {

  textoTitulo: {
    color: '#61BD8C',
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

  detalheContatos: {
    padding: 20
  },

  textoContato: {
    fontSize: 18,
    marginLeft: 20
  }


}

const detalheContato = require('../../assets/detalhe_contato.png');

export default class CenaContatos extends React.Component {
  render() {
    const { textoTitulo, cabecalho, detalheContatos, textoContato, fundo } = Estilos;
    return (
      <View style={fundo}>
        <StatusBar
          hidden={true}
        />

        <View style={cabecalho}>
          <Image source={detalheContato} />
          <Text style={textoTitulo}>Contatos</Text>
        </View>

        <View style={detalheContatos}>
          <Text style={textoContato}>TEL: (11) 3242-4520 </Text>
          <Text style={textoContato}>CEL: (61) 9913-2917 </Text>
          <Text style={textoContato}>EMAIL: contato@atmconsutoria.com</Text>
        </View>

      </View>
    );
  }
}
