import React from "react";
import { StaticContext } from 'react-router';
import { RouteComponentProps } from "react-router-dom";


interface MovieProp {
    id: number,
    year: number,
    title: string,
    summary: string,
    poster: string,
    genres: Array<string>
}

class Detail extends React.Component<RouteComponentProps<{}, StaticContext, MovieProp>, MovieProp> {

    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            this.props.history.push("/")
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else return null;
    }
}

export default Detail;