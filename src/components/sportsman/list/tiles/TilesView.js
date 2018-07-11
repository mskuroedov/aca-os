import React from 'react';
import PropTypes from 'prop-types';
import Grid from "material-ui/es/Grid/Grid";
import TilesItem from "./TilesItem";


class TilesView extends React.Component {

    render() {
        return (
            <Grid container spacing={16}>
                {
                    this.props.sportsman.map((item) => {
                        return <TilesItem key={item.id} {...item} />
                    })
                }
            </Grid>
        )
    }
}

TilesView.propTypes = {
    sportsman: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TilesView;

