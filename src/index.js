import * as logical from "./logical";
import * as general from "./general";
import * as style from "./style";
import * as hooks from "./hooks";
import * as web from "./web";

const utils = {
    ...logical,
    ...general,
    ...hooks,
    ...style,
    ...web,
}

export default utils;
