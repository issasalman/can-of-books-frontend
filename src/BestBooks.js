/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksData: [],
      showAddModal: false,
    };
  }

  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books`)
      .then((bookResponse) => {
        this.setState({ BooksData: bookResponse.data });
        console.log(this.state.BooksData);
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div>
        {this.state.BooksData.length > 0 ? (
          <>
            <Carousel>
              {this.state.BooksData.map((element) => {
                return (
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/1304642/pexels-photo-1304642.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt="Image One"
                    />
                    <Carousel.Caption>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <p>{element.status}</p>
                      <p>{element.email}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </>
        ) : (
          <p> "No Data Found" </p>
        )}
      </div>
    );
  }
}

export default BestBooks;
