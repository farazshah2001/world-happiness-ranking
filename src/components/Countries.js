import React , {useState,useEffect} from 'react'

import {Bar } from 'react-chartjs-2'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Select from 'react-select';
import {useGlobalContext} from '../context'
import {Row,Col,Card} from 'react-bootstrap'
export default function Countries() {
    const {guest} = useGlobalContext();
    const {rankings} = useGlobalContext();
    
    const {year} = useGlobalContext();
    const {setYear} = useGlobalContext();
    const {setFactorUrl} = useGlobalContext();
   
    let {selectedvalues} = useGlobalContext();
   
    let {factors} = useGlobalContext();
    let {token} = useGlobalContext();




    let factorsData = null;
    
    const [graphData, setgraphData] = useState( {
      labels : ["economy","family","freedom","genorosity","health","trust"],
      datasets :[
          {
              label : 'Factors',
              data : factorsData,
              backgroundColor : ['rgba(100,10,160,0.6)'],
              borderWidth:4
      }
      ] 
    });
    const [countryRankingsState, setcountryRankingsState] = useState([])





    
    const years = [{value:2020,label:2020},
      {value:2019,label:2019},
      {value:2018,label:2018},
      {value:2017,label:2017},
      {value:2016,label:2016},
      {value:2015,label:2015},
    ]
    
    const handleYearChange = selectedOption => {
      
      const {label} = selectedOption;
      setYear({label})
};





    let countryRankings = [];

    
useEffect(() => {

  if(factors){
    
    try {
      
      factors.map((factor)=>{
        const {label} = selectedvalues;
       const {economy,family,freedom,generosity,health,trust,country} = factor;
        if (country===label){
          factorsData=[];
          factorsData.push(economy,family,freedom,generosity,health,trust);
       }
     })
     /////////
setgraphData(
 {
  labels : ["economy","family","freedom","genorosity","health","trust"],
  datasets :[
      {
          label : 'Factors',
          data : factorsData,
          backgroundColor : ['rgba(100,10,160,0.6)'],
          borderWidth:4
  }
  ] 
}
)
    } catch (error) {
      console.log(error,"error while fetching factors");
    }
     
  } 
}, [factors])  

///////////////////

useEffect(() => {
  const {label} = selectedvalues;
  countryRankings=[];
  if(rankings){
    rankings.map(({rank,country,score,year})=>{
      if(country===label){
        countryRankings.push({rank:rank,score:score,year:year})
        setcountryRankingsState(countryRankings);
      } 
      
    })
  }
 
}, [selectedvalues])


//////////////////// DEbuggings

useEffect(() => {
 
console.log("factors",factors,"year",year,"toeken",token);

}, [selectedvalues,year])




///////////////////

useEffect(() => {
  const {label} = year;
 
  setFactorUrl(label)
  
}, [year])
    return (
        <div >
            
            
       
<Row className="justify-content-center">
  <Col sm={10} lg={6}>
  <div style={{margin:"10%"}}>
          <h1>{selectedvalues.label}</h1>
          <div className="ag-theme-alpine" style={{height: 400, width: "auto"}}>
          <AgGridReact  animateRows={true} serverSideStoreType={'full'}
                rowData={countryRankingsState}>
               <AgGridColumn field="rank" ></AgGridColumn>          
               <AgGridColumn field="score"></AgGridColumn>
               <AgGridColumn field="year"></AgGridColumn>       
           </AgGridReact>
          </div>       
        </div>
  </Col>
</Row>
        
        <div>
          {
            guest ||
            <Row className="justify-content-center">
          <Col lg={6}>
          <Select
            name="filters"
            placeholder="year"
            value={year}
            options={years}
            onChange={handleYearChange}
          />
            </Col></Row>
            
          }
       
        </div>
        {guest || factors && factors[1] &&
        <Row className="justify-content-center">
          <Col lg={10} >
          <Card>
            <Card.Body>
            <div className="ag-theme-alpine" style={{height: 400, width: "auto"}}>
          <AgGridReact pagination={true} paginationPageSize={15} animateRows={true} serverSideStoreType={'full'}
                rowData={factors}>
               <AgGridColumn field="country" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="economy" sortable={true} filter={true}></AgGridColumn>          
               <AgGridColumn field="family" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="freedom" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="generosity" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="health" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="trust" sortable={true} filter={true}></AgGridColumn>          
           </AgGridReact>
       </div>
            </Card.Body>
          </Card>
          </Col>
        </Row>
          
        }
         {
           guest || 
          <div style={{margin:"10%"}}> 
          <Bar 
          className="animated fadeIn"
          data={graphData} />
          </div>
         }
        
         
        </div>
    )
}
