package myjavaproject.apis;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    private ObjectId id;
    private String title;
    private List<String> genres;
    private List<Object> visits;

    public Movie(String title, List<String> genres, List<Object> visits) {
        this.title = title;
        this.genres = genres;
        this.visits = visits;
    }
}
