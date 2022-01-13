import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "yellow"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChaildAreaがレンダリングされた！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
