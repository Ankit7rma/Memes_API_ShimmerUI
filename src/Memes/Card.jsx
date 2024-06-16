const MemeCard = ({ author, src }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "460px",
        height: "460px",
        padding: "5px",
        margin: "5px",
        border: "1px solid black",
        overflow: "hidden",
        borderRadius: "12px",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{author}</div>
      <img
        src={src}
        style={{
          width: "420px",
          height: "420px",
        }}
      />
    </div>
  );
};
export default MemeCard;
