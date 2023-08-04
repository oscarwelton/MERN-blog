import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor() {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        apiKey='4896yuggbv3hvo6vfjvkxjht9tugogzz8c0ixpntpn6qnfyv'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          toolbar: 'undo redo | formatselect | ' +
          'bold italic underline | alignleft aligncenter ' +
          'alignright alignjustify | outdent indent blockquote | ' +
          ' h1 h2 h3 h4 h5 h6 |' +
          ' hr |',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}
