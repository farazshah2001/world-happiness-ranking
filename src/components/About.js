import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
export default function About() {
    return (
        <Row className="justify-content-center" style={{backgroundImage:"linear-gradient(to right, #5f2c82, #49a09d)"}}>
<Col sm={8}>
<Card style={{margin:"10% 0%"}}>
  <Card.Body> <h1>About</h1>
            <p>The World Happiness Report is a publication of the United Nations Sustainable
                 Development Solutions Network. It contains articles and rankings of national
                  happiness, based on respondent ratings of their own lives,[1] which the
                   report also correlates with various (quality of) life factors.[2] As of
                    March 2021, Finland was ranked the happiest country in the world four 
                    times in a row.[3][4][5]

The report primarily uses data from the Gallup World Poll. Each annual report is available 
to the public to download on the World Happiness Report website</p></Card.Body>
</Card>
       <Card style={{margin:"10% 0%"}}>
           <Card.Body>
           <h1>History</h1>
<p>In July 2011, the UN General Assembly adopted resolution 65/309 Happiness: Towards a
     Holistic Definition of Development[7] inviting member countries to measure the happiness
      of their people and to use the data to help guide public policy. On April 2, 2012, this
       was followed by the first UN High Level Meeting called Wellbeing and Happiness: 
       Defining a New Economic Paradigm,[8] which was chaired by UN Secretary General Ban
        Ki-moon and Prime Minister Jigmi Thinley of Bhutan, a nation that adopted gross
         national happiness instead of gross domestic product as their main development
          indicator.[9]

The first World Happiness Report was released on April 1, 2012 as a foundational
 text for the UN High Level Meeting: Well-being and Happiness: Defining a New Economic 
 Paradigm,[10] drawing international attention.[11] The first report outlined the state
  of world happiness, causes of happiness and misery, and policy implications highlighted 
  by case studies. In 2013, the second World Happiness Report was issued, and in 2015 the 
  third. Since 2016, it has been issued on an annual basis on the 20th of March, to coincide
   with the UN's International Day of Happiness.</p>
           </Card.Body>
           </Card>    
</Col>
           

        </Row>
    )
}
