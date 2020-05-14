import React from 'react'
import classes from './Video.module.css'

const video = (props) => {


    return (
        <div className={classes.videoPlayer} key={props.videoCard.id}>
            <iframe src={`https://omnicuris-assets-instream.s3.ap-south-1.amazonaws.com/certification/14_02_18_09_45_56__ARTIST1.mp4`} frameBorder="0" title={props.videoCard.title} className={classes.iframe}></iframe>
            <h3>{props.views} Views</h3>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div >
    )



}

export default video;