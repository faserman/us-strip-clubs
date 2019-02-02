import React, { Component } from 'react';

export class ClickOutside extends Component {
    constructor(props){
        super(props)
        this.container = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick)
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick)
    }

    handleClick = (event) => {
        const { onClickOutside } = this.props
        if (!this.container.current.contains(event.target)) {
            onClickOutside();
        }
    }

    render() {

        return (
            <div ref={ this.container }>{ this.props.children }</div>
        );
    }
}  