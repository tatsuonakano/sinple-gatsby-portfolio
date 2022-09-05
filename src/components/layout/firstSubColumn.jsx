
import React from "react"
import { Link } from 'gatsby';
import '../../styles/layout.scss';
import '../../styles/neon-test.scss';
import Accordion from 'react-bootstrap/Accordion'


const FirstSubColumn = () => (

  <>
    <div className="d-none d-sm-block col-sm-4 col-xl-3">

        <Accordion className="glass-base glass-white-bg bootstrap-opacity fs-6 fw-bold" defaultActiveKey={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12']} alwaysOpen flush>

          <Accordion.Item eventKey="0">
            <Accordion.Header >
              <span className="accordionHeaderStyle">Adobe作例
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="neonText pulsate" to="/post/adobe-ps">Photoshop作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/adobe-lr">Ligthroom作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/adobe-ir">Illustrator作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/adobe-xd">XD作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/adobe-pr">premiere pro作例</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Stable diffusion作例
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/post/stable-sea">海とクジラ</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/stable-syber_cat">サイバー猫</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/stable-syber_punk">サイバーパンク</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/stable-steam_punk">スチームパンク</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header coler="info">
              <span className="accordionHeaderStyle">Lottie
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/404">404 Not Found</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Gatsby
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Github
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <a href="https://github.com/tatsuonakano/sinple-gatsby-portfolio/tree/develop" target="_blank" rel="noopener noreferrer">当サイトのソースコード</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Stock Photo
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <span className="accordionHeaderStyle">3D表示
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <span className="accordionHeaderStyle">This Site
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/404">404 not found</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/inquiry">問い合わせ</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/privact">プライバシーポリシー</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <span className="accordionHeaderStyle">D3.js
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <span className="accordionHeaderStyle">MUI(material-ui)
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/inquiry">問い合わせ</Link>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <span className="accordionHeaderStyle">React-Bootstrap
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <p>オフキャンバスヘッダー・グリッドレイアウト・サイドバーアコーディオン等に使用されています。</p>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <span className="accordionHeaderStyle">TailwindCSS
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              <span className="accordionHeaderStyle">React ライブラリ
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">React Loader Spinner</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">Video React</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">React Typed</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">React Animations</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">React Reveal</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">react beautiful dnd</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">Recharts</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">Visx</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">React StockCharts</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">Material Table</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">React PDF</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">React Awesome Slider</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">React Image Gallery</Link>
            </Accordion.Body>
          </Accordion.Item>


        </Accordion>
    </div>
  </>
)



export default FirstSubColumn
