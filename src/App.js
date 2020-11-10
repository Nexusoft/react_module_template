import Main from './Main';

const {
  libraries: {
    React,
    emotion: {
      createCache,
      core: { CacheProvider },
      theming: { ThemeProvider },
    },
  },
  utilities: { color, onceInitialize, onThemeUpdated },
} = NEXUS;

const emotionCache = createCache({ container: document.head });

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
  const themeWithMixer = {
    ...theme,
    mixer: color.getMixer(theme.background, theme.foreground),
  };

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={themeWithMixer}>
        <Main />
      </ThemeProvider>
    </CacheProvider>
  );
}
