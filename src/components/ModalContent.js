import React from 'react'
import { ModalContainer, ModalBodyContent, CloseButton } from './../styles'
import { ThemeProvider } from 'styled-components'
import { 
    ParagraphTitle,
    Paragraph,
    ModalInputTitle,
    ButtonsContainer,
    OtherInput,
    SubmitButton,
    ResetButton,
    Input,
    Select
} from './../styles'

export const ModalContent = ({ toggleModal, title }) => {

    return (
        <ModalContainer>
        <ModalBodyContent>
            <CloseButton onClick={toggleModal}>&times;</CloseButton>
            <ThemeProvider theme={ParagraphTitle}>
                    <Paragraph>ADD MOVIE</Paragraph>
            </ThemeProvider>
            <ThemeProvider theme={ModalInputTitle}>
                    <Paragraph>TITLE</Paragraph>
            </ThemeProvider>
            <ThemeProvider theme={OtherInput}>
                    <Input placeholder="Title here"/>
            </ThemeProvider>
            <ThemeProvider theme={ModalInputTitle}>
                    <Paragraph>RELEASE DATE</Paragraph>
            </ThemeProvider>
            <ThemeProvider theme={OtherInput}>
                    <Input type="date" placeholder="Select Date"/>
            </ThemeProvider>
            <ThemeProvider theme={ModalInputTitle}>
                    <Paragraph>MOVIE URL</Paragraph>
            </ThemeProvider>
            <ThemeProvider theme={OtherInput}>
                    <Input placeholder="Movie URL here"/>
            </ThemeProvider>
            <ThemeProvider theme={ModalInputTitle}>
                    <Paragraph>GENRE</Paragraph>
            </ThemeProvider>
            <ThemeProvider theme={OtherInput}>
                    <Select>
                        <option>Genre here</option>
                        <option>Action and Adventure</option>
                        <option>Oscar Winning Movie</option>
                        <option>Drama, Biography, Music</option>
                    </Select>
            </ThemeProvider>
            <ThemeProvider theme={ModalInputTitle}>
                    <Paragraph>OVERVIEW</Paragraph>
            </ThemeProvider>
            <ThemeProvider theme={OtherInput}>
                    <Input placeholder="Overview here"/>
            </ThemeProvider>
            <ThemeProvider theme={ModalInputTitle}>
                    <Paragraph>RUNTIME</Paragraph>
            </ThemeProvider>
            <ThemeProvider theme={OtherInput}>
                    <Input placeholder="Runtime here"/>
            </ThemeProvider>
            <ButtonsContainer>
                <ResetButton>RESET</ResetButton> 
                <SubmitButton>SUBMIT</SubmitButton> 
            </ButtonsContainer>
        </ModalBodyContent>
        </ModalContainer>
    )
}