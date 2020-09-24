import React, { Component } from 'react'
import './main.css';
import Toggle from './Toggle';

export default class FullscreenNav extends Component {
    render() {
        return (
            <nav id="overlay-menu">
            <ul class="actions stacked">
                <li><a href="/" class="button fit">Home</a></li>
                <li><a href="/aboutme" class="button fit">About Me</a></li>
                <li><a href="/projects_page" class="button fit">Projects</a></li>
                <li><a href="#" class="button fit" onClick={this.props.toggle}>E x i t</a></li>
            </ul>
        </nav>

        )}}
                
   
                
 
