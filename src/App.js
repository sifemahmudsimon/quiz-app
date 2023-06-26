import './App.css';

import Quiz from './Quiz';
import { jsQuizz } from './assets/constants';
import { resultInitialState } from './assets/constants';

function App() {
  return (
    <div className="App">

      <Quiz questions = {jsQuizz.questions}/>
    </div>
  );
}

export default App;
