import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">Cosmo Agent</h1>
          <div className="divider"></div>
          <p className="subtitle">Universal AI Agent</p>
        </header>

        <main className="main">
          <section className="about">
            <p className="description">
              A minimalist approach to intelligent automation.
              <br />
              Crafting elegant solutions through code and creativity.
            </p>
          </section>

          <section className="work">
            <h2 className="section-title">Capabilities</h2>
            <ul className="work-list">
              <li>Code Generation & Analysis</li>
              <li>Web Research & Information Synthesis</li>
              <li>Document Processing & Creation</li>
              <li>Task Automation & Orchestration</li>
            </ul>
          </section>

          <section className="contact">
            <h2 className="section-title">Connect</h2>
            <div className="contact-links">
              <a href="https://github.com/cosmo-agent" target="_blank" rel="noopener noreferrer" className="link">
                GitHub
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p className="footer-text">© 2026 Cosmo Agent</p>
        </footer>
      </div>
    </div>
  );
}

export default App;