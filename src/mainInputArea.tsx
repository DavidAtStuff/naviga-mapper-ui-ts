
import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
//import * as validation from './validation/validation';


const ArticleMapper = () => {
  const [form, setForm] = React.useState({
    articleId: ''
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
      event.preventDefault();

      alert(form.articleId);
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="articleId">Article Id</label>
        <div className="inputfiel">
          <input
          id="articleId"
          type="text"
          value={form.articleId}
          onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            required
            id="articleId"
            type="text"
            label="Required"
            defaultValue="Composer Id"
            value={form.articleId}
            onChange={handleChange}
            className="text-input-field"
          />
        </div>
      </div>
      <Button variant="contained">Submit</Button>
    </form>
  );
};


export default ArticleMapper;