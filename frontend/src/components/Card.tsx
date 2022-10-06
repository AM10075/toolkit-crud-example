import React, { createContext, useContext } from "react";

interface iProvider {
  title: string;
  text: string;
  img: string;
}

let CardProvider = createContext({} as iProvider);
let { Provider } = CardProvider;

export function CardIMG() {
  let { img } = useContext(CardProvider);
  return <img className="card-img-top" src={`${img}`} alt="Card image cap" />;
}

export function CardBody() {
  let { title, text } = useContext(CardProvider);
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  );
}

export function Card({ title, text, img, children }: any) {
  return (
    <Provider value={{ title, text, img }}>
      <div className="card" style={{ width: "20vw" }}>
        {children}
      </div>
    </Provider>
  );
}

Card.CardIMG = CardIMG;
Card.CardBody = CardBody;
