import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class JoinHost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.email,
      is_host: true
    };
    this.goHosting = this.goHosting.bind(this);
  }

  goHosting() {
    const user = this.state;
    $.ajax({
      method: 'PATCH',
      url: '/api/user',
      data: { user }
    }).then(() => this.props.refreshUser(this.props.user.id)).then(() => this.props.router.push('/hostrun'));
  }

  render() {

    return (

      <div className="join-host-page">
        <div className="host-splash">
          <h1>JOIN THE HOST COMMUNITY</h1>
          <span>Travel in your own city by bringing strangers together for a great run</span>
        </div>
        <h2>You're fascinated by humanity and humans, and you understand that there's so much that you don't understand.</h2>
        <p>Sound like you? Keep reading, and let us know if you want to become a host.</p>
        <ul>
          <li>What is a host?</li>
          <li>Why do hosts love hosting?</li>
          <li>Am I host material?</li>
          <li>How can I get involved?</li>
        </ul>
        <p>So we asked our hosts some of these questions. Here is what they had to say.</p>
        <h3>Hosts sometimes ask questions, often smile, listen wholeheartedly and love to bring people together.</h3>
        <p>Each host is different, uniquely amazing and full of stories, smiles, hugs and wonder. But I guess you could say that we do share something — a common core. We love the people around us before they've given us reason to. And we know that real conversations make our communities feel a little more like home.</p>
        <h3>Hosts are constantly growing.</h3>
        <p>Hosting Tea With Strangers can make your life feel more fulfilling, more magical, and it might even make you a better person. Every time you host tea time, you're practicing being inclusive, attentive, and curious without inhibition. That is an awesome challenge, and in it is huge opportunity to grow as a person.</p>
        <p>In addition, the host community is an incredibly supportive, dynamic and exciting group of people that likes to hang together, share love across the globe and support each other on our journeys through our neighborhoods. Imagine joining a new family of awesome people that’s both local and global and is as loving and caring as you are. That’s the host fam.</p>
        <h3>You know yourself better than anyone else.</h3>
        <p>If stories, amazing people, tea, smiles, real conversation and our description of hosting all sound awesome to you then you may already have an inner host within you. So what are you waiting for? Let us know that you want in on our eclectic and extraordinary family.</p>
        <h3>Join us!</h3>
        <button className="lets-run-btn"
          onClick={this.goHosting}>I'M IN!</button>
      </div>
    );
  }
}

export default withRouter(JoinHost);
