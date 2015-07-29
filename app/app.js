import React from 'react';
import User from './user';
import UserComponent from './user-component';

var user = new User.Model({id: 1});
React.renderComponent(UserComponent({user: user}), document.body);
