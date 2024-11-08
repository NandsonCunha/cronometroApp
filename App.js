import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from'react';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      
      timer:null,
      number:0,
      mudarBtn: 'Iniciar',
    }

    this.iniciaTime = this.iniciaTime.bind(this)
    this.limpaTimer = this.limpaTimer.bind(this)

  }

  iniciaTime() {
    if (this.state.timer === null) {
      const timer = setInterval(() => {
        this.setState(prevState => ({
          number: prevState.number + 0.1
        }));
      }, 100);

      this.setState({
        timer: timer,
        mudarBtn: 'Parar',
      });
    } else {
      clearInterval(this.state.timer);
      this.setState({
        timer: null,
        mudarBtn: 'Iniciar',
      });
    }
  }

  limpaTimer() {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      number: 0,
      mudarBtn: 'Iniciar',
    });
  }
  render() {
    return(
      <View style={styles.main}>
        <View style={styles.container}>
          <Image style={styles.img} source={require("./assets/cronometro.png")}/>
          <Text style={styles.cronom}> {this.state.number.toFixed(1)} </Text>
        </View>


        <View style={styles.btnView}>
          <TouchableOpacity  style={styles.botao} onPress={this.iniciaTime}>
            <View style={styles.btnArea}>
              <Text> {this.state.mudarBtn} </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.limpaTimer}>
            <View style={styles.btnArea}>
              <Text>Limpar</Text>
            </View>
          </TouchableOpacity>
        </View>

        
        <Text style={styles.textoCrono}>Ultimo tempo: 0.0s</Text>
      
      </View>
    )
  
    }

  }

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    marginTop: 90,
  },

  cronom:{
    marginTop:-150,
    fontSize: 80,
    color: '#FFF',
    textAlign: 'center',
    fontWeight:'bold',
  },

  container:{
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },  

  botao:{
    width: 130,
    height:50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'red', 
    borderRadius: 15,
    margin:20,
  },

  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
  },

  btnView:{
    flex:1,
    flexDirection:'row',
    marginTop: 100,
  },

  textoCrono:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})


export default App;
