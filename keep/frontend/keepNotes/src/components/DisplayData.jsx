import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import keepContext from '../context/KeepContext';

const DisplayData = () => {
  const [list, setList] = useState([]);
  const{task,setTask}=useContext(keepContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4242/api/keep');
        const json = await response.json();
        setList(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [list]);
  const deleteTask = async (id) => {
    console.log("id is", id)
    try {
      const response = await fetch(`http://localhost:4242/api/keep/${id}`, {
        method: 'DELETE',
      });
      console.log("response", response);
      const json = await response.json();
      if (!response.ok) {
        console.log("error is", json.error || response.statusText);
      } else {
        console.log("outcome is", json);
      }
    } catch (error) {
      console.error("Error:", error);
    }

  }
  const editTask = (data) => {
    console.log("data is here", data)
    setTask(data)
  }
  return (
    <div>
      {list && list.map((data, index) => (
        <Stack direction="row" spacing={8} >
          <p key={index}>{data.task}  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteTask(data._id)}>
            Delete
          </Button>  <Button variant="contained" color="success" onClick={() => editTask(data)}>
              Edit
            </Button></p>
        </Stack>
      ))}
    </div>
  );
};

export default DisplayData;
