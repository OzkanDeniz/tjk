import data from "../helper/data";

const Picture = () => {
  return (<div class="container">
    <div class="row">
      {data.map((item) => (
        <div class="col-3">
          <div className="picture-container" >
            <img src={item.src.large} alt="" />
          </div>

          <div class="text-center">
            <h2>{item.photographer}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
    
  );
};

export default Picture;
