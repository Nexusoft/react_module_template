const {
  libraries: { React },
  components: { GlobalStyles, Panel },
} = NEXUS;

const App = () => (
  <Panel title="React Module Example" icon={{ url: 'react.svg', id: 'icon' }}>
    <GlobalStyles />
    <div className="mt1">This is a Nexus Module built with React</div>
  </Panel>
);

export default App;
