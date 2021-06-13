// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {socketActions} from '../bus/socket/actions';
import {authActions} from '../bus/auth/actions';
import {socket, joinSocketChannel} from '../basic-redux/init/socket';


// Pages
import Private from './Private';
import Public from './Public';
import {Loading} from '../components';
import {api} from '../REST/api';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
    isInitialized: state.auth.get('isInitialized')
})

const mapDispatchToProps = {
    initializeAsync: authActions.initializeAsync,
    ...socketActions
}

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
    componentDidMount() {
        const {listenConnection, initializeAsync} = this.props
        listenConnection()
        initializeAsync()
        joinSocketChannel()
    }

    componentWillUnmount() {
        socket.removeListener('connect')
        socket.removeListener('disconnect')
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props

        if (!isInitialized) {
            return <Loading/>
        }

        return isAuthenticated ? <Private listenPosts={listenPosts}/> : <Public/>

    }
}
