import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Input,
    StyleSheet 
} from "react-native";

const GetCurrentLocation = (props) => {
    return (
        <View style = {styled.container}>
            <Text>
                Some text + current coord
            </Text>
        </View>
    )
}

export default GetCurrentLocation;

const styled = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})