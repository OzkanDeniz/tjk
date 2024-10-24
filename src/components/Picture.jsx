import data from "../helper/data";

const Picture = () => {
  return (
    <div class="container">
      <div class="text-center">
        <iframe
          width="1293"
          height="522"
          src="https://www.youtube.com/embed/wnviTqkZApM"
          title="Gazi Koşusu (Grup - 1) 30/06/2024"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div class="row">
        {data.map((item) => (
          <div class="col-3">
            <div className="picture-container">
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
