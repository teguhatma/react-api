import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class Data extends Component {
    constructor(){
      super();
      this.state = {
        isLoaded: false,
        books: [],
        error: null
      }
    }
  
    componentDidMount(){
        fetch('http://127.0.0.1:5000/api/v1/resources/books/all')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                books: json,
            })
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        }
      )
    }
  
      render(){
          var { isLoaded, books, error} = this.state;
          if (error) {
              return <div>Error: {error.message}</div>
          } else if (!isLoaded){
              return <div>Loading ... </div>
          } else {
              return (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Published</th>
                        </tr>
                    </thead>
                    <tbody>
                        { books.map(item => (
                        <tr>
                            <td key={item.id}>{item.id + 1}</td>
                            <td key={item.title}>{item.title}</td>
                            <td key={item.author}>{item.author}</td>
                            <td key={item.published}>{item.published}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
              )
          }
      }
  }