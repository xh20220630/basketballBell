import { TagRenderData } from '@/Types/componentsType';
import { ArticleTagMaxCount } from '@/constants';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Select, SelectProps } from 'antd';
import { useContext, useEffect, useRef } from 'react';
import { useTextArea } from './hooks';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { ArticleFormContext } from '.';


//自定义tag 的渲染项
const TagRender: SelectProps['optionRender'] = (options) => {
  const { data } = options;
  return (
    <div>
      <div id="title">{data.label}</div>
      <div id="description">{data.description || '暂无描述'}</div>
    </div>
  );
};

export function ArticleForm() {
  const textRef = useRef(null);
  const {value:titleValue, setValue:setTitleValue,minHeight, preventBlock } = useTextArea();

  const {value, setValue} = useContext(ArticleFormContext);

  useEffect(()=>{
    setValue((value)=>{
      return {
        ...value,
        title:titleValue
      }
    })
  }, [titleValue])

  const tagOptions: TagRenderData[] = [
    {
      label: 'node',
      value: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus esse! Obcaecati, dicta? Deserunt recusandae, omnis nisi possimus repellendus eligendi atque in laudantium totam et libero quis doloremque repudiandae dolore.',
    },
    {
      label: 'react',
      value: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus esse! Obcaecati, dicta? Deserunt recusandae, omnis nisi possimus repellendus eligendi atque in laudantium totam et libero quis doloremque repudiandae dolore.',
    },
    {
      label: '学习',
      value: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus esse! Obcaecati, dicta? Deserunt recusandae, omnis nisi possimus repellendus eligendi atque in laudantium totam et libero quis doloremque repudiandae dolore.',
    },
    {
      label: '生活',
      value: 4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus esse! Obcaecati, dicta? Deserunt recusandae, omnis nisi possimus repellendus eligendi atque in laudantium totam et libero quis doloremque repudiandae dolore.',
    },
    {
      label: '聊天',
      value: 5,
      description: '',
    },
    {
      label: '交友',
      value: 6,
      description: '',
    },
  ];

  return (
    <>
      <div className="p-8 flex flex-col gap-4">
        <div>
          {/*上传图片的按钮 */}
          <Button
            className=" w-max h-[36px] tracking-wide"
            icon={<UploadOutlined />}
          >
            点击上传封面图
          </Button>
        </div>

        {/* 标题区域 */}
        <div>
          <textarea
            value={titleValue}
            onInput={(event: any) =>
              setTitleValue(event, event.target.value, textRef)
            }
            onKeyDown={preventBlock}
            placeholder="新的文章标题"
            className="text-5xl outline-none overflow-hidden w-[550px]"
            style={{
              minHeight: minHeight + 'px',
              maxHeight: minHeight + 'px',
            }}
          ></textarea>
          <textarea
            value={titleValue}
            onKeyDown={preventBlock}
            placeholder="新的文章标题"
            className="text-5xl h-0 invisible absolute -z-50 -left-full w-[550px] overflow-hidden"
            ref={textRef}
            readOnly
          ></textarea>
        </div>
        <div>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="最多选择四个文章标签"
            options={tagOptions}
            optionRender={TagRender}
            labelInValue={true}
            maxCount={ArticleTagMaxCount}
          />
        </div>
      </div>
      <div className="p-4 flex-1">
        <MdEditor
        placeholder='写下你的想法'
        modelValue={value.content}
        style={{
          height:"100%"
        }}
        onChange={val=>{
          setValue(defaultVal=>({
            ...defaultVal,
            content:val
          }))
        }}
        preview={false}
        ></MdEditor>
      </div>
    </>
  );
}
