import Header from './componentes/Header';
import Search from './componentes/Search';
import LastReleases from './componentes/LastReleases';
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