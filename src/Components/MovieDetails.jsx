import { Card, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";





export default function MovieDetails()
{

    const loc = useLocation();
    const movie = loc.state.movie;

    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
           {movie.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Rating {movie.rate}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link>{movie.trailer}</Card.Link>
        </Card.Body>
      </Card>
      <iframe width="560" height="315" title="movie" src={movie.trailer} ></iframe>
      </div>
    );
}
