package myjavaproject.apis.service;

import com.mongodb.client.result.DeleteResult;
import myjavaproject.apis.entity.Movie;
import myjavaproject.apis.repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

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

    public Optional<Movie> singleMovie(ObjectId id){
        return movieRepository.findById(id);
    }

    public Movie createMovie(String title, List<String> genres, List<Object> visits ){
        return mongoTemplate.insert(new Movie(title, genres, visits));
    }

    public DeleteResult deleteMovie(ObjectId id){
        return mongoTemplate.remove(new Query((Criteria.where("_id").is(id))), Movie.class);
    }

}
