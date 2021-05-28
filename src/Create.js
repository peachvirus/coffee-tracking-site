import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
   const [title, setTitle] = useState(' ');
   const [body, setBody] = useState(' ');
   const [drink, setDrink] = useState(' ');
   const [author, setAuthor] = useState(' ');
   const [isPending, setIsPending] = useState(false);
   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, drink, author };

      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
         method: 'POST',
         headers: { "Content-type": "application/json"},
         body: JSON.stringify(blog)
      }).then(() => {
         console.log('new blog added');
         setIsPending(false);
         history.push('/');
      })
   }

   return (
      <div className="create">
         <h2>Add a New Log</h2>
         <form onSubmit={handleSubmit}>
            <label>Log Title:</label>
            <input
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <label>Log Body:</label>
            <textarea
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Drink Type:</label>
            <select
               value={drink}
               onChange={(e) => setDrink(e.target.value)}
            >
            <option value selected=" "></option>
            <option value="Latte (30 mg of caffiene)">Latte: 30 mg of caffiene</option>
            <option value="Black Coffee (45 mg of caffiene)">Black Coffee: 45 mg of caffiene</option>
            </select>
            <label>Log Author:</label>
            <select
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
            >
            <option value selected=" "></option>
            <option value="Plum">Plum</option>
            <option value="Peach">Peach</option>
            </select>
            { !isPending && author===" " && <text style={{fontWeight: "bold", color:"red"}}>Please Select An Author Before Submitting.</text>}
            { <br></br>}
            { !isPending && <button>Add Blog</button>}
            { isPending && <button disabled>Adding...</button>}
         </form>
      </div>
   );
}

export default Create;