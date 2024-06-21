package myjavaproject.apis.contoller;

import com.mongodb.client.result.DeleteResult;
import jakarta.validation.Valid;
import myjavaproject.apis.entity.Movie;
import myjavaproject.apis.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<>(movieService.allMovies(), HttpStatus.OK);
    }
    @GetMapping("/{movieId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String movieId){
        return new ResponseEntity<>(movieService.singleMovie(movieId), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Movie> createMovie(@Valid @RequestBody Movie movie){
        return new ResponseEntity<>(movieService.createMovie(movie.getTitle(), movie.getGenres(), movie.getVisits()), HttpStatus.CREATED);
    }
    @DeleteMapping("/{movieId}")
    public ResponseEntity<DeleteResult> deleteMovie(@PathVariable String movieId){
        return new ResponseEntity<>(movieService.deleteMovie(movieId), HttpStatus.OK);
    }
}
