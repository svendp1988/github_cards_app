import React from 'react';
import "../css/Card.css";


export class Card extends React.Component {

    render() {
        const profile = this.props;
        return (
            <div className="profile-card">
                <img src={profile.avatar_url} alt="avatar"/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }

}
