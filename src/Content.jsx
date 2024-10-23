import styled from "styled-components";
import { useState } from "react";

const ListTags = styled.div`
  display: flex;
  visibility: ${(props) => (props.$hasItem ? "visible" : "hidden")};
  margin-top: 16px;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const ListTag = styled.a`
  display: block;
  width: 100%;
  padding: 16px 0;
  text-align: center;
  background-color: white;
  color: black;
  border-bottom: ${(props) =>
    props.$active ? "3.5px solid black" : "3.5px solid rgba(229, 229, 229, 1)"};
  font-weight: 700;
  transition: all 0.2s ease;
  &:hover {
    border-bottom: 3.5px solid black;
    color: black;
  }

  &:first-child {
    border-radius: 10px 0 0 0;
  }
  &:last-child {
    border-radius: 0 10px 0 0;
  }
`;

const TodoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 16px 24px;
  border-bottom: 1px solid rgb(229, 229, 229);
`;
const TodoCheckBox = styled.input`
  position: relative;
  cursor: pointer;
  margin-right: 16px;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid rgba(159, 154, 145, 1);

  &:checked {
    background-color: transparent;
    border: none;

    &::after {
      content: "\u2714";
      font-size: 18px;
      color: #ffd370;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const ItemDeleteContent = styled.div`
  flex: 1;
  text-align: end;
  &:hover button {
    color: black;
  }
  button {
    border: 0;
    font-size: 20px;
    background: transparent;
    color: transparent;
    cursor: pointer;
    transition: color 0.25s ease;
  }
  button:hover {
    color: black;
  }
`;

const TodoContent = styled.p`
  overflow: hidden;
`;

function Content({ todoList, fixItem, itemIsDone }) {
  const [activeButton, setActiveButton] = useState("全部");

  //點擊時過濾以及設定標籤焦點
  const clickFilter = (e) => {
    e.preventDefault();
    setActiveButton(e.target.textContent);
  };
  const itemNotDone = todoList.filter((item) => item.time === null);
  const itemDone = todoList.filter((item) => item.time !== null);

  const filteredList =
    activeButton === "全部"
      ? todoList
      : activeButton === "待完成"
      ? itemNotDone
      : itemDone;

  const fixContent = (e) => {
    const target = e.target;
    target.setAttribute("contentEditable", "true");

    target.addEventListener("keydown", function (item) {
      if (item.key === "Enter") {
        target.blur(); //取消焦點
      }
    });

    //元素失去焦點後執行
    target.onblur = function (e) {
      const itemId = e.target.closest("[id]").id;

      fixItem({
        id: itemId,
        content: target.textContent,
      });
    };
  };

  const checkHandler = (e) => {
    const itemId = e.target.closest("[id]").id;
    itemIsDone(itemId);
  };

  return (
    <div>
      <ListTags $hasItem={true}>
        <ListTag
          href="#"
          $active={activeButton === "全部"}
          onClick={(e) => {
            clickFilter(e);
          }}
        >
          全部
        </ListTag>
        <ListTag
          href="#"
          $active={activeButton === "待完成"}
          onClick={(e) => {
            clickFilter(e);
          }}
        >
          待完成
        </ListTag>
        <ListTag
          href="#"
          $active={activeButton === "完成"}
          onClick={(e) => {
            clickFilter(e);
          }}
        >
          完成
        </ListTag>
      </ListTags>
      {filteredList.map((item) => {
        return (
          <TodoItem key={item.id} id={item.id}>
            <TodoCheckBox
              type="checkbox"
              onChange={checkHandler}
              checked={item.time !== null}
            />
            <TodoContent onClick={fixContent}>{item.content}</TodoContent>
            <ItemDeleteContent>
              <button>⨉</button>
            </ItemDeleteContent>
          </TodoItem>
        );
      })}
    </div>
  );
}

export default Content;
