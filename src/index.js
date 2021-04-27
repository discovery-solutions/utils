import * as logical from "./logical";
import * as general from "./general";
import * as style from "./style";
import * as hooks from "./hooks";

const utils = {
    ...logical,
    ...general,
    ...hooks,
    ...style,
}

export default utils;
