// Core
import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {socket} from '../init/socket';

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';
import {book} from './book';


export default class Private extends Component {

	componentDidMount() {
		const {listenPosts} = this.props
		listenPosts()
	}

	componentWillUnmount() {
		socket.removeListener('create')
	}

	render () {
        return ( <Switch>
				 <Route path={book.feed} component={Feed}/>
				 <Route path={book.profile} component={Profile}/>
				 <Route path={book.newPassword} component={NewPassword} />
				<Redirect to={book.feed} />
			 </Switch>
			)
    }
}
