import React from 'react';
import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddCard, 
  cards,
  onCardClick,
  onCardLike,
  onCardDelete
}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
    <section className="profile">
      <div className="profile__container">
        <div className="profile__avatar-button" onClick={onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="аватар"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__edit-button" type="button" onClick={onEditProfile} />
      </div>
      <button className="profile__add-button" type="button" onClick={onAddCard} />
    </section>
    <section className="cards">
      {cards.map((item) => (
        <Card
          card={item}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
          key={item._id}
        />
      ))}
    </section>
  </main>
  );
}

export default Main;