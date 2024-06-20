package myjavaproject.apis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie){
        return new ResponseEntity<Movie>(movieService.createMovie(movie.getTitle(), movie.getGenres(), movie.getVisits()), HttpStatus.CREATED);
    }
}
