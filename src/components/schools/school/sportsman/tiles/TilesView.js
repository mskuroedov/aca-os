import React from 'react';
import Grid from "material-ui/es/Grid/Grid";
import TilesItem from "./TilesItem";


class TilesView extends React.Component {

    render() {
        return (
            <Grid container>
                {
                    this.props.schools.map((item) => {
                        return <TilesItem key={item.id} {...item} />
                    })
                }
            </Grid>
        )
    }
}

export default TilesView;

