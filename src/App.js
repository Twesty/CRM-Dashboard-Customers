import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';

import './assets/scss/main.scss';
import './App.scss';

function App() {
  return (
    <div className="main">
      <aside className="main__sidebar">
        <Sidebar />
      </aside>
      <div className="main__content">
        <div className="main__welcome">Hello Evano 👋🏼,</div>
        <div className="main__table">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
