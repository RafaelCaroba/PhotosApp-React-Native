import React, {Component} from "react";
import { View, Image, FlatList, TouchableHighlight } from "react-native";

class Picturelist extends Component{
    static defaultProps ={
        list:[],
        onClick: () => {}
    }

    render(){

        const {props} = this;
        const keyExtractor = item => item.id;

        return(
            <View style={{flex:1}}>
                <FlatList 
                    numColumns={3} 
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={({item}) => <PicturelistItem onClick={props.onClick} item={item} />}
                />
            </View>

        );
    }

}
        
    function PicturelistItem (props) {
        const{item} = props;
        
        return(
            <TouchableHighlight onPress={()=>{props.onClick(item)}}>
    
                <Image 
                source={{uri:item.url}}
                style={
                    {
                        width: 80, 
                        height: 80
                    }
                }
                />
    
                
    
            </TouchableHighlight>
    
        )
    }

    export default Picturelist