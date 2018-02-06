import React from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Estilos = {

  iconesPrincipal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },

  fundo: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  logoPrincipal: {
    alignSelf: 'center',
    marginTop: 30
  }

}

const logo = require('../../assets/logo.png');
const menuCliente = require('../../assets/menu_cliente.png');
const menuContato = require('../../assets/menu_contato.png');
const menuEmpresa = require('../../assets/menu_empresa.png');
const menuServico = require('../../assets/menu_servico.png');

export default class CenaPrincipal extends React.Component {
  render() {
    const { iconesPrincipal, logoPrincipal, fundo } = Estilos;
    return (
      <View style={fundo}>
        <StatusBar
          hidden={true}
        />

        <Image style={logoPrincipal} source={logo} />

        <View style={iconesPrincipal}>
          
          <TouchableOpacity onPress={() => Actions.cenaClientes()}>
            <Image source={menuCliente} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => Actions.cenaContatos()}>
            <Image source={menuContato} />
          </TouchableOpacity>

        </View>

        <View style={iconesPrincipal}>

          <TouchableOpacity onPress={() => Actions.cenaEmpresa()}>
            <Image source={menuEmpresa} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.cenaServicos()}>
            <Image source={menuServico} />
          </TouchableOpacity>

        </View>
        
      </View>
    );
  }
}
