export function ContentVideo({ content }) {
  return (
    <div className="article-main__figure">
      <div className="video">
        <div
          style={{
            background: "#000",
            position: "absolute",
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 15px",
          }}
        >
          <div>Video will be available soon</div>
        </div>
      </div>
    </div>
  );
}
