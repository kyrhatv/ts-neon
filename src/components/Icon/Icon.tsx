import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    SizeProp,
    FlipProp,
    IconLookup,
    IconName,
    IconPrefix,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IconProps {
    prefix?: IconPrefix;
    iconName: IconName;
    size?: SizeProp;
    flip?: FlipProp;
    isSpinning?: boolean;
}

const Icon: FunctionComponent<IconProps> = ({
    prefix = 'fas',
    iconName,
    size = '1x',
    flip = undefined,
    isSpinning = false
}) => {
    const lookup: IconLookup = { prefix: prefix, iconName: iconName };
    const iconDef: IconDefinition = findIconDefinition(lookup);

    return <FontAwesomeIcon icon={iconDef} size={size} flip={flip} spin={isSpinning} />;
};

export default Icon;
