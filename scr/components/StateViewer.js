import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { get_data } from "../store/actions/get_data"

const StateViewer = (props) => {
    const abd = 'Anton';
    () => props.get_data_fn(abd)
    console.log(props.all);
    return (
        <View>
            <Text>
                {JSON.stringify(props.all)}
            </Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
        all: state
})

const mapDispatchToProps = (dispatch) => ({
        get_data_fn: (data) => dispatch(get_data(data))
})

export default connect (mapStateToProps, mapDispatchToProps)(StateViewer)
