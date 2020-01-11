import Spinner from "../spinner";
import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
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
            this.setState({
                loading: true,
                error: false,
            });
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data: data,
                        loading: false,
                    })
                })
                .catch((error) => {
                    this.setState({
                        error: true,
                        loading: false,
                    })
                })
        }

        render() {
            const {data, loading, error} = this.state;

            if (loading || !data) {
                return <Spinner/>
            }

            if (error) {
                return <ErrorIndicator/>
            }

            return <View {...this.props} data={data}/>
        }
    }
};

export default withData;