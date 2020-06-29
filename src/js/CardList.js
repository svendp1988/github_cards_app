import React from "react";
import {Card} from "./Card";

export function CardList(props) {
    return (
        <div>
            {props.profiles.map(profile => <Card {...profile} key={profile.id}/>)}
        </div>
    )
}
