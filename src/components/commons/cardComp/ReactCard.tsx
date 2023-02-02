import React from 'react';

import './index.css';

type Props = { className: String, children: String | JSX.Element | JSX.Element[] };
const Card = (props: Props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
};

export default Card;