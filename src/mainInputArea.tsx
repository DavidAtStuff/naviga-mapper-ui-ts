
import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import { Mainbox } from './ui/mainbox';
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
    <Box
    className="main-box"
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    sx={{ p: 2, border: '1px  grey' }}>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="articleId"></label>
        <div className="text-input-field-1">
          <TextField
            required
            id="articleId"
            type="text"
            label="Composer Id Input"
            defaultValue="Composer Id"
            value={form.articleId}
            onChange={handleChange}
            variant="standard"
          />
        </div>
      </div>

      <div className="text-input-button-1">
        <Button variant="contained">Submit</Button>
      </div>
      </form>
    </Box>
  );
};


export default ArticleMapper;