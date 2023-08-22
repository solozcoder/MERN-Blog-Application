import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorLayout = (props) => {
  // console.log(props);
  // const editorRef = useRef(null);

  return (
    <Editor
      apiKey="4c795nswkvn5s06paa79iqnyyxrim28w5uogegu6t3wril6t"
      // onInit={(evt, editor) => {
      //   // editorRef.current = editor;
      // }}
      onChange={(evt, editor) => props.setContent(editor.getContent())}
      // initialValue={editorRef.current?.getContent()}
      init={{
        branding: false,
        height: 500,
        // menubar: false,

        // Media Seeting
        draggable_modal: true,

        // Auto Save Setting
        autosave_interval: "10s", // Autosave interval (in seconds)
        autosave_prefix: "autosave-blog-post-1-",
        autosave_restore_when_empty: true,

        // Font Setting
        font_family_formats:
          "Arial=arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Verdana=verdana,geneva,sans-serif; Courier New=courier new,courier,monospace;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
        font_size_formats:
          "2px 4px 6px 8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px",

        plugins: [
          "autosave",
          "advlist",
          "anchor",
          "autolink",
          "charmap",
          "fullscreen",
          "image",
          "insertdatetime",
          "link",
          "lists",
          "media",
          "preview",
          "searchreplace",
          "table",
          "visualblocks",
          "accordion",
        ],
        toolbar:
          "undo redo | styles | " +
          "bold italic backcolor forecolor | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist outdent indent |" +
          "image link media",
        // "undo redo | styles | bold  | outdent indent forecolor backcolor | image link ",
        // fontfamily fontsize |
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height: 1.5; } p { margin: 0; line-height: 1.5; padding: 0; }",
      }}
    />
  );
};

export default EditorLayout;
