import React, {useState, useEffect} from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ListComponent from './ListComponent'

const ProfileComponent = (props) => {
  //For storing list of data
  const [datas, setDatas] = useState([])

  //For storing title and name
  const [name, setName] = useState("")
  const [job, setJob] = useState("")

  //For loading list
  useEffect (() =>{
    fetch('https://reqres.in/api/users')
    .then((jsonResponse)=>{
      return jsonResponse.json();
    }).then((parseResponse) => {
      setDatas(parseResponse);
    }).catch((error) =>{
      console.log(error);
    })
  })

  //For add data into database
  const add_todo = () => {
   fetch('https://reqres.in/api/users',
   {
     method: 'POST',
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({name: name, job: job})
   })
   .then((res) => console.log('successful'))
   .catch((error) => {console.error("error");})
  }

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div>
      <Alert color="info" isOpen={visible} toggle={onDismiss} class="text-center">
        Welcome to Board
      </Alert>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={job}/>
        </FormGroup>
        <FormGroup>
          <Label for="job">Job</Label>
          <Input
            type="text"
            name="job"
            onChange={(e) => setJob(e.target.value)}
            value={job}/>
        </FormGroup>
        <Button onClick={add_todo} type="button">
          submit
        </Button>
        <hr />
      </Form>
      <ListComponent datas={datas}/>
    </div>
  );
}

export default ProfileComponent;
