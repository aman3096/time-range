import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Second from './Second';
import {Link} from 'react-router-dom';
import data from './Test JSON.json';


export default function First() {
    let names = Object.values(data["members"].map(d=>d.real_name));
    let identity = Object.values(data["members"].map(d=>d.id));
    let param =identity[0]
    let [id,setId]= useState(identity[0]);

    let tz = Object.values(data["members"]).map(d=>d.activity_periods)
    
    let start_times= tz.map(t=>t)

    let activity_times= data["members"].filter(h=>h.id==id).map(f=>f.activity_periods)


    const [datas,setDatas]=useState('');
    
    const values=Object.values(data["members"]).map(d=>
      <div className="card" style={{width:"50%"}}>
    <div className="card-body">
      <h5 className="card-title">{d.real_name}</h5>
    <p className="card-text">{d.id}</p>
    {d.tz}<br/>
      <br/>
      <button type="button" className="btn btn-primary" onClick={()=>setId(d.id)} data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <center>
      <h4> The activity times for Idhttps://github.com/aman3096/Time-ranges.git No.{id} are</h4>
      
      {Object.values(activity_times[0]).map(u=>
          <div className="container">
            <div className="row">
            <div className="col">
                <div className="card">
                <h5>Starts at {u.start_time} </h5><br/><h5> ends at {u.end_time}</h5>
                
                </div>
                <br/>
            </div>
            </div>
          </div>)}
    </center>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    </div><br/>
  </div>
  )

  return (
    <center>
      <br/>
      <h1> The following are the persons for their tracking</h1><br/>

      {values}
     
    </center>
  );
}
