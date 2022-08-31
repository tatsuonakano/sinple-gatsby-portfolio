
import React from "react"
import { Link } from 'gatsby';
import '../../styles/layout.scss';
import Accordion from 'react-bootstrap/Accordion'


const FirstSubColumn = () => (

  <>
    <div className="d-none d-sm-block col-sm-4 col-xl-3">

        <Accordion className="glass-base glass-white-bg bootstrap-opacity fs-6 fw-bold" defaultActiveKey={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']} alwaysOpen flush>

          <Accordion.Item eventKey="0">
            <Accordion.Header >
              <span className="accordionHeaderStyle">Adobe作例
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">Photoshop作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/adobe-lr">Ligthroom作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/post/adobe-ir">Illustrator作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">XD作例</Link>
            </Accordion.Body>
            <Accordion.Body>
              <Link to="/#">premiere pro作例</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="accordionHeaderStyle">Stable diffusion作例
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header coler="info">
              <span className="accordionHeaderStyle">Lottie
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
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
              <Link to="/#">#</Link>
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
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <span className="accordionHeaderStyle"> :カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <span className="accordionHeaderStyle"> :カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>


        </Accordion>
    </div>
  </>
)



export default FirstSubColumn
