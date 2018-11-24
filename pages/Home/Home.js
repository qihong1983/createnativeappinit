import React, {
    Component
} from 'react'


import {
    connect
} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import {
    withRouter
} from 'next/router';



import {
    bindActionCreators
} from 'redux';


import * as actionCreators from '../../actions/About/index';

class About extends Component {




    constructor(props) {
        super(props);
    }

    componentWillMount() {



    }

    componentDidMount() {
        console.log(this.props, 'this.props');
    }

    render() {
        console.log(this.props, 'this.props');
        return (
            <div>
                第二个页面
            </div>
        )
    }
}

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {

    console.log(state, 'state');

    return {
        index: state
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};
// Home = connect()(Home);
About = connect(mapStateToProps, mapDispatchToProps)(About);

// About = withRedux(initializeStore)(About);

export default withRouter(About);