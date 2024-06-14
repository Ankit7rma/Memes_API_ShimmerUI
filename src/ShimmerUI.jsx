const ShimmerUi = () => {
  return Array(20)
    .fill(0)
    .map((im, i) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "460px",
          height: "460px",
          border: "1px solid black",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5px",
            margin: "10px",
            width: "420px",
            height: "420px",
            background: "gray",
          }}
        ></div>
      </div>
    ));
};

export default ShimmerUi;
