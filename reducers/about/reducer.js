const About = (state, action) => {

    if (typeof state === "undefined") {
        //初始化
        return {
            offset: 1,
            limit: 1,
            total: 1,
            loading: false,
            tableData: []
        }
    }

    switch (action.type) {
        case "ABOUT_OFFSET":
            return Object.assign({}, state, {
                offset: action.payload
            });
        case "ABOUT_LIMIT":
            return Object.assign({}, state, {
                limit: action.payload
            });
        case "ABOUT_TOTAL":
            return Object.assign({}, state, {
                total: action.payload
            });

        case "ABOUT_LOADING":
            return Object.assign({}, state, {
                loading: action.payload
            });
        case "ABOUT_TABLEDATA":
            return Object.assign({}, state, {
                tableData: action.payload
            });

        default:
            //返回初始化
            return state;
    }
}

export {
    About
};