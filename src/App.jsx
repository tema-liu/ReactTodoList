import styled from "styled-components";
import logo from "./assets/images/logo_lg.png";
import Nav from "./Nav";
import Control from "./Control";
import Content from "./Content";
import { useState } from "react";

const MainSection = styled.div`
  max-width: 500px;
  margin: 40px auto;
`;

let list = [
  { content: "今天吃咖哩", id: "0:r1:", time: null },
  { content: "今天要去台中玩", id: "1:r1:", time: null },
  { content: "今天要喝抹茶拿鐵", id: "2:r1:", time: null },
];
function App() {
  const [todoList, setList] = useState(list);

  //ListItem增加方法
  const onAdd = (value) => {
    const newArray = [...todoList, value];
    setList(newArray);
  };

  //List修改方法
  const fixItem = (value) => {
    console.log(value);
    const newArray = todoList.map((item) => {
      if (item.id === value.id) {
        // 找到匹配的項目並更新其 content
        return { ...item, content: value.content };
      }
      return item;
    });
    setList(newArray);
  };

  const itemIsDone = (id) => {
    const newArray = todoList.map((item) => {
      const isChecked = item.time === null ? true : null;
      if (item.id === id) {
        // 找到匹配的項目並更新其 content
        return { ...item, time: isChecked };
      }
      return item;
    });
    setList(newArray);
  };

  return (
    <>
      <Nav name="tema" />
      <MainSection>
        <Control onAdd={onAdd} />
        <Content
          todoList={todoList}
          fixItem={fixItem}
          itemIsDone={itemIsDone}
        />
      </MainSection>
    </>
  );
}

export default App;
