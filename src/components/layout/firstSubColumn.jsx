
import React from "react"
import { Link } from 'gatsby';
import '../../styles/layout.scss';
import '../../styles/neon-test.scss';
import Accordion from 'react-bootstrap/Accordion'


const FirstSubColumn = () => (

  <>
    <div className="d-none d-sm-block col-sm-4 col-xl-3">
        <Accordion className="glass-base glass-white-bg bootstrap-opacity" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Adobe作例
              </span>
            </Accordion.Header>
            <Accordion.Body >
              <Link className="accordion-item-text" to="/post/adobe-ps">Photoshop作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/adobe-lr">Ligthroom作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/adobe-ir">Illustrator作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/adobe-xd">XD作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/adobe-pr">Premiere pro作例</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Stable diffusion作例
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/stable-sea">海とクジラ</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/stable-syber_cat">サイバー猫</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/stable-syber_punk">サイバーパンク</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/post/stable-steam_punk">スチームパンク</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Lottie
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/404">404 Not Found</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Gatsby
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/#">#</Link>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Github
              </span>
              </Accordion.Header>
              <Accordion.Body>
              <a className="accordion-item-text" href="https://github.com/tatsuonakano/sinple-gatsby-portfolio/tree/develop" target="_blank" rel="noopener noreferrer">当サイトのソースコード</a>
              </Accordion.Body>
              </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Stock Photo
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">3D表示
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">This Site
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/404">404 not found</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/inquiry">問い合わせ</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/privact">プライバシーポリシー</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">D3.js
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">MUI(material-ui)
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/inquiry">問い合わせ</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg-Rbootst" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">React-Bootstrap
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion-item-text-Rbootst">
                ・オフキャンバスヘッダー<br/>
              ・グリッドレイアウト<br/>
            ・サイドバーアコーディオン<br/>
          等サイト部分に使用されています。
            </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
          <Accordion.Item className="accordion-item-bg" eventKey="0">
            <Accordion.Header>
              <span className="accordionHeaderStyle">TailwindCSS
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="accordion-item-text" to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          
          <Accordion className="glass-base glass-white-bg bootstrap-opacity mt-3" defaultActiveKey={['0', ]} alwaysOpen flush>
            <Accordion.Item className="accordion-item-bg" eventKey="0">
              <Accordion.Header>
                <span className="accordionHeaderStyle">React ライブラリ
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React Loader Spinner</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">Video React</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React Typed</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React Animations</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React Reveal</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">react beautiful dnd</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">Recharts</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">Visx</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React StockCharts</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">Material Table</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React PDF</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React Awesome Slider</Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link className="accordion-item-text" to="/#">React Image Gallery</Link>
              </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        
        <div className="mt-3 pb-3 px-3 glass-base glass-white-bg opacity-lv-03"><hr/>コンテンツ</div>
    </div>
  </>
)



export default FirstSubColumn
