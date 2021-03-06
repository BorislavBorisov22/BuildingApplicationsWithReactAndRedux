import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import AuthorsPage from './components/author/AuthorsPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';
import NotFoundPage from './components/common/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="author" component={ManageAuthorPage}/>
        <Route path="author/:id" component={ManageAuthorPage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="authors" component={AuthorsPage}/>
        <Route path="*" component={NotFoundPage} />
    </Route>
);