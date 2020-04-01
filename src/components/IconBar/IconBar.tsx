import * as React from 'react';
import { FunctionComponent } from 'react';
import Icon from '../Icon/Icon';
import { useCss } from 'react-use';

import './style.less';

const IconBar: FunctionComponent = ({}) => {
    const IconBar = useCss({
        width: '45px' /* Set a specific width */,
        height:'100%',
        backgroundColor: '#555' /* Dark-grey background */
    });

    const iconBarItem = useCss({
        display: 'block' /* Make the links appear below each other instead of side-by-side */,
        textAlign: 'center' /* Center-align text */,
        padding: '5px' /* Add some padding */,
        transition: 'all 0.3s ease' /* Add transition for hover effects */,
        color: 'white' /* White text color */,
        // fontSize: 36 /* Increased font-size */,
        '&:hover': { backgroundColor: '#000' },
        '&:active' : {backgroundColor: '#4caf50'} /* Add an active/current color */
    });

    return (
        <div className={IconBar}>
            <a className={iconBarItem}>
                <Icon iconName="home"  />
                <i className="fa fa-home"></i>
            </a>
            <a className={iconBarItem}>
                <Icon iconName="home"  />
                <i className="fa fa-home"></i>
            </a>
            <a className={iconBarItem}>
                <Icon iconName="home"  />
                <i className="fa fa-home"></i>
            </a>
            <a className={iconBarItem}>
                <Icon iconName="home"  />
                <i className="fa fa-home"></i>
            </a>
        </div>
    );
};

export default IconBar;
