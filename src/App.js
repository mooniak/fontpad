import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import Slider from 'rc-slider';
import MediumEditor from 'medium-editor';
import customData from '../data.json';
import axios from 'axios';
import '../node_modules/medium-editor/dist/css/medium-editor.min.css';
import '../node_modules/medium-editor/dist/css/themes/beagle.min.css';
import '../node_modules/rc-slider/assets/index.css';

const ReactGridLayout2 = WidthProvider(ReactGridLayout);
 /* eslint-disable */

class App extends Component {
  constructor(props) {
    super(props);
    this._onBlockResize = this._onBlockResize.bind(this);
    this.state =
    {
      settings: customData.settings,
      layouts:  customData.layouts,
      fontTitle: customData.fontTitle,
      fontMeta1: customData.fontMeta1,
      fontMeta2: customData.fontMeta2,
      pressedkeys:
       {
        ctrl: false,
        shift: false
       }
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
          // .get("http://localhost:3000/src/data.json") user wants multiple users to include
        .then(function(result) {
          //get all user repos and here we can config which fonts to display
          // console.log(result);
          _this.setState({
            repos: result.data.repos
          });
      })
  }


  checkKey(e) {

      if (e.repeat == false){

        let theKeyPressed = null;
        let {ctrl, shift} = this.state.pressedkeys;


        if(window.event) {
          theKeyPressed = e.keyCode;
        }
        if(e.which) {
          theKeyPressed = e.which;
        }


      switch(theKeyPressed) {

        case 17: theKeyPressed = 'CTRL';
            ctrl = !ctrl;
            break;

        case 16: theKeyPressed = 'SHIFT';
            shift= !shift;
            break;
      }

      this.setState({
        pressedkeys: {
          shift, ctrl
        }
      });
    }
  }

  renderBlocks(){
  const {settings, layouts} = this.state;
  return settings.map((block,index)=> {
    const key = block.i;

    return (
      <div key={key} className="edit" onKeyDown={(event) => this.checkKey(event)} onKeyUp={(event) => this.checkKey(event)}>
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

  _onBlockResize(layout, oldBlock, newBlock) {

        const { settings, layouts } = this.state;
        const { ctrl, shift } = this.state.pressedkeys;

        //we use id to find the correct index of the array
        const index = settings.findIndex((setting)=> setting.i == (oldBlock.i));

        const width = layouts[index].w;
        const height = layouts[index].h;
        const newWidth = newBlock.w;
        const newHeight = newBlock.h;

        layouts[index].h = newHeight;
        layouts[index].w = newWidth;

        this.setState({layouts});

        if(ctrl && shift){
          const diff = newHeight-height;
          const oldFontSize = settings[index].fontSize;
          let fontSize = oldFontSize + (4*diff);

          settings[index].fontSize = fontSize;
          this.setState({
            settings
          });
          this.resizeWithAspectRatio(index, oldBlock, layouts);

        }else if(ctrl==false && shift){
          console.log('run shift');
          this.resizeWithAspectRatio(index, oldBlock, layouts);
        }
    }

    resizeWithAspectRatio(index, oldBlock, layouts){

      const oldheight=oldBlock.h;
      const oldwidth=oldBlock.w;

      //here we need to change the width according to the ratio0
      // const tot = height+oldheight;
      // const ratio1 = height/tot;

      layouts[index].w = layouts[index].h/2;
      this.setState({layouts});

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
          onResize={(layout,block, block2)=> this._onBlockResize(layout,block, block2)}
        >
          {this.renderBlocks()}
        </ReactGridLayout2>
      </div>
    );
  }
}

export default App;
