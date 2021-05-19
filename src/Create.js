import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
   const [title, setTitle] = useState(' ');
   const [body, setBody] = useState(' ');
   const [author, setAuthor] = useState(' ');
   const [isPending, setIsPending] = useState(false);
   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };

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
            <label>Log Author:</label>
            <select
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
            >
            <option value="Plum">Plum</option>
            <option value="Peach">Peach</option>
            </select>
            { !isPending && <button>Add Blog</button>}
            { isPending && <button disabled>Adding...</button>}
         </form>
      </div>
   );
}

export default Create;