import axios from "axios";
import { useState } from "react";
import React from "react";
const Crud = () => {





    const taskobj = {
        title: "",
        assignee: "",
        dueDate: "",
        completed: true

    }

    const [taskdata, settaskdata] = useState(taskobj);
    const [gettaskdata, setgettingtask] = useState([]);
    const [data, setdata] = useState(taskobj);
    const [withoutvalue, setwithoutvalue] = useState("");


    const [titledata, settitle] = useState("");
    const posttaskdetails = async (taskobj) => {

        const postingdetails = await axios.post(`http://localhost:8888/api/tasks`, taskobj);
        console.log(postingdetails);
        settaskdata(taskobj);
    }

    const getdata = async () => {
        const resultant = await axios.get(`http://localhost:8888/api/tasks`);
        setgettingtask(resultant.data);
    }

    const getdataid = async (tid) => {
        const getdata = await axios.get(`http://localhost:8888/api/tasks/gettask?tid=${tid}`);
        settaskdata(getdata.data);
    }

    const editdata = async (taskobj) => {
        const edat = await axios.put(`http://localhost:8888/api/tasks/${taskdata.tid}`, taskdata);
        settaskdata(edat.data);
        settaskdata(taskobj);
    }

    const datatypehandleing = async (id) => {
        const callapi = await axios.get(`http://localhost:8888/api/tasks/gettask?tid=${id}`)
        const result = Array.isArray(callapi) ? callapi.data : callapi.data.data ?? callapi.data ?? [];
        setdata(result);


    }


    const withoutvalues = (e) => {
        setwithoutvalue(e.target.value);
    }
    return (<>

        <div>
            <h1>{titledata}</h1>
        </div>





        <div>

            <input type="text" placeholder="entertitle" value={titledata} onChange={(e) => settitle(e.target.value)}></input>

        </div>
        <br></br>

        <div>
            <input type="text" value={taskdata.title} onChange={(e) => settaskdata({ ...taskdata, title: e.target.value })} placeholder="Enter Title" /> Title Name<br />
            <input type="text" value={taskdata.assignee} onChange={(e) => settaskdata({ ...taskdata, assignee: e.target.value })} placeholder="Enter Discription" /> Discription<br />
            <input type="checkbox" checked={taskdata.completed} onChange={(e) => settaskdata({ ...taskdata, completed: e.target.checked })} /> Completed<br />
            <input type="date" value={taskdata.dueDate || ''} onChange={(e) => settaskdata({ ...taskdata, dueDate: e.target.value })} /> Due Date<br />
            <button onClick={() => posttaskdetails(taskdata)}>submit</button>
            <button>update</button>
            <button onClick={() => editdata(taskobj)}>updatedata</button>
        </div>
        <br></br>
        <br></br>

        <table>
            <tr>
                <td>title</td>
                <td>assignee</td>
                <td>dueDate</td>
                <td>completed</td>
            </tr>
            {gettaskdata.map((item, index) => (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.assignee}</td>
                    <td>{item.dueDate}</td>
                    <td>{item.completed ? "Yes" : "No"}</td>
                    <td>
                        <button onClick={() => getdataid(item.tid)}>
                            ✏️ Edit
                        </button>
                    </td>

                </tr>
            ))}
        </table>

        <br></br>


        {gettaskdata.map((value, index) => (

            <ul >
                <li>
                    {value.tid} </li>
                <li>{value.title}</li>
                <li>{value.assignee}</li>
                <li>{value.dueDate}</li>
                <li >{value.completed}</li>


            </ul >
        ))}


        <div>

            <button onClick={getdata}>click to get data</button>
        </div>
        <button onClick={() => getdata}></button>


        <div>
            <button onClick={() => datatypehandleing(3)}>click handle</button>
            <ul>
                <li>{data.tid}</li>
                <li>{data.title}</li>
                <li>{data.assignee}</li>
                <li>{data.dueDate}</li>
                <li>{data.completed ? "Yes" : "No"}</li>
            </ul>
        </div>
        <input type="text" placeholder='enter data' />
        <button onClick={(e) => withoutvalues(e)}>click</button>
        <p>{withoutvalue}</p>
    </>)
}
export default Crud;