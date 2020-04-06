import React from 'react';

function ListComponent(props){

  const edit_todo = () => {
   fetch('https://reqres.in/api/users/id',
   {
     method: 'POST',
     headers: {
       "Content-Type": "application/json"
     }
   })

   .then((res) => console.log('successful'))
   .catch((error) => {console.error("error");})
  }

  const delete_todo = () => {
   fetch('https://reqres.in/api/users/id',
   {
     method: 'POST',
     headers: {
       "Content-Type": "application/json"
     }
   })
   .then((res) => console.log('successful'))
   .catch((error) => {console.error("error");})
  }

  let {datas} = props
  return(
    <>
    {
      datas.map((data,i) => {
        let {id,email,first_name,last_name} = data
        return  <tr>
          <td key={i}>{`${id}`}</td>
          <td>{`${email}`}</td>
          <td>{`${first_name}`}</td>
          <td>{`${last_name}`}</td>
          </tr>
          // <td>
          //   <Button
          //     class="btn btn-warning btn-block my-4"
          //     type="submit"
          //     onClick={edit_todo}>
          //     EDIT
          //   </Button>
          // </td>
          // <td>
          //   <Button
          //     class="btn btn-danger btn-block my-4"
          //     type="submit"
          //     onClick={delete_todo}>
          //     DELETE
          //   </Button>
          // </td>

      })
    }
    </>
  )
}

export default ListComponent;
