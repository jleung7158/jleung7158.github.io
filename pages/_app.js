import '../styles/globals.css';
import '../styles/underwater.css';

export default function App({ Component, pageProps }) {
  return (
    <div style={{
      backgroundImage: `url(/static/images/bluetilebg.png)`,
      width: `100vw`,
      height: `100vh`,
      backgroundPosition: 'bottom -67vh right -10vw',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '115vw 175vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      zIndex: '1',
    }}>
      <Component {...pageProps}/>
      <div className="ocean">
        <div className="wave overflow-hidden"></div>
        <div className="wave overflow-hidden"></div>
      </div>
    </div>
  );
}