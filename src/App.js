import React from "react";
import Navigation from "./components/MainNavigation";
import Routes from "./routes";
import { plugins } from "./modules/manifest.json";
import "./assets/css/App.css";

class App extends React.Component {
  state = {
    importedModules: []
  };

  componentDidMount = () => {
    this.importPlugins();
  };

  importPlugins = () => {
    if (plugins) {
      try {
        const importedModules = [];
        const importPromises = plugins.map(plugin =>
          import(`./modules/${plugin.path}/${plugin.file}`).then(module => {
            importedModules.push({ ...plugin, Component: module.default });
          })
        );

        Promise.all(importPromises).then(() =>
          this.setState(prevState => ({
            ...prevState,
            importedModules
          }))
        );
      } catch (err) {
        console.error(err.toString());
      }
    }
  };

  render = () => (
    <div className="App">
      <Navigation />
      <Routes {...this.state} />
    </div>
  );
}
export default App;
