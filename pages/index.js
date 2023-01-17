import Image from 'next/image'
import skyline from '../public/images/skyline.svg'
import Sparkles from '../components/Sparkle'
import cookieImage from '../public/images/cookies.svg'
import Question from '../components/Question'

export default function Index() {
  return (
    <>
      <header>
        <h6>Hack Club + Girl Scouts present...</h6>
        <h1>Skyscrapper</h1>
        <h3>Mar 25 &middot; 10AM - 5PM &middot; Girl Scouts HQ, NYC</h3>
        <Image alt="Skyline" fill={true} src={skyline} />
      </header>
      <section
        className="section-special-padding"
        style={{
          display: 'flex',
          padding: '4rem 2rem 1rem 2rem',
          marginInline: '2rem'
        }}>
        <div className="cookies">
          <Image alt="Cookie" id="cookie1" src={cookieImage} />
          <Image alt="Cookie" id="cookie2" src={cookieImage} />
        </div>
        <div id="about" style={{ position: 'relative', zIndex: '999' }}>
          <h1>Skyscrapper is a hackathon.</h1>
          <p>
            Epoch is a social coding event where teens come together for a
            weekend to discover the joy of code, build creative projects and
            share their projects with the world.
          </p>
          <p>
            Hack Club is a worldwide community of high school hackers. We’re
            artists, writers, engineers, tinkerers, campers, filmmakers,
            volunteers. We make things. We help one another. We have fun.
          </p>
          <p>
            Epoch is fully open source, funded by, and run by the Hack Club
            community. Hack Clubbers are organising Epoch in public on the Hack
            Club Slack and with fully transparent finances using Hack Club Bank.
            Everything from this website to Epoch's dinner menu, was created by
            teenagers just like yourself and you're welcome to help out in
            #epoch-bts on the Slack.
          </p>
        </div>
        <div className="cookies">
          <Image alt="Cookie" id="cookie3" src={cookieImage} />
          <Image alt="Cookie" id="cookie4" src={cookieImage} />
          <Image alt="Cookie" id="cookie5" src={cookieImage} />
        </div>
      </section>
      <section>
        <div id="gallery">
          <div style={{ transform: `rotate(3deg)` }}>
            <img alt="Image" src="/images/0.jpg" />
            <p>Assemble</p>
          </div>
          <div style={{ transform: `rotate(-2deg)` }}>
            <img alt="Image" src="/images/1.jpg" />
            <p>More Assemble</p>
          </div>
          <div style={{ transform: `rotate(1deg)` }}>
            <img alt="Image" src="/images/2.jpg" />
            <p>Some more placeholder text</p>
          </div>
          <div style={{ transform: `rotate(-3deg)` }}>
            <img alt="Image" src="/images/3.jpg" />
            <p>A cool scene</p>
          </div>
          <div style={{ transform: `rotate(2.5deg)` }}>
            <img alt="Image" src="/images/4.jpg" />
            <p>Another placeholder</p>
          </div>
          <div style={{ transform: `rotate(-1.5deg)` }}>
            <img alt="Image" src="/images/5.jpg" />
            <p>Okay, one last image</p>
          </div>
        </div>
      </section>
      <section className="section-special-padding" id="faq-wrapper">
        <div id="faq">
          <div>
            <Question
              summary="Am I eligible to participate in Epoch?"
              answer="If you're eighteen or under, yes, we are so excited to see you in Cyber City! If you're over 18 but still in high school, shoot us a mail at epoch@hackclub.com."
            />
            <Question
              summary="Does participating cost anything?"
              answer="Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
            />
            <Question
              summary="I'm not that good at coding, can I join?"
              answer="This hackathon is for hackers of all skill levels! We'll have workshops and other events so join us and let's learn together. If you'd like to start exploring some introductory projects, check out Hack Club Workshops."
            />
            <Question
              summary="What do I need to bring to Epoch?"
              answer="Your laptop, chargers, anything for your hack (hardware?), toiletries, sleeping bags, and an open mind."
            />
          </div>
          <div>
            <div style={{ display: 'flex', textAlign: 'center' }}>
              <h1
                style={{
                  margin: 'auto',
                  textDecoration: 'underline',
                  textDecorationStyle: 'wavy',
                  transform: 'rotate(2deg)'
                }}>
                <Sparkles
                  style={{
                    alignItems: 'center',
                    margin: 'auto'
                  }}>
                  I have questions...
                </Sparkles>
              </h1>
            </div>
            <Question
              summary="What can I make at Epoch?"
              answer="Anything! Apps, art, sites, and hardware projects are all perfect for a hackathon. Check out what Hack Clubbers are making every day!"
            />
            <Question
              summary="My parents are worried! What should I do?"
              answer="We're here to help, ask them to reach out to us at epoch@hackclub.com and we'll make sure to answer all their questions. Epoch will be supervised by background checked staff and overseen by 24/7 security staff. Read more in our parent's guide."
            />
            <Question
              summary="I have more questions, how can I reach out?"
              answer="Contact us! Reach out on #epoch on the Hack Club Slack or email us at epoch@hackclub.com We're always ready to answer all your questions!"
            />
          </div>
        </div>
      </section>
      <section
        id="grass-section"
        style={{
          padding: '0 2rem 1rem 2rem'
        }}>
        <h1 style={{ zIndex: 1 }}>
          Come cultivate the craft of hacking with us!
        </h1>
        <figure className="folded" style={{ zIndex: 1 }}>
          <iframe
            className="fold-me-please"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12087.926659402143!2d-73.973794!3d40.762428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8e9cfc7444d8f876!2sTrump%20Tower!5e0!3m2!1sen!2sus!4v1673911188343!5m2!1sen!2sus"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />

          <span className="folds main">
            <span className="cell main-1"></span>
            <span className="cell main-2"></span>
            <span className="cell main-1"></span>
            <span className="cell main-2"></span>
            <span className="cell main-1"></span>
          </span>

          <span className="folds vertical">
            <span className="cell vertical-1"></span>
            <span className="cell vertical-2"></span>
            <span className="cell vertical-3"></span>
            <span className="cell vertical-4"></span>
            <span className="cell vertical-5"></span>
          </span>

          <span className="folds horizontal">
            <span className="cell horizontal-1"></span>
            <span className="cell horizontal-2"></span>
            <span className="cell horizontal-1"></span>
            <span className="cell horizontal-2"></span>
            <span className="cell horizontal-1"></span>
            <span className="cell horizontal-3"></span>
            <span className="cell horizontal-4"></span>
            <span className="cell horizontal-3"></span>
            <span className="cell horizontal-4"></span>
            <span className="cell horizontal-3"></span>
          </span>
        </figure>
      </section>
    </>
  )
}
