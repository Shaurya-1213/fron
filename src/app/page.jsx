import React from 'react'
import classes from './page.module.css'

const home = () => {
  return (
    <div >
      <h1 className={classes.headingOne}>Marvel's Spiderman</h1>
      <div className={classes.body}>
       <h1 className={classes.headingTwo}>Spider Man</h1>
      </div>
      <div className={classes.featureCard}>

        <div className={classes.card}>
          <div className={classes.cardOne}>
          <p className={classes.headingThree}>Spider-Man (2002)</p>
          </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardTwo}>
          <p className={classes.headingThree}>Spider-Man 2 (2004)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardThree}>
        <p className={classes.headingThree}>Spider-Man 3 (2007)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardFour}>
        <p className={classes.headingThree}>The Amazing Spider-Man (2012)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardFive}>
        <p className={classes.headingThree}>The Amazing Spider-Man 2 (2014)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardSix}>
        <p className={classes.headingThree}>Spider-Man: Homecoming (2017)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardSeven}>
        <p className={classes.headingThree}>Spider-Man: Into the Spider-Verse (2018)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardEight}>
        <p className={classes.headingThree}>Spider-Man: Far From Home (2019)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardNine}>
        <p className={classes.headingThree}>Spider-Man: No Way Home (2021)</p>
        </div>
        </div>

        <div className={classes.card}>
        <div className={classes.cardTen}>
        <p className={classes.headingThree}>Spider-Man: Across the Spiderverse (2023)</p>
        </div>
        </div>
      </div>

    <div>
      <h1 className={classes.headingFour}>Latest</h1>
      <div className={classes.featureCardLatest}>

        <div className={classes.cardLatest}>
          <div className={classes.cardLatestOne}></div>
          <p className={classes.headingFive}>Spider-Man: Across the Spiderverse (2023)</p>
        </div>
        <hr />
        <div className={classes.cardLatest}>
          <div className={classes.cardLatestTwo}></div>
          <div><p className={classes.headingFive}>Spider-Man: No Way Home (2021)</p></div>
        </div>
        <hr />
        <div className={classes.cardLatest}>
          <div className={classes.cardLatestThree}></div>
          <p className={classes.headingFive}>Spider-Man: Far From Home (2019)</p></div>
          <hr />
        </div>

    </div>

    <div className={classes.mainBottom}>
      <div className={classes.mainBottomImage1}></div>
      <div className={classes.mainBottomHeading}>MARVEL</div>
    </div>

    </div>
  )
}

export default home