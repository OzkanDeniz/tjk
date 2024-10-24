import data from "../helper/data";

const Picture = () => {
  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 border border-3  g-3 mx-2">
          <div className="imageContainer">
            <img src={item.src.large} alt="" />
          </div>
          <div className="info">
            <p>{item.photographer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Picture;
