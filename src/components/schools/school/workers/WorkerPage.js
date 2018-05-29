import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import {routes} from "../../../../routers/AppRouter";
import Header from "../../../headers/Header";
import Subheader from "../../../headers/Subheader";
import WorkerHeader from "./WorkerHeader";
import WorkerPageContent from "./WorkerPageContent";

const styles = theme => ({});


class WorkerPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes, match} = this.props;
        const staff = match.params.workerId === '1';
        return (
            <div>
                <Header/>
                <Subheader
                    breadcrumbs={[
                        {title: 'Школы', link: '/schools'},
                        {title: 'Спортивная школа №43', link: '/schools/1'},
                        {title: 'Группа мальчиков 2010 г.р.', link: '/schools/1/groups'},
                    ]}
                />
                <WorkerHeader/>
                <WorkerPageContent staff={staff}/>
            </div>
        )
    }
}

WorkerPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkerPage);