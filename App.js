import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';


// Get screen dimensions
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class App extends Component {
    constructor() {
      super()
      this.state = {
        dateSource: [
          {
            key: 'Caroline',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHV8Bn344Bjo5uOpkkdzcVypgrEeUG_4irHoZBzsqfg6YcC1s_&usqp=CAU'
          },
          {
            key: 'Jack',
            imageUrl: 'data:image/jpeg;base64,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'
          },
          {
            key: 'Chloé',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8FTWFmEuz4DBIlM8vt_ZceBk3_Dlyu7piWSky6G7O5T-uPJ00&usqp=CAU'
          },
          {
            key: 'Vincent',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN42BNiMt2flSxm3VkeMXxouZw90lMd2DHFard41mwpmWQOQn1&usqp=CAU'
          },
          {
            key: 'Elodie',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMPSzu4oDyFR9Ezvoy4j8oicRUxR0FP22jRN5Lecg07YQlnkTc&usqp=CAU'
          },
          {
            key: 'Sylvain',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxWhZQEwZJSnEUOsFLTc01EpkUPBq3wBqXHsgpKL7xA5mAQ-rB&usqp=CAU'
          },
          {
            key: 'Julie',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqyBCLTQ_FFL_dJC5TiY6-cKr932Ih1fVdfPIwL6p6FcZlJtID&usqp=CAU'
          },
        ]
      }
    }

    renderItem = ({ item }) => {
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View>
          <Image 
                source={{uri: item.imageUrl}}
                style={{width: 100, height: 100, margin: 15, display: 'block', marginLeft: 30, marginRight: 'auto',  borderRadius: 50}}
          />
          </View>
          <View style={{ flex: 1, flexDirection: 'center', marginLeft:30, marginTop:60 }}>
            <Text style={{ fontSize:18, marginBottom:15}}>
              {item.key}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'center', marginLeft:15, marginTop:60 }}>
            <TouchableOpacity
                style={styles.buttonDelete}>
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
       </View>

      )
    }

    renderSeparator = () => {
      return (
        <View
          style={{ heignt:1, width: width - 40, borderColor: '#FF80AB', borderWidth: 1 }}>
        </View>
      )
    }
    
  render() {
      return (
      <View style={styles.container}>
              <FlatList
                data={this.state.dateSource}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={this.renderSeparator}
              />   
          </View>
      );
  }

}  
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
   },
   buttonDelete: {
    backgroundColor: '#FF80AB',
    borderRadius: 10,
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
 })