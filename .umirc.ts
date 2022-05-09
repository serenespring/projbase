import { defineConfig } from 'dumi';

const repo = 'projbase';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/serenespring/projbase',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      // {
      //   title: '示例',
      //   children: [
      //     // 菜单子项（可选）
      //     'components/Foo/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
      //   ],
      // },
      {
        title: '通用',
        children: [
          'components/ButtonPro/index.md',
          'components/IconPro/index.md',
        ],
      },
      {
        title: '数据展示',
        children: [
          'components/DescriptionsPro/index.md',
          'components/EditTable/index.md',
          'components/NormalSearch/index.md',
          'components/SearchTable/index.md',
          'components/ReactEchart/index.md',
        ],
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    '/zh-CN/components': [
      // 省略，配置同上
      {
        title: '通用',
        children: [
          'components/ButtonPro/index.md',
          'components/IconPro/index.md',
        ],
      },
      {
        title: '数据展示',
        children: [
          'components/DescriptionsPro/index.md',
          'components/EditTable/index.md',
          'components/NormalSearch/index.md',
          'components/SearchTable/index.md',
          'components/ReactEchart/index.md',
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
