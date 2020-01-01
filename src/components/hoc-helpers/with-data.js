import Spinner from "../spinner";
import React, {Component} from "react";

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
        };

        render() {
            return !this.state.data ? <Spinner/> : <View {...this.props} data={this.state.data}/>;
        }
    }
};

export default withData;