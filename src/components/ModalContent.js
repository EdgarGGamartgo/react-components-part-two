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
    Input
} from './../styles'

export const ModalContent = ({ toggleModal }) => {
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
                    <Input placeholder="Select Date"/>
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
                    <Input placeholder="Genre here"/>
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