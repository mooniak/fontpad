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
    this._onBlockResize = this._onBlockResize.bind(this);
    // read from local file
    // console.log(customData)
    this.state =
    {
      settings: customData.settings,
      layouts:  customData.layouts,
      fontTitle: customData.fontTitle,
      fontMeta1: customData.fontMeta1,
      fontMeta2: customData.fontMeta2,
      hotkeys: {
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
        let {ctrl, shift} = this.state.hotkeys;

        if(window.event) {
          theKeyPressed = e.keyCode;
        }

        if(e.which) {
          theKeyPressed = e.which;
        }

      switch(theKeyPressed) {

        case 17: theKeyPressed = 'CTRL';
            // if(hotkeys>0){
            //   hotkeys -= 1;
            // }else{
            //   hotkeys += 1;
            // }
            ctrl = !ctrl;
            console.log(!ctrl);
            break;

        case 16: theKeyPressed = 'SHIFT';

            // if(hotkeys>0){
            //   hotkeys -= 2;
            // }else{
            //   hotkeys += 2;
            // }
            shift= !shift;
            console.log(!shift);
            break;
      }

      this.setState({
        hotkeys: {
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

  _onBlockResize(layout,block) {
        const { settings } = this.state;
        const { ctrl, shift } = this.state.hotkeys;

        if(ctrl && shift){
          console.log('run ctrl+shift');
          const index = settings.findIndex((setting)=> setting.i == (block.i));
          console.log('index :', index);

          const width = block.w;
          const height = block.h;
          const oldheight=this.state.layouts[index].h;
          const diff = height-oldheight;
          const oldFontSize = this.state.settings[index].fontSize;
          const fontSize = oldFontSize + diff;


          if(diff>0){
            console.log('Size Up',diff);
          }else{
            console.log('Size Down',diff);
          };

          settings[index].fontSize = fontSize;

          this.setState({
            settings
          });
          // this.resizeWithAspectRatio(block, index);


        }else if(ctrl==false && shift){

          console.log('run shift');
          this.resizeWithAspectRatio(block, index);
        }




    }

    resizeWithAspectRatio(block, index){
      const { layouts } = this.state;

      // const width = block.w;
      const height = block.h;
      // const oldheight=layouts[index].h;
      // const tot = height+oldheight;
      // const ratio1 = height/tot;

      layouts[index].w = height;
      layouts[index].h = height;

      this.setState(layouts);

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
          onKeyPress={()=>console.log('key')}
          autoSize
          useCSSTransforms
          onResize={(layout,block)=> this._onBlockResize(layout,block)}
        >
          {this.renderBlocks()}
        </ReactGridLayout2>
      </div>
    );
  }
}

export default App;
