import React, { Component } from 'react';
import "./thirdfooter.css";

export default class Thirdfooter extends Component {
  render() {
    return (
        <>
          <footer className='footer'>
              <ul className="bottomList">
                  <li>
                      <a href="/" className="bottom-nav">
                          Amazon Music
                          <ul>
                              <li>
                                  <a href="/">Streams Millions of Songs</a>
                              </li>
                          </ul>
                      </a>
                  </li>
              </ul>
          </footer>
        </>
    );
  }
}
