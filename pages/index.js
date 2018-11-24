import React, { Component } from 'react'
import Link from 'next/link'

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
  withRouter
} from 'next/router';
import NProgress from 'nprogress';


import * as actionCreators from '../actions/About/index';


import Head from '../components/head'
import Nav from '../components/nav'

class Home extends Component {
  // static getInitialProps({ store, isServer, pathname, query }) {
  //   store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
  //   return { custom: 'custom' }; // you can pass some custom props to component from here
  // }


  static async getInitialProps({ store, isServer, pathname, query }) {
    if (isServer == false) {
      NProgress.start();
    }

    let data = store.getState();

    console.log(data.Home.limit, 'data11');
    let params = {
      limit: data.Home.limit,
      offset: 1
    }

    await store.dispatch(actionCreators.getTables(params));



  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(this.props, '#######123####');
    if (document != undefined) {
      NProgress.done();
    }
  }

  render() {

    console.log(this.props, '这里这里这里');
    return (
      <div>
        <Head title="Home" />
        <Nav />

        <div className="hero">
          <h1 className="title">Welcome to Next!{JSON.stringify(this.props.index.About.tableData)}</h1>
          <p className="description">
            To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

          <div className="row">
            <Link href="https://github.com/zeit/next.js#getting-started">
              <a className="card">
                <h3>Getting Started &rarr;</h3>
                <p>Learn more about Next on Github and in their examples</p>
              </a>
            </Link>
            <Link href="https://open.segment.com/create-next-app">
              <a className="card">
                <h3>Examples &rarr;</h3>
                <p>
                  Find other example boilerplates on the{' '}
                  <code>create-next-app</code> site
            </p>
              </a>
            </Link>
            <Link href="https://github.com/segmentio/create-next-app">
              <a className="card">
                <h3>Create Next App &rarr;</h3>
                <p>Was this tool helpful? Let us know how we can improve it</p>
              </a>
            </Link>
          </div>
        </div>

        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
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
Home = connect(mapStateToProps, mapDispatchToProps)(Home);

// Home = withRedux(initializeStore)(Home);

export default withRouter(Home);
