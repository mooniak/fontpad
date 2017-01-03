import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import MediumEditor from 'medium-editor';


import '../node_modules/medium-editor/dist/css/medium-editor.min.css';
import '../node_modules/medium-editor/dist/css/themes/beagle.min.css';

const ReactGridLayout2 = WidthProvider(ReactGridLayout);

class App extends Component {
  componentDidMount() {
    // const editor = new MediumEditor('.edit', {});
  }

  render() {
    const layout = [
      { i: '10', x: 0, y: 0, w: 4, h: 7 },
      { i: '15', x: 0, y: 0, w: 4, h: 2 },
      { i: '20', x: 0, y: 0, w: 4, h: 35 },
      { i: '30', x: 8, y: 0, w: 8, h: 35 },
      { i: '40', x: 6, y: 0, w: 6, h: 3 }
    ];

    return (
      <div className="App">
        <div className="font-details">
          <h1 className="font-title">Maname fontpad</h1>
          <span className="font-meta">v0.001-alpha</span>
          <span className="font-meta">Updated on 27 Dec 2016</span>
        </div>


        <ReactGridLayout2
          className="layout"
          draggableHandle=".drag"
          layout={layout}
          cols={12}
          rowHeight={30}
          autoSize
          useCSSTransforms
        >
          <div key={'10'} className="edit">
            <i className="fa fa-arrows drag" aria-hidden="true" />
            <h2 className="section-title">
              The Screen in Review Elephant Walk opens at Astor theatre
            </h2>
          </div>

          <div key={'15'} className="edit">
            <i className="fa fa-arrows drag" aria-hidden="true" />
            <span className="title-meta">By BOSLEY CROWTHER</span>
          </div>

          <div key={'20'} className="edit">
            <i className="fa fa-arrows drag" aria-hidden="true" />
            <p className="text"> “TELL me about the elephants,” Elizabeth Taylor
              timorously says to Dana Andrews in the first
              few minutes of the Astor’s new picture, “Elephant
              Walk.” The two are casually getting acquainted in
              an elegant mansion on a tea plantation in Ceylon.
              Miss Taylor is the new, young wife of the plantation
              owner and she is just out from England; Mr.
              Andrews is the plantation boss.”Don’t mention
              those terrible monsters!” says Mr. Andrews—or
              words to that effect. His disregard for the creatures
              is pungent and unreserved. The elephants roam
              all over the plantation, trampling down the plants.
              And they’d knock down the house, too, if a strong
              guard of natives was not maintained. It seems that
              the present owner’s father—”Old Master,” or “the
              Guvnor,” as he is known—deliberately built his
              mansion right where the elephants liked to walk.
              Being elephants, they haven’t forgotten. That’s just
              one of the trials Miss Taylor must endure. But
              more disturbing to her peace and enjoyment of the
              lthan roll his eyes. The elephants have had their
              way, and the ghost of “old master” has been Vipbed
              out. Is there anything more you’d like to know?
              ELEPHANT WALK, screen play by John Lee Mahin,
              based on a novel by Robert Standish; directed
              by William Dieterle; produced by Irving Asher for
            Paramount Pictures. At the Astor.</p>
          </div>

          <div key={'30'} className="edit small">
            <i className="fa fa-arrows drag" aria-hidden="true" />
            <p className="text">
              මතය වන්නේ සේකර විශේෂයෙන් කැපී පෙනුණේ චිත්‍ර කලාවට බව ය. කවියේදී මෙන් ම චිත්‍ර කලාවේදී ද
              මුල් යුගයේ ඔහු අමුර්ත චිත්‍ර ගර්හාවට ලක් කර ඇත. එහෙත් පසුව ඔහු නිර්මාණ බිහි කළේ එම චිත්‍ර
              ශෛලිය ප්‍රගුණ කරමිනි. මා නිවැරැදි නම් සේකර අවස්ථා තුනකට වඩා චිත්‍ර ප්‍රදර්ශන පවත්වා නැත.
              ඔහුගේ චිත්‍ර නිර්මාණ විග්‍රහයේ පහසුව තකා කොටස් කීපයකට බෙදා දැක්විය හැකිය. ප්‍රදර්ශන සඳහා
              ඉදිරිපත් කළ චිත්‍ර ‘තුංමංහන්දිය’ චිත්‍රපටය සඳහා නිර්මිත චිත්‍ර, පුවත්පත් කාටුන්, පොත් කංචුක නිර්මාණ,
              බතික් නිර්මාණ, එම්බ්‍රොයිඩර් නිර්මාණ සහ පෝස්ටර්. සේකරගේ චිත්‍ර ගැන මෙතෙක් නිසි විචාරක අවධානයක්
              යොමු වී නැත. එහි විපාක වශයෙන්දෝ සේකර නමැති චිත්‍ර ශිල්පියා යටපත්ව සේකර නමැති කවියා හා ගීත
              රචකයා බිහි වූ ආකාරයක් පෙනේ.
            </p>
            <p className="text"> මෙහි ප්‍රතිවිරුද්ධ දේ සිදු වූයේ ජෝර්ජ් කීට්ය. එහිදී ජෝර්ජ් කීට් නමැති කවියා යටපත්ව ජෝර්ජ් කීට් නමැති චිත්‍ර ශිල්පියා බිහි වූයේ ය. සේකර නවකතා දෙකක් ද කෙටිකතා සංග්‍රහ දෙකක් ද ලියා පළ කර ඇත. ඔහුගේ නවකතාවක් වූ ‘තුංමංහන්දිය’ ඔහු විසින්ම චිත්‍රපටගත කරනු ලැබිණි. එය 70 දශකයේ හොඳම චිත්‍රපටය ලෙස ජාතික කතෝලික සිනමා පර්ෂදයෙන් බුහුමන් ලද්දේ ය. 1997 දී සිංහල සිනමාවට 50 වසරක් පිරුණු අවස්ථාවේ තේරූ හොඳ ම චිත්‍රපට දහයෙන් එකක් ලෙස ද ‘තුංමංහන්දිය’ තේරුණේ ය. එ සේම එය 1972 දී ටෂ්කන්ට් අන්තර්ජාතික චිත්‍රපට උලෙළේදී ඩිප්ලෝමා සහතිකයක් ද දිනාගත්තේ ය. ‘මූදු පුත්තු’ (ගුණසේන ගලප්පත්ති සමඟ) සේකර ලියූ වේදිකා නාට්‍ය පිටපතකි. ඔහු ලියූ වෙනත් නාට්‍ය ‘සද්දන්ත සහ තවත් නාටක’, ‘හංස ගීතය හා වෙනත් නිර්මාණ’ යන කෘතිවල අඩංගු වෙයි. සේකර සර් ආතර් කොනන් ඩොයිල්ගේ ‘ද වයිට් කම්පැනි’ (The White Company) නම්වූ කෘතියේ අනුවාදයක් ‘ධවල සේනාංකය’ නමින් පළ කර ඇත. ඒ හැරුණුකොට තවමත් අප්‍රකාශිත ඔහුගේ පොත් දෙකක් ගැන ද කියැවෙයි. එකක් ‘ඊඩිපස්’ නාට්‍යයේ පරිවර්තනයකි; අනික ඊට ඉහත ජී. බී. සේනානායක ද මඩවල එස්. රත්නායක ද පරිවර්තිත ‘රුබයියාට්’ කෘතියේ පරිවර්තනයකි. සේකර අතිශයින් නිර්ව්‍යාජ කලාකරුවෙකි. ඔහු කොළඹ රැකියාව කොට දුම්රියෙන් ගෙදර ආ කල්හි අමුඩයක් ඇඳ ළි‍ඳෙන් හෝ පීල්ලකින් නා ගනී. එවිට ඔහු මහා කවියා නොවේ. මහා කලාකරුවා නොවේ. ගමේ ජෝන් අයියාගේ පුතාය. සේකර ‘තුංමංහන්දිය’ නවකතාවේ (එසේම පසුව චිත්‍රපටයේ) අබිලිංගේ චරිතය ඔස්සේ මැවූයේ තමන්ගේ ම ප්‍රතිරූපය ම යැයි වරෙක සිතේ. ඔහු සම්මානවලින් හිස උදුමවා ගත්තේ නැත. ‘තුංමංහන්දිය’ චිත්‍රපටයට ටෂ්කන්ට් සම්මානය ලැබුණු බව දැනගත් විට ඔහු උපේක්ෂා සහගතව කියා ඇත්තේ ‘හොඳා - හොඳා’ කියා ය. සේකර කිසිදා ධනෝපායනය උදෙසා කලාව පරිහරණය කළ අයෙක් නොවීය. ඔහු එය පිළිකුල් කළා සේය. සැබෑ කලාකරුවා සන්තුෂ්ටියට පත්වන්නේ ස්වකීය නිර්මාණයෙන්මය; රසිකයා එය වැලඳ ගත් කල්හිය. සේකර තමා නිරත සියලු කලා මාධ්‍ය ඔස්සේ රසිකයාගේ කලා රුචිකත්වය වර්ධනය කළේ ය. සමාජය විනිවිද යන්ට දැක්මක් පාදා මතුකර දුන්නේ ය. එහෙත් සමාජයෙන් ඔහුට පෙරළා ලැබුණේ කුමක් ද?ඔහු උපන් ගමේ ඇතැමුන් කියා ඇත්තේ සේකර මොන තරම් ප්‍රසිද්ධ පුද්ගලයකු වුවත් ගමට එක බෝක්කුවක් බැඳ දීම තරම්වත් සේවයක් කර දී නැති බවය. (අරීසෙන් අහුබුදු කලාකරුවා මියයද්දිත් ඔහුට ඔහු උපන් ගමෙන් ලැබුණේ මෙවන් ප්‍රතිචාරයකි) සේකරගේ පිළිරුව නොයෙක් වර කඩා බිඳ දැමීම්වලට ලක්වූයේ ය. කුල සාධකයක් ද ඊට ඈඳා ගත් ආකාරය දිස්වෙයි. ගමෙන් පමණක් නොව රටින් පවා සේකරට එතරම් යහපත් සත්කාරයක් නොලැබුණු බව පෙනේ. ‘බෝඩිම’ කාව්‍ය සංග්‍රහයෙන් පිටපත් කීපයක් විකුණා ගන්ට සංස්කෘතික දෙපාර්තමේන්තුවට ගිය අවස්ථාවක සේකර ආපසු හරවා එවා තිබුණේ පොත් මිලට ගන්ට මුදල් නොමැති බව කියමිනි. සේකර වෙනුවෙන් අද අපට කළ හැකි යමක් ඉතිරි ව ඇත. එනම්; ඔහුගේ සමස්ත නිර්මාණ දෙස අලුත් විචාර එළැඹුමකින් යුක්තව බැලීම ය. නූතන භාෂාවෙන් කිවහොත් නව කියැවීමක යෙදීමය. මෑතදී කේ. කේ. සමන් කුමාර එබඳු උත්සාහයක් ගත්තේ ය. (‘සේකරගේ නොදුටු පැත්ත’ නම්වූ ලිපි මාලාව) එහෙත් එය පරිසමාප්ත වූවක් නොවීය. මහගමසේකර නම් වූ ‘නොමියෙන ප්‍රබුද්ධයා’ හැදෑරීම සමකාලීන කලාවේ පැතිකඩ ගණනාවක් අධ්‍යයනය කිරීමක් වන්නේය. මේ හැදෑරීමේදී මුලින් වේට්ටියක් හා දිග බැනියමක් ඇඳගෙන සඳැස් කවි ලියමින් නිසඳැස උපහාසයට ලක්කළ, අමුර්ත චිත්‍ර ගර්හාවට ලක්කළ සේකර පසුකලෙක විශාල පිම්මක් පැන නූතනවාදී කලාවට ආ හැටි විමසා බැලීම ද කළ යුතු යැයි අවධාරණය කරමි.
              <span className="pullquote">ඇත්ත වශයෙන් ම සේකරගේ අවසාන කාව්‍ය සංග්‍රහය වූ ද, ඔහුගේ උත්කෘෂ්ටතම කාව්‍ය කෘතිය වූ ද ප්‍රබුද්ධ පළවී මාස ගණනාවක් යනතුරුම ඒ ගැන කිසිදු කතිකාවක් සිදු නොවූ බව වරක් ප්‍රවීණ ලේඛක එච්. ඒ. සෙනෙවිරත්න වරක් හෙළරව් කර සිටියේය. මේ කාව්‍ය කෘතියේ විශිෂ්ටත්වය සමාජගත වූයේ පසුකලෙකදී ය.</span>
            </p>

          </div>

          {/* <div key={'c'} className="edit small">
            <i className="fa fa-arrows drag" aria-hidden="true"></i>
            <p >
            වර්තමානයේ, මාධ්‍ය සහ තොරතුරු ක්ෂේත්‍රයේ වැඩිපුරම භාවිතා වන සිංහල ෆොන්ටය වන්නේ 1996 වසරේ නිමවන ලද ‘එෆ්එම් අභය' අකුරු මුහුණතයි. ලක්දිව උපතිස්ස නුවර ක්‍රිස්තු පූර්ව 474 සිට ක්‍රිස්තු පූර්ව 454 දක්වා රජකම් කළ ‘අභය’ රජුගේ නමින් නාමික අභාෂය ලබන එෆ්එම් අභය, අතීත අච්චු අකුරු මුහුණත් වලින් රූපික ආභාෂය ලැබගනී.
            </p>
          </div> */}

        </ReactGridLayout2>
      </div>
    );
  }
}

export default App;
