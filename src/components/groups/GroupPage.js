import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/PublicSubheader";
import GroupHeader from "./GroupHeader";
import GroupPageContent from "./GroupPageContent";
import {routes} from "../../routers/AppRouter";

const styles = theme => ({


});


class GroupPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Subheader
                    breadcrumbs={[
                        {title: 'Школы', link: routes.schoolsPage()},
                        {title: 'Спортивная школа №43', link: routes.schoolPage(1)},
                    ]}
                />
                <GroupHeader/>
                <GroupPageContent/>
            </div>
        )
    }

}

GroupPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupPage);