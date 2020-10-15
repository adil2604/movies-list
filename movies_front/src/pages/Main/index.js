import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import {
  getMoviesList,
  addMoviesList,
  destroyMoviesList,
  destroyMovie,
  addMovieToList,
} from "../../services/movies";

export default function MainPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovies, setMovies] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [listShow, setListShow] = useState(false);
  const [listName, setListName] = useState([]);
  const handleListClose = () => setListShow(false);
  const handleListShow = () => setListShow(true);
  const [movieName, setMovieName] = useState([]);
  const [movieShow, setMovieShow] = useState(false);
  const handleMovieClose = () => setMovieShow(false);
  const handleMovieShow = () => setMovieShow(true);
  useEffect(() => {
    fetchMoviesList();
  }, []);
  const fetchMoviesList = (index) => {
    getMoviesList().then((res) => {
      setMoviesList(res.data);
      console.log(index);
      if (index !== null) {
        console.log(res.data[index]);
        setMovies(res.data[index]);
      }
    });
  };
  const handleDestroyMoviesList = (id) => {
    destroyMoviesList({ id: id }).then(() => {
      fetchMoviesList();
    });
  };
  const handleDestroyMovie = (id) => {
    console.log(selectedIndex);
    destroyMovie({ id: id }).then(() => {
      fetchMoviesList(selectedIndex);
    });
  };
  const handleListSubmit = (e) => {
    e.preventDefault();
    addMoviesList({ name: listName }).then(() => {
      setListShow(false);
      fetchMoviesList();
    });
  };
  const handleMovieSubmit = (e) => {
    e.preventDefault();
    addMovieToList({ name: movieName, movies_list_id: selectedMovies.id }).then(
      () => {
        setMovieShow(false);
        fetchMoviesList(selectedIndex);
      }
    );
  };
  const handleListClick = (data, index) => {
    setSelectedIndex(index);
    setMovies(data);
  };
  return (
    <Container fluid>
      <Row>
        <Col sm={6}>
          <h3>Movies Lists</h3>
          <Row className="m-2">
            <Button variant="success" onClick={handleListShow}>
              Create movies list
            </Button>
          </Row>
          <ListGroup>
            {moviesList.map((list, index) => (
              <ListGroup.Item
                action
                className="d-flex justify-content-between"
                onClick={() => handleListClick(list, index)}
                active={list.id == selectedMovies?.id}
              >
                {list.name}
                <Button
                  variant="danger"
                  onClick={() => handleDestroyMoviesList(list.id)}
                  size="sm"
                >
                  X
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={6}>
          {selectedMovies && (
            <>
              <h3>Movies</h3>
              <Row className="m-1 d-flex justify-content-end">
                <Button variant="success" onClick={handleMovieShow}>
                  Add movie
                </Button>
              </Row>
              <ListGroup>
                {selectedMovies?.movies?.map((movie) => (
                  <ListGroup.Item
                    className="d-flex justify-content-between"
                    action
                  >
                    {movie.name}
                    <Button
                      variant="danger"
                      onClick={() => handleDestroyMovie(movie.id)}
                      size="sm"
                    >
                      X
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
      <Modal show={listShow} onHide={handleListClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create movie list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleListSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Movies list name</Form.Label>
              <Form.Control
                type="text"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={movieShow} onHide={handleMovieClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie to list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleMovieSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
