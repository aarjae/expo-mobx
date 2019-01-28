import React, { Component } from "react";
import { Text } from "react-native";
import { observer } from "mobx-react/native";

@observer
class Requests extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            this.props.store.requests.map(request => {
                console.log(request);
                return <Text key={request}>{request}</Text>
            })
        );
    }
}

export default Requests;