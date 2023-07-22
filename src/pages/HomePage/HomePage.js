import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.header__box}>
      <h1 className={css.header__title}>Your own Phonebook</h1>
      <p>Please register or login</p>
    </div>
  );
};
export default HomePage;
