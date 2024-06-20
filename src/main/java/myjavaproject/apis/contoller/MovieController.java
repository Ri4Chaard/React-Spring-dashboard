package myjavaproject.apis.contoller;

import jakarta.validation.Valid;
import myjavaproject.apis.entity.Movie;
import myjavaproject.apis.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<>(movieService.allMovies(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Movie> createMovie(@Valid @RequestBody Movie movie){
        return new ResponseEntity<>(movieService.createMovie(movie.getTitle(), movie.getGenres(), movie.getVisits()), HttpStatus.CREATED);
    }
}
