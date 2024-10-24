import data from "../helper/data";

const Picture = () => {
  return (
    <div className="pictures row">
      {data.map((item) => (
        <div>
          <img src={item.src.large} alt="" />
          <p>{item.photographer}</p>
        </div>
      ))}
    </div>
  );
};

export default Picture;
