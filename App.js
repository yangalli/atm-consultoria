import React from 'react';
import { Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

const Estilos = {

  tituloPrincipal: {
    backgroundColor: '#CCC'
  },

  tituloClientes: {
    backgroundColor: '#B9C941'
  },

  tituloContatos: {
    backgroundColor: '#61BD8C'
  },

  tituloEmpresa: {
    backgroundColor: '#EC7148'
  },

  tituloServicos: {
    backgroundColor: '#19D1C8'
  },

  textoTitulo: {
    alignSelf: 'center'
  },

}

export default class App extends React.Component {
  render() {
    const { tituloPrincipal, textoTitulo, tituloClientes, tituloContatos, tituloEmpresa, tituloServicos } = Estilos
    return (
      <Router titleStyle={textoTitulo} >
        <Scene key='root' title='ATM Consultoria' >
          <Scene key="cenaPrincipal" navigationBarStyle={tituloPrincipal} titleStyle={textoTitulo}
            component={CenaPrincipal}
          />
          <Scene 
            key='cenaClientes' navigationBarStyle={tituloClientes} titleStyle={textoTitulo}
            component={CenaClientes}
          />
          <Scene
            key='cenaContatos' navigationBarStyle={tituloContatos} titleStyle={textoTitulo}
            component={CenaContatos}
          />
          <Scene
            key='cenaEmpresa' navigationBarStyle={tituloEmpresa} titleStyle={textoTitulo}
            component={CenaEmpresa}
          />
          <Scene
            key='cenaServicos' navigationBarStyle={tituloServicos} titleStyle={textoTitulo}
            component={CenaServicos}
          />
        </Scene>
      </Router>
    );
  }
}
