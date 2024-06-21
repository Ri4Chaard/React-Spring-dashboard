package myjavaproject.apis.service;

import com.mongodb.client.result.DeleteResult;
import myjavaproject.apis.entity.Movie;
import myjavaproject.apis.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String movieId){
        return movieRepository.findByMovieId(movieId);
    }

    public Movie createMovie(String title, List<String> genres, List<Object> visits ){
        Optional<Movie> existingMovie = movieRepository.findByTitle(title);
        if(existingMovie.isPresent())
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Movie with such title already exists");
        return mongoTemplate.insert(new Movie(title, genres, visits));
    }

    public DeleteResult deleteMovie(String movieId){
        return mongoTemplate.remove(new Query((Criteria.where("movieId").is(movieId))), Movie.class);
    }

}
