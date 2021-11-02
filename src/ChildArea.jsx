import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickclose } = props;
  console.log("childAreaがレンダリングされた！！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {/* 三項演算子 条件 ? 条件がtrueの時の処理 : 条件がfalseの時の処理  */}
      {/* 何も表示しなくていいのでnull */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickclose} >閉じる</button>
        </div>
      ) : null}
    </>
  );
});
