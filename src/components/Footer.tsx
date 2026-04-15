import React from 'react';
import { Helmet } from 'react-helmet';

const Footer: React.FC = () => (
  <footer style={{
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    background: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '12px 0',
    zIndex: 1000,
    fontSize: 16,
  }}>
    <Helmet>
    <title>SBR IT Solution | Angular training, React training, Java training, Python training</title>
    <meta name="description" content={`Explore top-rated software development courses online. Learn coding, system design, and project development from beginner to expert.`} />
    <meta name="keywords" content={`best placement training institute, best placement training institute in hyderabad, best placement training institute in bangalore, best placement training institute in mumbai, best placement training institute in delhi, best placement training institute in chennai, best placement training institute in pune, best placement training institute in noida, best placement training institute in gurgaon`} />
  </Helmet>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <div>
        &copy; {new Date().getFullYear()} Course Training Platform | <a href="https://sbritsolution.in" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7', textDecoration: 'underline' }}>sbritsolution.in</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="https://facebook.com/sbritsolution" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" style={{ width: 22, height: 22, filter: 'invert(70%)' }} />
        </a>
        <a href="https://twitter.com/sbritsolution" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter" style={{ width: 22, height: 22, filter: 'invert(70%)' }} />
        </a>
        <a href="https://linkedin.com/company/sbritsolution" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" style={{ width: 22, height: 22, filter: 'invert(70%)' }} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 