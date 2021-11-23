import React from 'react'
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function PageChange() {
    return (
        <div>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{"Back"}</Pagination.Item>
                <Pagination.Item>{"Next"}</Pagination.Item>
                <Pagination.Next />
                
            </Pagination>
        </div>
    )
}

export default PageChange
