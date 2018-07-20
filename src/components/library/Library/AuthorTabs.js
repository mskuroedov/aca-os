import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Tabs from "material-ui/es/Tabs/Tabs";
import Tab from "material-ui/es/Tabs/Tab";
import styles from '../../styles'


class AuthorTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        return (
            <div>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="on"
                    classes={{
                        scroller:classes.TabsRoot,
                        scrollButtons:classes.scrollButtons
                    }}
                >
                    <Tab label="A" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="B" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="C" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="D" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="E" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="F" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="G" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="H" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="I" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="G" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="K" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="L" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="M" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="N" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="O" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="P" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Q" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="R" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="S" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="T" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="U" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="V" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="W" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="X" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Y" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Z" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>

                    <Tab label="•" disabled classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        selected: classes.colorBlack,
                        label: classes.disabledTab
                    }}/>

                    <Tab label="А" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Б" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="В" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Г" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Д" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Е" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ё" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ж" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="З" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="И" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Й" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="К" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Л" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="М" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Н" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="О" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="П" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Р" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="С" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Т" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="У" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ф" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Х" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ц" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ч" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Щ" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ы" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Э" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ю" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Я" classes={{
                        root: classes.AlphabetTabRoot,
                        labelContainer: classes.AlphabetTabLabel,
                        label: classes.AlphabetTabLabeltext,
                        selected: classes.colorBlack
                    }}/>

                </Tabs>

                {/*<div>{value}</div>*/}
            </div>
        )
    }
}

AuthorTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthorTabs);