package myjavaproject.apis.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    private ObjectId id;
    @Field("movieId")
    private String movieId;
    @NotBlank(message = "should not be blank")
    private String title;
    @NotEmpty(message = "should have at least one genre")
    private List<String> genres;
    @NotEmpty (message = "should have at least one entry")
    private List<Object> visits;

    public Movie(String title, List<String> genres, List<Object> visits) {
        this.movieId = new ObjectId().toHexString();
        this.title = title;
        this.genres = genres;
        this.visits = visits;
    }

}
