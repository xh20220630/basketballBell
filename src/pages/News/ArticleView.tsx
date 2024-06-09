// 展示文章的View

import { MdEditor } from 'md-editor-rt';
import React, { useState } from 'react';

export default function ArticleView(): React.ReactElement {
  const [value] = useState<string>('+ ');
  const [id] = useState('preview-only');

  return (
    <>
      <div className="p-8 h-full">
        <MdEditor editorId={id} modelValue={value} />
      </div>
    </>
  );
}
