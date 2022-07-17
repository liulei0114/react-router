import MdEditor from "react-markdown-editor-lite";
// 导入编辑器的样式
import "react-markdown-editor-lite/lib/index.css";
import React from "react";
// 两种不同的解析器
import MarkdownIt from "markdown-it";
import ReactMarkdown from "react-markdown";
import { Button, Tree } from "@arco-design/web-react";
import _ from "lodash";

const mdParser = new MarkdownIt(/* Markdown-it options */);

type HTargetType = {
  key: string;
  level?: number;
  hLevel: number;
  title: string;
  children?: HTargetType[];
};

export default function HomePage() {
  const htmlStrRef = React.useRef("<h1>123</h1>");

  const [htmlStr, setHtmlStr] = React.useState<string>("");

  const [treeData, setTreeData] = React.useState([]);

  const toTree = (flatArr: HTargetType[]) => {
    if (_.isEmpty(flatArr)) {
      return [];
    }
    const tree: HTargetType[] = [];
    const cloneArr = [...flatArr];

    // 依据指定级别查找该级别的子孙级，并删除掉曾经查找到的子孙级
    const getChildrenByLevel = (
      currentLevelItem: HTargetType,
      arr: HTargetType[]
    ) => {
      if (!currentLevelItem) {
        return;
      }
      // 将level值转成正数，再进行比拟
      const minusCurrentLevel = -currentLevelItem.hLevel;
      const children = [];
      for (let i = 0, len = arr.length; i < len; i++) {
        const levelItem = arr[i];
        if (-levelItem.hLevel < minusCurrentLevel) {
          children.push(levelItem);
        } else {
          // 只找最近那些子孙级
          break;
        }
      }
      // 从数组中删除曾经找到的那些子孙级，免得影响到其余子孙级的查找
      if (children.length > 0) {
        arr.splice(0, children.length);
      }
      return children;
    };

    const getTree = (
      result: HTargetType[],
      arr: HTargetType[],
      level: number
    ) => {
      // 首先将数组第一位移除掉，并增加到后果集中
      let currentItem: HTargetType = arr.shift()!;

      currentItem.level = level;
      result.push(currentItem);
      while (arr.length > 0) {
        if (!currentItem) {
          return;
        }
        // 依据以后级别获取它的子孙级
        const children = getChildrenByLevel(currentItem, arr);
        // 如果以后级别没有子孙级则开始下一个
        if (children!.length == 0) {
          currentItem = arr.shift()!;
          currentItem.level = level;
          if (currentItem) {
            result.push(currentItem);
          }
          continue;
        }
        currentItem.children = [];
        // 查找到的子孙级持续查找子孙级
        getTree(currentItem.children, children!, level + 1);
      }
    };
    getTree(tree, cloneArr, 1);

    return tree;
  };

  const transformObj = (hList: string[] | null) => {
    if (hList === null) {
      return [];
    }
    const foo = hList.map((item, index) => {
      const hLevel = Number(item[2]);
      const title = item.substring(4, item.length - 5);
      return {
        hLevel,
        title,
        key: `${hLevel}-${index}`,
      };
    });
    return foo;
  };

  const getHTarget = () => {
    setHtmlStr(htmlStrRef.current);
    const reg = new RegExp(/<h[1-6]>.+?<\/h[1-6]>/gi);
    const hList = transformObj(htmlStrRef.current.match(reg));
    setTreeData(toTree(hList));
  };

  const renderHTML = (text: string) => {
    htmlStrRef.current = mdParser.render(text);
    return htmlStrRef.current;
  };
  return (
    <div>
      <MdEditor style={{ height: 400 }} renderHTML={renderHTML} />
      <Button type="primary" onClick={getHTarget}>
        装换
      </Button>
      <Tree
        treeData={treeData}
        onSelect={(_, { node }) => {
          const selectNode = Array.from(
            document.getElementsByTagName(`h${node.props.hLevel}`)
          ).find((item) => item.textContent === node.props.title);
          selectNode?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
