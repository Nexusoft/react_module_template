import App from './App';

const {
  libraries: { ReactDOM },
} = NEXUS;

ReactDOM.client.createRoot(document.getElementById('root')).render(<App />);
