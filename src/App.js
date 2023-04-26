import Main from './Main';

const {
  libraries: {
    React,
    emotion: {
      cache: createCache,
      react: { CacheProvider },
    },
  },
  components: { ThemeController },
  utilities: { onceInitialize, onWalletDataUpdated },
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
    onWalletDataUpdated(({ theme }) => {
      if (theme) {
        setTheme(theme);
      }
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
