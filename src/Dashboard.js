import React from 'react'
import logo from './image/logo.png'
import './Dashboard.css'
import { Tab, Col,Row,Nav , Media} from 'react-bootstrap';
import icon from './image/icon.jfif';

function Dashboard() {
    return (
          <div>
             <section className="dash_section">
                <header className="navheader">
                 <div className="logo">
                  <img src={logo} alt="logo_dash" className="logo_dash"/>
                 </div>
                  <div className="amount_dis">
                      <p className="amount_dis_content">INVESTED AMOUNT<br/>9999</p> 
                  </div>
                </header>
            </section>
            <div className="toggle">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={2}>
            <Nav variant="pills" className="flex-column">
             <Nav.Item className="btn_group">
               <Nav.Link eventKey="first" className="btn2">Vodafone</Nav.Link>
              </Nav.Item>
            <Nav.Item className="btn_group">
            <Nav.Link eventKey="second"  className="btn2">Tata</Nav.Link>
           </Nav.Item>
           <Nav.Item className="btn_group">
            <Nav.Link eventKey="third"  className="btn2">AXISBANK</Nav.Link>
           </Nav.Item>
           <Nav.Item className="btn_group">
            <Nav.Link eventKey="fourth"  className="btn2">BAJFINANCE</Nav.Link>
           </Nav.Item>
           <Nav.Item className="btn_group">
            <Nav.Link eventKey="fifth"  className="btn2">INDUSINDBK</Nav.Link>
           </Nav.Item>
        </Nav>
       </Col>
    
      <Tab.Content className="dash_dis">
        <Tab.Pane eventKey="first">
        <Media.Body>
       <h5>Media Heading</h5>
        <p>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
         ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
           <Media.Body>
       <h5>Media Heading</h5>
        <p>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
         ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
           <Media.Body>
       <h5>Media Heading</h5>
        <p>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
         ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
           <Media.Body>
       <h5>Media Heading</h5>
        <p>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
         ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
           <Media.Body>
       <h5>Media Heading</h5>
        <p>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
         ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
        </Tab.Pane>
      </Tab.Content>

  </Row>
</Tab.Container>
</div>
     
             <div className="dash_id">
                 <div className="dash_image">
                     <img src={icon} alt="icon" class="user_img"/>
                 </div>
                 <div>
                    <p className="dash_username">Rahul kumar </p>
                    <p className="dash_level">level 10</p>
                 </div>
                 <div className="dash_fri">
                     <p className="dash_fr">Friends</p>
                     <div>
                         <ul>
                             <li>
                               <div className="dash_list">
                               <img src={icon} alt="icon" class="frn_img"/>
                               <p className="frn_name">name</p>
                               </div>
                             </li>
                             <li>
                               <div className="dash_list">
                               <img src={icon} alt="icon" class="frn_img"/>
                               <p className="frn_name2">name</p>
                               </div>
                             </li>
                             <li>
                               <div className="dash_list">
                               <img src={icon} alt="icon" class="frn_img"/>
                               <p className="frn_name3">name</p>
                               </div>
                             </li>
                             <li>
                               <div className="dash_list">
                               <img src={icon} alt="icon" class="frn_img"/>
                               <p className="frn_name4">name</p>
                               </div>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Dashboard
