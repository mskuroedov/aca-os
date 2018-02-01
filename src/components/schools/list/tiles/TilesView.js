import React from 'react';
import PropTypes from 'prop-types';
import TilesViewComponent from "./TilesViewComponent";


class TilesView extends React.Component {
    render() {
        const {schools} = this.props;

        // разбиваем школы по типам
        let schoolTypes = [];
        schools.forEach((school) => {
            schoolTypes.indexOf(school.type) === -1 ?
                schoolTypes.push(school.type) : null
        });
        // создаем набор школ по типам
        let schoolSets = {};
        schoolTypes.forEach((type) => {
            schoolSets[type] = schools.filter((school) => (
                school.type === type
            ))
        });

        return (
            <div>
                {
                    Object.keys(schoolSets).map((key) => {
                        return <TilesViewComponent key={key} schoolType={key} schools={schoolSets[key]}/>
                    })
                }
            </div>
        )
    }
}

TilesView.propTypes = {
    schools: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TilesView;


