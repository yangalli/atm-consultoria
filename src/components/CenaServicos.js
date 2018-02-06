import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

const Estilos = {

  textoTitulo: {
    color: '#19D1C8',
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

  detalhesServicos: {
    padding: 20
  },

  textoServico: {
    fontSize: 18,
    marginLeft: 20
  }


}

const detalheServico = require('../../assets/detalhe_servico.png');

export default class CenaServicos extends React.Component {
  render() {
    const { textoTitulo, cabecalho, detalhesServicos, textoServico, fundo } = Estilos;
    return (
      <View style={fundo}>
        <StatusBar
          hidden={true}
        />

        <View style={cabecalho}>
          <Image source={detalheServico} />
          <Text style={textoTitulo}>Contatos</Text>
        </View>

        <View style={detalhesServicos}>
          <Text style={textoServico}>- Consultoria</Text>
          <Text style={textoServico}>- Processos </Text>
          <Text style={textoServico}>- Acompanhamento de projetos</Text>
        </View>

      </View>
    );
  }
}
