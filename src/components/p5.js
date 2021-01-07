import React, { Component } from "react"
import {loadableP5 as P5Wrapper} from './loadable';
import Sketch from './sketch';

export default class App extends Component{

  render() {
    return <div class="overflow-hidden"><P5Wrapper sketch={Sketch}/></div>
  }
}