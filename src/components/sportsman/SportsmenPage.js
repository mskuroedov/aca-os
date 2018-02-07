import React from 'react';
import SportsmenHeader from "./SportsmenHeader";
import SportsmenPageContent from "./SportsmenPageContent";
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import {sportsman} from "../../fixtures/sportsman";
import NotFoundPage from "../NotFoundPage";
import {routes} from "../../routers/AppRouter";


class SportsmenPage extends React.Component {

    state = {
        sportsmen: undefined,
        loaded: false
    };

    componentDidMount() {
        const sportsmenId = this.props.match.params.sportsmenId;
        setTimeout(() => {
            const sportsmen = sportsman.filter((sportsmen) => (
                sportsmen.id == sportsmenId
            ));
            this.setState({
                sportsmen: sportsmen.length ? sportsmen[0] : undefined,
                loaded: true
            })
        }, 1000);
    }

    render() {
        const {loaded, sportsmen} = this.state;
        return (
            loaded ? (
                sportsmen ?
                    <div>
                        <Header/>
                        <Subheader
                            breadcrumbs={[
                                {title: 'Школы', link: routes.schoolsPage()},
                                {title: 'Спортивная школа №43', link: routes.schoolPage(1)},
                                {title: 'Группа мальчиков 2010 г. р.', link: '#3'},
                            ]}
                        />
                        <SportsmenHeader {...sportsmen}/>
                        <SportsmenPageContent {...this.props.match.params} sportsmen={sportsmen} />
                    </div>
                    :
                    <NotFoundPage/>
            ) : (
                <p>loading...</p>
            )
        )
    }
}

export default SportsmenPage;
