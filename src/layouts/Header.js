import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { 
    ParagraphTitle,
    Paragraph,
    ButtonSearch,
    Button,
    Input
} from './../styles'
import PropTypes from 'prop-types';
import { Modal, ModalContent } from './../components';

class Header extends Component  {
    constructor(props) {
        super(props)
    
        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({
           showModal: ! this.state.showModal
        })
     };

    addMovie = () => {
        console.log('Add another movie')
    }

    render() {

        const { showModal } = this.state;

        return (
            <div className={this.props.className}>
                    <Paragraph>netflixroulette</Paragraph>
                    <Button onClick={this.toggleModal}>+ ADD MOVIE</Button>
                    <ThemeProvider theme={ParagraphTitle}>
                        <Paragraph>FIND YOUR MOVIE</Paragraph>
                    </ThemeProvider>
                    <Input placeholder="What do you want to watch?"/>
                    <ButtonSearch>SEARCH</ButtonSearch>
                    {
                        showModal ? (
                            <Modal>
                                <ModalContent
                                    toggleModal={this.toggleModal}
                                />
                            </Modal>
                        ) : null
                    }
            </div>
        )
    }
    
}

Header.propTypes = {
    className: PropTypes.string.isRequired,
}

export  { Header }
