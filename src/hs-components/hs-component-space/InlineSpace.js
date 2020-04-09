import React from 'react';
import { useCss } from 'react-use';

const InlineSpace = () => {
    const style = useCss({
        width: '0.5em',
        display: 'inline-block'
    });
    return <span className={style} />;
};

export default InlineSpace;
