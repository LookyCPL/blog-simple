
import React from 'react';
import {getStyleObj} from "../../utils/makeStyles";
import {HeaderStyles} from "./Header_default";
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'

export const Header = () => {

    const styleObj  = getStyleObj(HeaderStyles, 'primary');


    const handleClick = () => {
        console.log(styleObj.root);
    }

    return (
        <div css={styleObj.root}>
            <span>Header</span>
            <button onClick={handleClick}>TEST</button>
        </div>
    )
}