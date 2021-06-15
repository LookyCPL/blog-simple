import { themeType } from "./utilsTypes";
import { css } from "@emotion/css"

const lodash = require("lodash");

export const getStyleObj = (style: any, theme?: themeType) => {

        return theme  ? lodash.merge(style.default, style[theme]) : style.default
}

