/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import BookFormModal from "./BookFormModal";
import UpdateBookModal from "./UpdateBookModal";
import { withAuth0 } from "@auth0/auth0-react";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksData: [],
      showAddModal: false,
      showUpdateModal: false,
      selectedBook: {},
    };
  }

  handelAddModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/books`,
        reqBody
      )
      .then((createdCatObject) => {
        this.state.BooksData.push(createdCatObject.data); 
        this.setState({ BooksData: this.state.BooksData }); 
        this.handelDisplayAddModal(); 
      })
      .catch(() => alert("Something went wrong!"));
  };

  handelUpdateModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };
    console.log(reqBody);
    axios
      .put(`${process.env.REACT_APP_API_URL}/books/${this.state.selectedBook._id}`, reqBody)
      .then((updatedBooks) => {
        const updatedBooksArr = this.state.BooksData.map((book) => {
          if (book._id === this.state.selectedBook._id) {
            book = updatedBooks.data;

            return book;
          }
          return book;
        });
        this.setState({
          BooksData: updatedBooksArr,
          selectedBook: {},
        });
        console.log('updatedBooksArr',updatedBooksArr)
      this.handelDisplayUpdateModal();
   
    }).catch(() => alert("Something went wrong!"));
  }


  handelDeleteBook = (book_id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/books/${book_id}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newBooks = this.state.BooksData.filter(
            (book) => book._id !== book_id
          );

          this.setState({ BooksData: newBooks });
        }
        // window.location.reload();
      })
      .catch(() => alert("something!!!! went wrong"));
  };

  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  };
  handelDisplayUpdateModal = (book) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      selectedBook: book,
    });
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/${this.props.auth0.user.email}`)
      .then((bookResponse) => {
        this.setState({ BooksData: bookResponse.data });
        console.log(this.state.BooksData);
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div>
        <div style={{ background: "black", padding: "20px" }}>
          <Button onClick={this.handelDisplayAddModal}>Add Book</Button>
        </div>
        {this.state.showAddModal && (
          <>
            <BookFormModal
              showAddModal={this.state.showAddModal}
              handelAddModal={this.handelAddModal}
              handelDisplayAddModal={this.handelDisplayAddModal}
            />
          </>
        )}
        {this.state.showUpdateModal && (
          <>
            <UpdateBookModal
              handelUpdateModal={this.handelUpdateModal}
              handelDisplayUpdateModal={this.handelDisplayUpdateModal}
              showUpdateModal={this.state.showUpdateModal}
              selectedBook={this.state.selectedBook}
             
            />
          </>
        )}

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
                      <Button
                        variant="dark"
                        onClick={() => this.handelDeleteBook(element._id)}
                      >
                        Delete Book
                      </Button>
                      <Button
                        variant="dark"
                        onClick={() =>this.handelDisplayUpdateModal(element)}
                      >
                        Update Book
                      </Button>
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

export default withAuth0(BestBooks);

