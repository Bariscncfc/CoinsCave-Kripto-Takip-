import React from "react";
import "./Coin.css";
const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            Değeri:
            <br />
            {price}
            TL
          </p>
          <p className="coin-volume">
            Hacmi:
            <br />
            {volume.toLocaleString()}
            TL
          </p>
          {priceChange < 0 ? (
            <p
              className="coin-percent red"
              style={{
                fontWeight: "bold",
              }}
            >
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Market Değer: {marketCap.toLocaleString()}TL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
