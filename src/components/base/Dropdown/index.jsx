import React, { Component } from 'react';
import classNames from 'classnames';
import './index.css';
import { ClickOutside } from '../ClickOutside';


export class Dropdown extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onSelect = (event) => {
        const { onChange } = this.props;
        const id = Number(event.target.dataset.id);
        onChange(id);
        this.setState({ isOpen: false });
    } 

    onOpen = () => {
        this.setState({ isOpen: true });
    }

    onClose = () => {
        this.setState({ isOpen: false });
    }

    render() {

        const { options, selectedValue } = this.props;
        const { isOpen } = this.state;
        const triggerStyle = classNames({
            trigger: true,
            'trigger-open': isOpen
        });

        const listStyle = classNames({
            list: true,
            'list-hidden': !isOpen
        });
        console.log(selectedValue)

        const optionElements = options.map( option =>
            <div key={ option.id } data-id={ option.id } onClick={ this.onSelect } className="list-item">{ option.name }</div>
        ) 
        
        const selectedOption = options.find( option =>
            option.id === selectedValue
        )
            
        const selectedName = selectedOption ? selectedOption.name : <div className="placeholder">Select...</div>

        return (
            <ClickOutside onClickOutside={ this.onClose }>
                <div className="container">
                    <div className="input-block">
                        <div className="input" onClick={ this.onOpen }>
                            { selectedName }
                        </div>
                        <div className={ triggerStyle } onClick={ this.handleClick } />
                    </div>
                    <div className={ listStyle } >
                        { optionElements }
                    </div>
                </div>
            </ClickOutside>
        )
    }

}