import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Tabs from "material-ui/es/Tabs/Tabs";
import Tab from "material-ui/es/Tabs/Tab";

const styles = theme => ({
    TabsRoot:{
      '&::-webkit-scrollbar':{
          display:'none'
      }

    },
    tabRoot: {
        minWidth: 10,
        color: '#00765E',
        maxHeight: 24,

        '&$disabledisabled': {
            color:'#123123'
        }
    },
    tabLabel: {
        padding: '0 8px'
    },
    tablabeltext: {
        fontSize: 16,
    },
    colorBlack: {
        color: '#242421 !important'
    },
    disabledTab:{
        fontSize: 16,
        color:'rgba(36,36,33,0.6)'
    },
    scrollButtons:{
      maxWidth:30,
        color:'rgba(36,36,33,0.6)'
    }

});


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
                    scrollButtons="auto"
                    classes={{
                        scroller:classes.TabsRoot,
                        scrollButtons:classes.scrollButtons
                    }}
                >
                    <Tab label="A" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="B" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="C" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="D" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="E" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="F" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="G" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="H" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="I" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="G" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="K" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="L" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="M" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="N" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="O" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="P" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Q" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="R" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="S" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="T" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="U" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="V" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="W" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="X" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Y" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Z" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>

                    <Tab label="•" disabled classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        selected: classes.colorBlack,
                        label: classes.disabledTab
                    }}/>

                    <Tab label="А" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Б" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="В" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Г" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Д" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Е" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ё" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ж" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="З" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="И" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Й" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="К" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Л" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="М" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Н" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="О" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="П" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Р" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="С" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Т" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="У" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ф" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Х" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ц" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ч" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Щ" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ы" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Э" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Ю" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
                        selected: classes.colorBlack
                    }}/>
                    <Tab label="Я" classes={{
                        root: classes.tabRoot,
                        labelContainer: classes.tabLabel,
                        label: classes.tablabeltext,
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