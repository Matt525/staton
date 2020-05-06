import React, { Component } from 'react'
import './main.css';

export default class FullscreenNav extends Component {
    render() {
        return (
            <nav id="menu">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="landing.html">Landing</a></li>
                <li><a href="generic.html">Generic</a></li>
                <li><a href="elements.html">Elements</a></li>
            </ul>
            <ul class="actions stacked">
                <li><a href="#" class="button primary fit">Get Started</a></li>
                <li><a href="#" class="button fit">Log In</a></li>
                <li><a href="#" class="button fit" onClick={this.props.toggle}>E x i t</a></li>
            </ul>
        </nav>
        )
    }
}
