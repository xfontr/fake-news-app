type AdvertisementProps = {
  isSticky?: boolean;
};

const Advertisement = ({ isSticky }: AdvertisementProps): JSX.Element => (
  <div className={`container${isSticky ? " container--sticky" : ""}`}>
    <h3 className="container__title">Lorem ipsum nemo</h3>
    <p className="container__body">
      Velit neque libero incidunt itaque impedit vitae quam, architecto autem
      reprehenderit?
    </p>
    <button className="container__cta">Lorem now</button>
  </div>
);

export default Advertisement;
