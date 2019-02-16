import Home from './screens/Home';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MovieDetail from './screens/MovieDetail';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Detail: {screen: MovieDetail}
});

const App = createAppContainer(MainNavigator);

export default App;