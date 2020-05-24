import React, { useState, useEffect } from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';

const MainInput = () => {
    const [url, seturl] = useState("www.google.com");
    useEffect(() => {
        console.log('State : ' + url);
    }, [url]);
    const handleShorten = () => {
        console.log('Shorten Button Clicked!');
    }
    return (
        <div>
            <Input
                fluid
                onChange={e => seturl(e.target.value)}
                action={{
                    color: 'teal',
                    labelPosition: 'right',
                    icon: 'cut',
                    content: 'Shorten',
                    onClick: handleShorten,
                }}
                defaultValue={url}
            />
        </div>
    )
}

export default MainInput