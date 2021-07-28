import React , {useState,useEffect} from 'react'
import {useGlobalContext} from '../context'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {Line } from 'react-chartjs-2'
import Select from 'react-select';
import {Row,Col,Jumbotron,Button} from 'react-bootstrap'
export default function Rankings() {
    const {rankings} = useGlobalContext();
    const {countries} = useGlobalContext();
    
    let {selectedvalues} = useGlobalContext();
    
    let {setselectedValues} = useGlobalContext();
    const [chartData, setchartData] = useState({
        labels : [2015,2016,2017,2018,2019,2020],
        datasets :[
            {
                label : 'level of Happiness',
                data : [],
                backgroundColor : ['rgba(200,10,60,0.6)'],
                borderWidth:4
        }
        ] 
    })
    let data=[]
    const options = [];
    countries.map((country)=>{
      options.push({value:country,label:country})
    })
    const handleselectedChange = selectedOption => {
        const {label} = selectedOption;
      setselectedValues({label})
  };
    
    useEffect(() => {

        data=[];
        rankings.map((rank)=>{
            const {country,score}=rank;
            const {label} = selectedvalues
            if(country===label){
                data.push(score);
            }
            
            
        });
        setchartData({
            labels : [2015,2016,2017,2018,2019,2020],
            datasets :[
                {
                    label : 'level of Happiness',
                    data : data,
                    backgroundColor : ['rgba(200,10,60,0.6)'],
                    borderWidth:4
            }
            ] 
        })
        
    }, [selectedvalues]) 

    return (
       
        <div>
            <Jumbotron style={{backgroundColor:"whiteSmoke"}}>
                <h1 style={{fontFamily:"Goblin One"}}>Be Happy</h1>
                <p>
                It is not how much we have, but how much we enjoy, that makes happiness
                </p>
                
            </Jumbotron>
            <Row className="justify-content-center">
                <Col md={10} md={6}>
                <div className="ag-theme-alpine" style={{height: 400, width: "auto"}}>
                <h1>Rankings</h1>
            <AgGridReact pagination={true} paginationPageSize={15}           
            animateRows={true}       serverSideStoreType={'full'} rowData={rankings}>
                <AgGridColumn field="rank" sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
                <AgGridColumn field="country" sortable={true} filter="agTextColumnFilter"></AgGridColumn>
                <AgGridColumn field="score" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="year" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
       </div>
                </Col>
            </Row>
        
      
            
       <div style={{margin:"10%",backgroundColor:"white"}}>
           <div styles={{width:"70%"}}>
           <Select 
                    name="filters"
                    placeholder="coutries"
                    value={selectedvalues}
                    options={options}
                    onChange={handleselectedChange}
                    
                    />
           </div>
            
           <Line data={chartData} />
           </div>
       </div>
    )
}
 