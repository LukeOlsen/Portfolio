import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 'Header'
    }

    this.whatIsActive = this.whatIsActive.bind(this);
    this.activeHeader = this.activeHeader.bind(this);
    this.activeProjects = this.activeProjects.bind(this);
    this.activeContact = this.activeContact.bind(this);
  }

  whatIsActive() {
    if (this.state.active === 'Header') {
      return <Header />
    } else if (this.state.active === 'Projects') {
      return <Projects />
    } else if (this.state.active === 'Contact') {
       return <Contact />
    }
  }

  activeHeader() {
    this.setState({active: 'Header'})
  }

  activeProjects() {
    this.setState({active: 'Projects'})
  }

  activeContact() {
    this.setState({active: 'Contact'})
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          activeHeader={this.activeHeader}
          activeProjects={this.activeProjects}
          activeContact={this.activeContact}
        />
        {this.whatIsActive()}
      </div>
    );
  }
}

export default App;
