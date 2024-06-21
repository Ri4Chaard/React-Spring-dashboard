import { useState } from "react";

interface Visit {
    timestamp: number;
    quantity: number | undefined;
}

export const AddMovie = ({ addMovie }: any) => {
    const [form, setForm] = useState({
        title: "",
        genres: [] as string[],
        visits: [] as Visit[],
    });
    const [date, setDate] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let genres = form.genres;
        const { value, checked } = e.target;
        if (checked) genres.push(value);
        else genres = genres.filter((genre) => genre !== value);
        setForm({ ...form, genres: genres });
    };
    const handleAddVisit = () => {
        const visit: Visit = {
            timestamp: date,
            quantity: quantity,
        };
        setForm({ ...form, visits: [...form.visits, visit] });
        setQuantity(0);
    };

    return (
        <div>
            <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                placeholder="Title of movie"
                onChange={handleChange}
                className="mb-3"
            />
            <fieldset className="mb-3">
                <legend>Choose your genres</legend>
                {[
                    "Thriller",
                    "Drama",
                    "Comedy",
                    "Horror",
                    "Sci-Fi",
                    "Crime",
                    "Action",
                ].map((genre: string) => (
                    <div key={genre}>
                        <input
                            type="checkbox"
                            id={genre.toLowerCase()}
                            name={genre.toLowerCase()}
                            value={genre}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={genre.toLowerCase()}>{genre}</label>
                    </div>
                ))}
            </fieldset>
            {form.visits.length > 0 && (
                <>
                    <button
                        className="font-bold"
                        onClick={() => setForm({ ...form, visits: [] })}
                    >
                        Clear
                    </button>
                    {form.visits.map((visit: Visit) => (
                        <div
                            key={visit.timestamp}
                            className="flex justify-between"
                        >
                            <p>{new Date(visit.timestamp).toDateString()}</p>
                            <p>{visit.quantity}</p>
                        </div>
                    ))}
                </>
            )}

            <div className="mb-3">
                <p>Add visits:</p>
                <input
                    id="date"
                    name="date"
                    type="date"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDate(Date.parse(e.target.value))
                    }
                />
                <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={0}
                    value={quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setQuantity(Number(e.target.value))
                    }
                />
                <button onClick={handleAddVisit}>+</button>
            </div>
            <button className="font-bold " onClick={() => addMovie(form)}>
                Add movie
            </button>
        </div>
    );
};
