import React, { useState } from 'react'
import {
    Card,
    CardImg,
    CardText,
    ReleaseDate,
    CardIconContainer,
    CardTooltipContainer,
    CardTooltipItem
} from '../styles'
import PropTypes from 'prop-types';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular'

const MovieCard = ({ img, title, genre, releaseDate, imgAlt }) => {

    const [showIcon, setShowIcon] = useState(false)
    const [displayToolTip, setDisplayToolTip] = useState(false)


    const showToolTip = () => {
        setDisplayToolTip(true)
    }

    const closeToolTip = () => {
        setDisplayToolTip(false)
    }

    return (
        <Card onMouseOver={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
            <CardImg src={img} alt={imgAlt}/>
            {
                showIcon
                ? <CardIconContainer><DotsVerticalRounded onClick={showToolTip} color='#232323' size="50"/></CardIconContainer>
                : null 
            }
            {
                displayToolTip
                ? <CardTooltipContainer onClick={closeToolTip}>
                    <span style={{ paddingLeft: '100px',  }} >&times;</span>
                    <CardTooltipItem>EDIT</CardTooltipItem>
                    <CardTooltipItem>EDIT</CardTooltipItem>

                </CardTooltipContainer>
                : null 
            }
            <CardText>
                <h3>{title}<ReleaseDate>{releaseDate}</ReleaseDate></h3>
                <p>{genre}</p>
            </CardText>
        </Card>
    )
}

MovieCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
}

MovieCard.defaultProps = {
    img: 'https://unsplash.it/800/600?image=11',
    title: 'NO TITLE',
    genre: 'NO GENRE',
    releaseDate: '0',
    imgAlt: 'NO IMAGE',
};

export  { MovieCard }

