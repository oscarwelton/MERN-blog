import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";


export default function TextEditor() {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api");
        setApiKey(response.data.apiKey);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const editorRef = useRef(null);

  if (apiKey === "") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          toolbar:
            "undo redo | formatselect | " +
            "bold italic underline | alignleft aligncenter " +
            "alignright alignjustify | outdent indent blockquote | " +
            " h1 h2 h3 h4 h5 h6 |" +
            " hr |",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
