package myjavaproject.apis.service;

import myjavaproject.apis.entity.Movie;
import myjavaproject.apis.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Movie createMovie(String title, List<String> genres, List<Object> visits ){
        return mongoTemplate.insert(new Movie(title, genres, visits));
    }

}
