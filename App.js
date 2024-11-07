import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from'react';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      time: 0
    }

    this.iniciaTime = this.iniciaTime.bind(this)

  }

  iniciaTime(){
    setInterval(()=>{
      this.setState({time:this.state.time + 1});
    },1000)
  }

  paraTime(){
    clearInterval();
    this.setState({time:0});
  }

  render() {
    return(
      <View style={styles.main}>
        <View style={styles.container}>
          <Image style={styles.img} source={require("./assets/cronometro.png")}/>
          <Text style={styles.cronom}>{this.state.time}</Text>
        </View>


        <View style={styles.btnView}>
          <TouchableOpacity  style={styles.botao} onPress={this.iniciaTime}>
            <View style={styles.btnArea}>
              <Text>Parar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.state.time}>
            <View style={styles.btnArea}>
              <Text>Limpar</Text>
            </View>
          </TouchableOpacity>
        </View>

        
        <Text style={styles.textoCrono}>Ultimo tempo: 3.70s</Text>
      
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
