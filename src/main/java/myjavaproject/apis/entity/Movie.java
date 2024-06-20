package myjavaproject.apis.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
    @NotBlank(message = "should not be blank")
    private String title;
    @NotNull(message = "should have at least one genre")
    private List<String> genres;
    @NotNull (message = "should have at least on day visits")
    private List<Object> visits;

    public Movie(String title, List<String> genres, List<Object> visits) {
        this.title = title;
        this.genres = genres;
        this.visits = visits;
    }

}
