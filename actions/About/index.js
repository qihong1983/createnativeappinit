import 'isomorphic-unfetch';


const toQueryString = (obj) => {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}

const inita = (data) => {
    return function (dispatch) {
        dispatch({
            type: "ADIMPRESSION_APPCODE",
            payload: data
        })
    }
}

const getTablesNoData = (data) => {
    return async function (dispatch) {

        await dispatch({
            type: "PAGE1_LOADING",
            payload: true
        })

        dispatch({
            type: "PAGE1_OFFSET",
            payload: data.offset
        })

        dispatch({
            type: "PAGE1_LIMIT",
            payload: data.limit
        })

        let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/tableNoChange?p=" + data.offset, {
            method: 'GET',
            // mode: 'cors',
            // cache: 'force-cache',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            },
            type: 'fetch'
            // cache: 'default',
            // body: toQueryString(data)
        });

        let json = await res.json();

        await dispatch({
            type: "PAGE1_TABLEDATA",
            payload: json.data
        })

        await dispatch({
            type: "PAGE1_TOTAL",
            payload: json.total
        })


        await dispatch({
            type: "PAGE1_LOADING",
            payload: false
        })
    }
}

const getTables = (data) => {
    return async function (dispatch) {



        await dispatch({
            type: "PAGE1_LOADING",
            payload: true
        })

        dispatch({
            type: "PAGE1_OFFSET",
            payload: data.offset
        })

        dispatch({
            type: "PAGE1_LIMIT",
            payload: data.limit
        })

        let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/nextDemoTables?p=" + data.offset, {
            method: 'GET',
            // mode: 'cors',
            // cache: 'force-cache',

            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }

            // cache: 'default',
            // body: toQueryString(data)
            // body: toQueryString(data)
        });

        let json = await res.json();


        console.log(22);
        await dispatch({
            type: "ABOUT_TABLEDATA",
            payload: json.data
        })

        await dispatch({
            type: "PAGE1_TOTAL",
            payload: json.total
        })

        await dispatch({
            type: "PAGE1_LOADING",
            payload: false
        })
    }
}

const getCharts = (data) => {
    return async function (dispatch) {
        let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/demo", {
            method: 'GET',
            // mode: 'cors',
            type: 'fetch',
            cache: 'default'

        });

        let json = await res.json();


        dispatch({
            type: "ADIMPRESSION_APPCODE",
            payload: json.number2
        })

    }

}

export {
    getCharts,
    inita,
    getTables,
    getTablesNoData
}