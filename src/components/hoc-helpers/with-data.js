import Spinner from "../spinner";
import React, {Component} from "react";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        };

        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            return !this.state.data ? <Spinner/> : <View {...this.props} data={this.state.data}/>;
        }
    }
};

export default withData;