import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import MediumEditor from 'medium-editor';

import './styles/fonts.css';
import './styles/App.css';
import '../node_modules/medium-editor/dist/css/medium-editor.min.css';
import '../node_modules/medium-editor/dist/css/themes/beagle.min.css';

const ReactGridLayout2 = WidthProvider(ReactGridLayout);

class App extends Component {
  componentDidMount() {
    const editor = new MediumEditor('.edit', {});
  }

  render() {
    const layout = [
      { i: 'a', x: 0, y: 0, w: 12, h: 11 },
      { i: 'b', x: 0, y: 0, w: 6, h: 3 },
      { i: 'c', x: 6, y: 0, w: 6, h: 3 }
    ];

    return (
      <div className="App">
        <ReactGridLayout2
          className="layout"
          draggableHandle=".drag"
          layout={layout}
          cols={12}
          rowHeight={30}
          autoSize
          useCSSTransforms
        >

          <div key={'a'} className="edit">
            <i className="fa fa-arrows drag" aria-hidden="true"></i>
            <p >
              සිංහල අකුරු, ඈත අතීතයේ පටන් ඒවා පරිහරණය කළ අපේ
            </p>
            <p >
              <strong>මුතුන් මිත්තන් අතින් වැඩි දියුණු වවමින් අප කරා පැමිණ</strong>
            </p>
            <p >
              තිබෙනවා. සිංහල අක්ෂර නිර්මාණය හා විකාශනය
            </p>
            <p >
              දීර්ඝ ඉතිහාසයකට උරුමකම් කියන්නක්.
            </p>
          </div>

          <div key={'b'} className="edit small">
            <i className="fa fa-arrows drag" aria-hidden="true"></i>
            <p>
              සීගිරි පර්‍වත මස්තකාරූඪ මනුෂ්‍යයෙකුට සෝදාහරණ සහිත ව හෙළයා ගේ ශෛල, වාරි, ගෘහ නිර්මාණ ශක්‍යතාව ද සෙල්බිතෙහි තැවරූ මඩස්තරයක ඇඳි නාරි චිත්‍රයන් ගෙන් සහ කැටපත්පවුරෙහි ලිඛිත කුරුටු ගීවලින් හෙළයා ගේ සෞන්දර්ය හැකියාව දු මනා සේ දැකගත හැක.
            </p>
          </div>

          <div key={'c'} className="edit small">
            <i className="fa fa-arrows drag" aria-hidden="true"></i>
            <p >
              වර්තමානයේ, මාධ්‍ය සහ තොරතුරු ක්ෂේත්‍රයේ වැඩිපුරම භාවිතා වන සිංහල ෆොන්ටය වන්නේ 1996 වසරේ නිමවන ලද ‘එෆ්එම් අභය' අකුරු මුහුණතයි. ලක්දිව උපතිස්ස නුවර ක්‍රිස්තු පූර්ව 474 සිට ක්‍රිස්තු පූර්ව 454 දක්වා රජකම් කළ ‘අභය’ රජුගේ නමින් නාමික අභාෂය ලබන එෆ්එම් අභය, අතීත අච්චු අකුරු මුහුණත් වලින් රූපික ආභාෂය ලැබගනී.
            </p>
          </div>

        </ReactGridLayout2>
      </div>
    );
  }
}

export default App;
