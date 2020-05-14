import React from 'react';
import Axios from 'axios'
import classes from './ExpertPanel.module.css'
class ExpertPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expertDetails: []
        }
    }

    componentWillMount = () => {
        this.getDataAxios()
    }
    async getDataAxios() {
        const response =
            await Axios.get("https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts",
                { headers: { 'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f' } }
            )
        console.log(response.data)
        this.setState({
            expertDetails: [...response.data.expertDetails]
        })
        console.log(this.state.expertDetails)

    }
    render() {
        const experts = this.state.expertDetails.map((data) => {
            return (
                <div className={classes.experts} key={data.id}>
                    <div className={classes.profilePic}>
                        <img src={data.profilePic} alt={data.expertName} />
                    </div>
                    <div className={classes.expertInfo}>
                        <h3>{data.title} {data.expertName}</h3>
                        <p>{data.qualification}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className={classes.expertSection}>
                <div className={classes.head}>
                    <h3>Experts Panel</h3>
                    <div className={classes.dashLink}></div>
                </div>

                <div className={classes.expertDetails}>
                    {experts}
                </div>
            </div>
        );
    }
}

export default ExpertPanel;