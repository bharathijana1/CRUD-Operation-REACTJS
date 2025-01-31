import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

// npm i axios
// npm i semantic-ui-react
// npm i react-router-dom

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData')
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
  }

  const onDelete = (id) => {
    axios.delete(`https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData/${id}`)
    .then(() => {
      getData();
    })
  }

  const getData = () => {
    axios.get(`https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell className='p-3'>{data.firstName}</Table.Cell>
                <Table.Cell className='p-3'>{data.lastName}</Table.Cell>
                <Table.Cell className='p-3'>{data.checkbox ? 'checkbox' : 'Unchecked'}</Table.Cell>
                <Link to='/update'>
                  <Table.Cell className='p-3'>
                    <Button className='btn btn-warning' onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell  className='p-3'>
                  <Button className='btn btn-danger' onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}