import React from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import ReactStars from './components/RatingStars';
function App() {
  return (
    <div className="App">
      <h1>Movie Reviewers!</h1>
      <img src='/images/black-adam.jpg' alt=''/>
      <p>In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After using these powers for vengeance, he was imprisoned, becoming Black Adam. Nearly 5,000 years have passed, and Black Adam has gone from man to myth to legend. Now free, his unique form of justice, born out of rage, is challenged by modern-day heroes who form the Justice Society: Hawkman, Dr. Fate, Atom Smasher and Cyclone</p>
      <ReviewForm/>
      <ReactStars/>

      <div className='App'>
        <img src="/images/halloween-ends.jpg" alt=""/>
        <p>In this unexpected final chapter, set four years after the events of last year's Halloween Kills, Laurie is living with her granddaughter Allyson (Andi Matichak) and is finishing writing her memoir. Michael Myers hasn’t been seen since. Laurie, after allowing the specter of Michael to determine and drive her reality for decades, has decided to liberate herself from fear and rage and embrace life. But when a young man, Corey Cunningham (Rohan Campbell; The Hardy Boys, Virgin River), is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can't control, once and for all.</p>
        <ReviewForm/>
        <ReactStars/>
      </div>

      <div className='App'>
        <img src="/images/One-Piece.jpg" alt=""/>
        <p>Uta—the most beloved singer in the world whose voice has been described as "otherworldly"—is renowned for concealing her own identity when performing. Now, for the first time ever, she will reveal herself to the world at a live concert. With the Navy watching closely, the venue fills with Uta's fans—including excited pirates and the Straw Hats led by Luffy, who simply came to enjoy her sonorous performance—all eagerly awaiting the voice that the whole world has been waiting for to resound. The story begins with the shocking revelation that she is the enigmatic Shanks' daughter</p>
        <ReviewForm/>
        <ReactStars/>
      </div>
    </div>
  );
}

export default App;
