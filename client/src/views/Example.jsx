import React from 'react';
import { MDBDataTable, MDBTableHead, MDBTable, MDBTableBody, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter, MDBCardTitle, MDBBtn } from 'mdbreact';
import { Table, Card, CardHeader, CardTitle, CardBody, Row, Col, Button } from "reactstrap";
import { readJsonConfigFile } from 'typescript';
import axios from 'axios';
//import { connect } from 'react-redux';


class Example extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      data : {
        columns: [
          {
            label: 'ID',
            field: 'id',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Họ và tên',
            field: 'fullname',
            sort: 'asc',
            width: 270
          },
          {
            label: 'CMND',
            field: 'id_card',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Ngày sinh',
            field: 'birthday',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Số điện thoại',
            field: 'phone',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Địa chỉ',
            field: 'address',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Thao tác',
            field: 'button',
            width: 100
          }
        ],
        rows: //his.props 
        [
          {
            id: '001',
            fullname: 'Nguyễn Thị Phương Nhi',
            id_card: '272695452',
            email: 'phuongnhi@gmail.com',
            birthday: '01/01/1999',
            phone: '0961619712',
            address: 'HCM',
            role: '1',
            status: '1',
            button:
            <div>
              <MDBBtn className="edit-btn" size="sm"> Sửa</MDBBtn>
              <MDBBtn className="delete-btn" size="sm"> Xóa</MDBBtn>
            </div>
          },
        ]
      },
      isActive : true
    }
  }

componentWillMount(){
  const data = this.state.data;

    axios.post('http://localhost:5000/users/show')
      .then((res) => 
      {   console.log(res.data)
          let ress = res.data.map (data => data.button =  <div>
            <MDBBtn className="edit-btn" size="sm"> Sửa</MDBBtn>
            <MDBBtn className="delete-btn" size="sm"> Xóa</MDBBtn>
          </div>) 
      
         this.setState({
          data: {
            columns: [
              {
                label: 'ID',
                field: 'code_emp',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Họ và tên',
                field: 'fullname',
                sort: 'asc',
                width: 270
              },
              {
                label: 'CMND',
                field: 'identity_card',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 100
              },
              // {
              //   label: 'Ngày sinh',
              //   field: 'birthday',
              //   sort: 'asc',
              //   width: 150
              // },
              {
                label: 'Số điện thoại',
                field: 'phone',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Địa chỉ',
                field: 'address',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Thao tác',
                field: 'button',
                width: 100
              }
            ],
          rows : res.data 
        
          }
          })
    console.log(this.state.data);
    
  }
  );
}

render()
{ 
    return (
    <div className="content">
      <Row>
        <Col md="12">
          <MDBCard>
            <MDBCardHeader>
              <MDBCardTitle tag="h3">
                Danh sách khách hàng
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBBtn className="add-btn" size="sm">Thêm</MDBBtn>
              <MDBTable responsive>
              <MDBDataTable data = {this.state.data} >
              </MDBDataTable>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </Col>
      </Row>
    </div> 
  )
}
}

export default Example;