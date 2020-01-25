import React from 'react';
import { Card } from 'semantic-ui-react';

function CardForPlayers(props) {
console.log(props, 'name')
    return(
        <div className='cardForPlayers'>
        {props.players.map(players => (
            <Card
            className='cardForPlayers'
            key={players.name}
            description={players.name}
            />
        ))}
        </div>
    )
}

export default CardForPlayers;