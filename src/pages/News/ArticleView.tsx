// 展示文章的View

import { MdPreview } from 'md-editor-rt';
import React, { useContext, useState } from 'react';
import { ArticleFormContext } from '.';

export default function ArticleView(): React.ReactElement {
  const {value} = useContext(ArticleFormContext);
  const [id] = useState('preview-only');

  return (
    <>
      <div className="p-8 h-full">
        <MdPreview editorId={id} modelValue={value.content} />
      </div>
    </>
  );
}
