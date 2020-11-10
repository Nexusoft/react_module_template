const {
  libraries: { React },
  components: { GlobalStyles, Panel },
} = NEXUS;

export default function Main() {
  return (
    <Panel title="React Module Example" icon={{ url: 'react.svg', id: 'icon' }}>
      <GlobalStyles />
      <div className="mt1">This module is built with React</div>
    </Panel>
  );
}
