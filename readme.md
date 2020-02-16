# Notion Blog

Forked from [quietshu/notion-blog](https://github.com/quietshu/notion-blog).

## Guides to customize
1. Follow the [instructions](https://github.com/ijjk/notion-blog#creating-your-pages-table) to deploy your own project and connect it to your [Notion](https://www.notion.so/) server.
2. Modify `./src/styles/global.css` to adjust your blog CSS settings.
3. Go to modify titles, headlines and footnotes.
    - `src/pages/index.tsx` 
    - `src/pages/_app.tsx`
    - `src/pages/blog/index.tsx`
4. Modify display details for Notion block types. So far, it supports the following block types. 

|       Notion      	| Notion-blog 	|
|:-----------------:|:-----------:|
|        page       	|             	|
|      callout      	|      ✔️      	|
|      divider      	|      ✔️      	|
|        text       	|      ✔️      	|
|       image       	|      ✔️      	|
|       video       	|      ✔️      	|
|       header      	|      ✔️      	|
|        code       	|      ✔️      	|
|       quote       	|      ✔️      	|
|       audio       	|             	|
|      bookmark     	|             	|
|        maps       	|             	|
|   bulleted_list   	|      ✔️      	|
|   numbered_list   	|      ✔️      	|
|      equation     	|             	|
| table_of_contents 	|             	|
|       to_do       	|             	|
|       toggle      	|             	|
|       tweet       	|             	|