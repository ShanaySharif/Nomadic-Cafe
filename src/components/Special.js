

const Special = () => {
    return <div className="special section container" id="special">
    <div className="special__container">
      <div className="special__box">
        <h2 className="section__title">
        Awaken Your Senses, <br />
          One Sip at a Time.
        </h2>
      </div>

      <div className="special__category">
        <div className="special__group">
          <div className="special__img__border">
            <img
              src=".//Img/coffee-beans.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Original Coffee</h3>
          <p className="special__description">
            We select the best beans coffee, for a true taste.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./assets/media/hot-drink.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Hot Coffee</h3>
          <p className="special__description">
          Sip the Heat, Savor the Flavor!.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./assets/media/coffee-cup.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Ice Coffee</h3>
          <p className="special__description">
          Cool Perfection in Every Sip.
          </p>
        </div>
      </div>
    </div>
  </div>
}

export default Special;