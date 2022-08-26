
import React from "react"
import { Link } from 'gatsby';
import './layout.scss';
import Accordion from 'react-bootstrap/Accordion'


const FirstSubColumn = () => (

  <>
    <div className="d-none d-sm-block col-sm-4 col-xl-3 scrollbarbox ">
      <div className="scrollbar sticky">

        <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']} alwaysOpen flush>

          <Accordion.Item eventKey="0">
            <Accordion.Header >
              <span className="accordionHeaderStyle">:カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="accordionHeaderStyle"> :カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header coler="info">
              <span className="accordionHeaderStyle">:カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className="accordionHeaderStyle"> :カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <span className="accordionHeaderStyle"> :カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <span className="accordionHeaderStyle">:カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <span className="accordionHeaderStyle">:カテゴリー
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Link to="/#">#</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <span className="accordionHeaderStyle"> :カテゴリー
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
    </div>
  </>
)



export default FirstSubColumn
