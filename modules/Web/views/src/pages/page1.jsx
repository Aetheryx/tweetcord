const React = require('react');
const Hero = require('../components/Hero.jsx');

module.exports = class page1 extends React.Component {
  render () {
    return (
      <Hero
        title="ass"
        style={this.props.style}
      />
    );
  }
};
