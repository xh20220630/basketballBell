// 展示文章的View

import React from 'react';
import ReactQuill from 'react-quill';

export default function ArticleView(): React.ReactElement {
  return (
    <>
      <div className="p-8 h-full">
        <ReactQuill
          className="border-none h-full"
          modules={{
            toolbar: false,
          }}
          readOnly={true}
        />
      </div>
    </>
  );
}
