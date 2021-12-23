import Main from './Main';

const {
  libraries: {
    React,
    emotion: {
      createCache,
      core: { CacheProvider },
    },
  },
  components: { ThemeController },
  utilities: { onceInitialize, onThemeUpdated },
} = NEXUS;

const emotionCache = createCache({ container: document.head, key: 'emotion' });

export default function App() {
  const [initialized, setInitialized] = React.useState(false);
  const [theme, setTheme] = React.useState({});
  React.useEffect(() => {
    onceInitialize(({ theme }) => {
      setInitialized(true);
      setTheme(theme);
    });
    onThemeUpdated((theme) => {
      setTheme(theme);
    });
  }, []);

  if (!initialized) return null;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeController theme={theme}>
        <Main />
      </ThemeController>
    </CacheProvider>
  );
}
