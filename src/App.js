import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import Slider from 'rc-slider';
import MediumEditor from 'medium-editor';
import customData from './data.json';
import axios from 'axios';
import '../node_modules/medium-editor/dist/css/medium-editor.min.css';
import '../node_modules/medium-editor/dist/css/themes/beagle.min.css';
import '../node_modules/rc-slider/assets/index.css';

const ReactGridLayout2 = WidthProvider(ReactGridLayout);
 /* eslint-disable */
class App extends Component {
  constructor(props) {
    super(props);

    // read from local file
    console.log(customData)
    this.state =
    {
      settings: customData.settings,
      layouts:  customData.layouts,
      fontTitle: customData.fontTitle,
       fontMeta1: customData.fontMeta1,
       fontMeta2: customData.fontMeta2,
    };
  }

  componentWillUnmount() {
      this.serverRequest.abort();
  }


  componentDidMount() {
    const editor = new MediumEditor('.edit', {
      toolbar: {
        buttons: []
      }
  });

    let _this = this;
    this.serverRequest =
      axios
        .get("https://api.github.com/users/asela-wijesinghe/repos")
          // .get("http://localhost:3000/src/data.json")
        .then(function(result) {

          //get all user repos and here we can config which fonts to display
          console.log(result);

          _this.setState({
            repos: result.data.repos
          });
      })
  }

  renderBlocks(){
  const {settings, layouts} = this.state;
  return settings.map((block,index)=> {
    const key = block.i;

    return (
      <div key={key} className="edit">
        <i className="fa fa-arrows drag" aria-hidden="true" />

        <div className="block-controls">
          <i className="fa fa-bars controls-toggle" aria-hidden="true" />
          <div className="controls">
            <div>
              <span className="control-label">Font size :</span>
              <Slider
                min={1}
                max={100}
                value={block.fontSize}
                step={0.5}
                onChange={(value) => {
                  let stateCopy = Object.assign({}, this.state);
                  stateCopy.settings = stateCopy.settings.slice();
                  stateCopy.settings[index] = Object.assign({}, block);
                  stateCopy.settings[index].fontSize = value;
                  this.setState(stateCopy);
                }}
              />
            </div>
            <div>
              <span className="control-label">Line height :</span>
              <Slider
                min={0}
                max={10}
                value={block.lineHeight}
                step={0.1}
                onChange={(value) => {
                  let stateCopy = Object.assign({}, this.state);
                  stateCopy.settings = stateCopy.settings.slice();
                  stateCopy.settings[index] = Object.assign({}, block);
                  stateCopy.settings[index].lineHeight = value;
                  this.setState(stateCopy);
                }}
              />
            </div>
            <div>
              <span className="control-label">Letter spacing :</span>
              <Slider
                min={0}
                max={100}
                value={block.letterSpacing}
                step={0.5}
                onChange={(value) => {
                  let stateCopy = Object.assign({}, this.state);
                  stateCopy.settings = stateCopy.settings.slice();
                  stateCopy.settings[index] = Object.assign({}, block);
                  stateCopy.settings[index].letterSpacing = value;
                  this.setState(stateCopy);
                }}
              />
            </div>
          </div>
        </div>
        <h2 className="section-title" style={block}>
          {block.content}
        </h2>
      </div>
    );
  })
  }

  render() {
    const { layouts, fontTitle, fontMeta1, fontMeta2 } = this.state;

    return (
      <div className="App">
        <div className="font-details">
          <h1 className="font-title">{fontTitle}</h1>
          <span className="font-meta">{fontMeta1}</span>
          <span className="font-meta">{fontMeta2}</span>
        </div>

        <ReactGridLayout2
          className="layout"
          draggableHandle=".drag"
          layout={layouts}
          cols={12}
          rowHeight={30}
          autoSize
          useCSSTransforms
        >
          {this.renderBlocks()}
        </ReactGridLayout2>
      </div>
    );
  }
}

export default App;
