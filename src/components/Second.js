import React,{useState} from 'react';
import data from './Test JSON.json';

export default function Second() {
  let url = window.location.href;
  let param = window.location.pathname;
  let modalValue="hello";

  param=param.substring(1);
  let activity_times= data["members"].filter(h=>h.id==param).map(f=>f.activity_periods )
  let start_time=activity_times[0].map(d=>d.start_time)
  let end_time=activity_times[0].map(d=>d.end_time)
  let len = start_time.length
  return (
    <center>
      <h3> The activity times for {data["members"].filter(h=>h.id==param)["real_name"]} are:</h3>
        {activity_times[0].map(u=>
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
  );
}
