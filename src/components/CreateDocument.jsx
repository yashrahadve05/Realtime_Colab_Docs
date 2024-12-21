const CreateDocument = () => {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Create Document</h2>
        <textarea
          placeholder="Start typing your document here..."
          rows="10"
          style={{ width: "100%", padding: "1rem", margin: "1rem 0" }}
        ></textarea>
        <button type="button">Save Document</button>
      </div>
    );
  };
  
  export default CreateDocument;
  