// 导入常量配置
import { HotDiscussProps, SortMetaType } from '@/Types/componentsType';
import {
  CoffeeOutlined,
  EyeOutlined,
  HomeFilled,
  MobileOutlined,
  SettingOutlined,
  TagOutlined,
  VideoCameraFilled,
  WhatsAppOutlined,
} from '@ant-design/icons';

export const metaType: SortMetaType = {
  sortList: [
    {
      name: '家',
      icon: HomeFilled,
    },
    {
      name: '阅读清单',
      icon: EyeOutlined,
    },
    {
      name: '播客',
      icon: CoffeeOutlined,
    },
    {
      name: '视频',
      icon: VideoCameraFilled,
    },
    {
      name: '标签',
      icon: TagOutlined,
    },
  ],
  otherList: {
    title: '其他',
    list: [
      {
        name: '设置',
        icon: SettingOutlined,
      },
      {
        name: '反馈',
        icon: MobileOutlined,
      },
      {
        name: '帮助',
        icon: WhatsAppOutlined,
      },
      {
        name: '关于',
        icon: WhatsAppOutlined,
      },
    ],
  },
  bottomIconList: [
    {
      icon: HomeFilled,
    },
    {
      icon: EyeOutlined,
    },
    {
      icon: CoffeeOutlined,
    },
    {
      icon: VideoCameraFilled,
    },
  ],
  myTagList: {
    title: '我的标签',
    list: [
      {
        name: '设置',
      },
      {
        name: '反馈',
      },
      {
        name: '帮助',
      },
      {
        name: '关于',
      },
      {
        name: '设置',
      },
      {
        name: '反馈',
      },
      {
        name: '帮助',
      },
      {
        name: '关于',
      },
    ].map((item) => {
      return {
        name: '#' + item.name,
      };
    }),
  },
};

// 定义数据
export const HotDiscussList: HotDiscussProps[] = [
  {
    title: {
      main: ' 讨论热榜',
    },
    discussList: [
      {
        content:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',
        num: 1,
      },
      {
        content:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',
        num: 1,
      },
      {
        content:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',
        num: 1,
      },
    ],
  },
  {
    title: {
      main: ' 讨论',
      sub: '#针对整个社区的讨论主题',
    },
    discussList: [
      {
        content:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',
        num: 1,
      },
      {
        content:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',
        num: 1,
      },
      {
        content:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',
        num: 1,
      },
    ],
  },
];

// form 验证

export const FormVerification: Record<string, any> = {
  email: {
    verify: '^\\w+(-+.\\w+)*@\\w+(-.\\w+)*.\\w+(-.\\w+)*$',
    msg: '请输入正确的邮箱格式',
  },

  text: {
    verify: '',
    msg: '',
  },
};

// 最大的标签数量
export const ArticleTagMaxCount = 4;
