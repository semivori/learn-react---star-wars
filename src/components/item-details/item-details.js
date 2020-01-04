import React, { Component } from 'react';

import './item-details.css';

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null,
        loading: true,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.setState({
                loading: true
            });
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                });
            });
    };

    render() {
        const {item, image} = this.state;
        if (!item) {
            return <span>Please select a item</span>
        }

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt="person "/>

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child, index) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}