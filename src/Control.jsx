import styled from "styled-components";
import { useState, useId } from "react";

const ControlContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddItemInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px 0 0 10px;
  border: 0;
  font-size: 16px;
`;

const AddItemButtonDiv = styled.div`
  background-color: white;
  padding: 3.6px;
  border-radius: 0 10px 10px 0;
`;

const AddItemButton = styled.button`
  background-color: rgba(51, 51, 51, 1);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
  &:active {
    background-color: black;
  }
`;

function Control({ onAdd }) {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(3);
  const randomId = useId();

  const inputHandler = (input) => {
    setValue(input.target.value);
  };

  //增加TodoList item
  const addItem = (e) => {
    e.preventDefault();

    if (value.length === 0) {
      alert("請輸入文字");
      return;
    }

    //設定列表的ID
    const listId = count + randomId;
    setCount((count) => count + 1);

    onAdd({
      content: value,
      id: listId,
      time: null,
    });
    setValue(""); //輸出後清空input
  };

  return (
    <ControlContainer onSubmit={addItem}>
      <AddItemInput
        value={value}
        placeholder="新增代辦事項"
        onChange={inputHandler}
      />
      <AddItemButtonDiv>
        <AddItemButton type="submit">+</AddItemButton>
      </AddItemButtonDiv>
    </ControlContainer>
  );
}
export default Control;
