import React, { useState } from "react";

const NewPoemForm = props => {
  const [formData, setFormData] = useState({title: '', author: '', content: ''});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.appHandleSubmit(formData);
    setFormData({title: '', author: '', content: ''})
  };

  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input name="title" placeholder="Title" onChange={handleChange} value={formData.title} />
      <input name="author" placeholder="Author" onChange={handleChange} value={formData.author} />
      <textarea name="content" placeholder="Write your masterpiece here..." onChange={handleChange} value={formData.content} rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
};

export default NewPoemForm;
