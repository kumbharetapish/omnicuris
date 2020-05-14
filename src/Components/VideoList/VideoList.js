import React from 'react'
import Axios from 'axios'
// import { Link } from 'react-router-dom'
import classes from './VideoList.module.css'
class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: [],
            courseData: {}
        }
    }
    async getDataAxios() {
        const response =
            await Axios.get("https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy",
                { headers: { 'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f' } }
            )
        console.log(response.data)
        this.setState({
            courseData: { ...response.data.courseDetails },
            modules: [...response.data.courseDetails.modules]
        })

    }
    componentDidMount() {
        this.getDataAxios()
    }
    render() {
        const videoContainer = this.state.modules.map((data, i) => {
            return <div className={classes.videoCards} key={data.id} onClick={() => { this.props.handleClick(data.id) }}>
                <img src={data.moduleExperts[i].profilePic} alt={data.expertName} />
                <p>{data.title}-<strong>{data.name}</strong> </p>
                {data.moduleExperts.map((list) => {
                    return (
                        <div className={classes.expetModules} key={data.id}>
                            <img src={list.profilePic} alt={list.name} />
                        </div>
                    )
                })}
            </div>

        })
        return (
            <div className={classes.videoList}>
                <div className={classes.videoCards}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYan1zeb8r4lMRyYtxS9AD6wK5gH2JCcYQeQrD8pGCAMYXrHo2&usqp=CAU" alt="" />
                    <h3>Introduction</h3>
                </div>
                {videoContainer}

            </div>
        );
    }
}

export default VideoList;