import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function RichLink() {
    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='left'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>Website Name</Card.Header>
                <Card.Meta>Website URL</Card.Meta>
                <Card.Description>
                    Do laborum labore quis ullamco ipsum fugiat. Ea magna aute reprehenderit ea pariatur incididunt aliqua sunt sint dolor pariatur eiusmod nisi. Do labore sunt consectetur elit est magna cupidatat consectetur.
                </Card.Description>
            </Card.Content>
        </Card>
    )
}
