import Header from './components/Header';
import Search from './components/Search';
import LastReleases from './components/LastReleases';
import { AppContainer } from './styles/App.styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default App;