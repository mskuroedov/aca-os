import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import StatsPageContent from "./StatsPageContent";
import StatsPage from "../schools/school/statistic/StatsPage"

const styles = theme => ({});


class CommonStatsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader
                    title='Статистика'
                />
                {/*<StatsPageContent/>*/}
                <div style={{paddingLeft: 168, paddingRight: 168, paddingTop: 32, paddingBottom: 64}}>
                    <StatsPage common={true}/>
                </div>
            </div>
        )
    }
}

CommonStatsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommonStatsPage);