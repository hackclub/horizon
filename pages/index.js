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
        <h1>Horizon</h1>
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
          <h1>Horizon is a hackathon.</h1>
          <p>
            Horizon is a social coding event where teens come together for a day
            to discover the joy of code, build creative projects and share their
            projects with the world.
          </p>
          <p>
            Hack Club is a worldwide community of high school hackers. We’re
            artists, writers, engineers, tinkerers, campers, filmmakers,
            volunteers. We make things. We help one another. We have fun.
          </p>
          <p>
            Horizon is fully open source, funded by, and run by the Hack Club
            community, as well as the Girl Scouts of NY. Hack Clubbers are
            organizing Horizon in public on the Hack Club Slack and with fully
            transparent finances using Hack Club Bank. Everything from this
            website to Horizon's dinner menu was created by teenagers just like
            yourself, and you're welcome to help out in #horizon on{' '}
            <a
              href="https://hackclub.com/slack/"
              target="_blank"
              rel="noreferrer">
              the Slack
            </a>
            !
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
            <img alt="Image" src="/images/5.jpg" />
            <p>
              <a
                href="https://assemble.hackclub.com/launch"
                target="_blank"
                rel="noreferrer">
                Assemble
              </a>
              , the first in-person hackathon of its kind since the pandemic.
            </p>
          </div>
          <div style={{ transform: `rotate(-2deg)` }}>
            <img alt="Image" src="/images/slh.jpg" />
            <p>Taken at {' '}
              <a
                href="https://www.segolilyhacks.com/"
                target="_blank"
                rel="noreferrer">
                Sego Lily Hacks
              </a> {' '}
              in Salt Lake City!</p>
          </div>
          <div style={{ transform: `rotate(1deg)` }}>
            <img alt="Image" src="/images/2.jpg" />
            <p>
              Shot from{' '}
              <a
                href="https://epochba.hackclub.com/"
                target="_blank"
                rel="noreferrer">
                Epoch BA
              </a>
              , a satellite hackathon around{' '}
              <a
                href="https://epoch.hackclub.com"
                target="_blank"
                rel="noreferrer">
                Epoch
              </a>
              !
            </p>
          </div>
          <div style={{ transform: `rotate(-3deg)` }}>
            <img alt="Image" src="https://cloud-b29ke7r2j-hack-club-bot.vercel.app/0hack_club_assemble_ltnj_00611.jpg" />
            <p>
              Workshop in action at{' '}
              <a
                href="https://assemble.hackclub.com/launch"
                target="_blank"
                rel="noreferrer">
                Assemble
              </a>
              !
            </p>
          </div>
          <div style={{ transform: `rotate(2.5deg)` }}>
            <img alt="Image" src="https://cloud-eb401ritr-hack-club-bot.vercel.app/0bmc_8978.jpg" />
            <p>
             Hanging out at{' '}  
               <a
                href="https://epoch.hackclub.com"
                target="_blank"
                rel="noreferrer">
                Epoch
              </a>
            </p>
          </div>
          <div style={{ transform: `rotate(-1deg)` }}>
            <img alt="Image" src="/images/0.jpg" />
            <p>Dino fun at Assemble!</p>
          </div>
        </div>
      </section>
      <section className="section-special-padding" id="faq-wrapper">
        <div id="faq">
          <div>
            <Question
              summary="Am I eligible to participate in Horizon?"
              answer={
                <p>
                  This event is open to Cadettes, Seniors, and Ambassadors. 
                  Girl Scouts can sign up on the GSGNY registration page. (Link coming soon!)
                </p>
              }
            />
            <Question
              summary="Does participating cost anything?"
              answer={
                <p>
                  There is a $30 fee per Girl Scout put in place by Girl Scouts. This cost covers food, snacks, and program goodies.
                </p>
              }
            />
            <Question
              summary="I'm not that good at coding, can I join?"
              answer={
                <p>
                  This hackathon is for hackers of all skill levels! It's
                  completely beginner-friendly. In fact, we'll have workshops
                  and other events, so join us and let's learn together. If
                  you'd like to start exploring some introductory projects,
                  check out{' '}
                  <a
                    href="https://workshops.hackclub.com/"
                    target="_blank"
                    rel="noreferrer">
                    Hack Club Workshops
                  </a>
                  .
                </p>
              }
            />
            <Question
              summary="What do I need to bring to Horizon?"
              answer={
                <p>
                  Bring a laptop if you have one, and also bring a waterbottle!
                </p>
              }
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
              summary="What can I make at Horizon?"
              answer={
                <p>
                  Anything! Apps, art, sites, and hardware projects are all
                  perfect for a hackathon. Check out what{' '}
                  <a
                    href="https://hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    Hack Clubbers
                  </a>{' '}
                  are{' '}
                  <a
                    href="https://scrapbook.hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    making every day!
                  </a>
                </p>
              }
            />
            <Question
              summary="My parents are worried! What should I do?"
              answer={
                <p>
                  We're here to help, ask them to reach out to us at{' '}
                  <a href="mailto:horizon@hackclub.com">horizon@hackclub.com</a>{' '}
                  and we'll make sure to answer all their questions. Horizon
                  will be supervised by background checked staff and overseen by
                  24/7 security staff.
                </p>
              }
            />
            <Question
              summary="I have more questions, how can I reach out?"
              answer={
                <p>
                  Girl Scouts can reach out to <a href="mailto:stem@girlscoutsnyc.org">stem@girlscoutsnyc.org</a> with any questions or concerns.
                </p>
              }
            />
          </div>
        </div>
      </section>
      <footer id="footer">
        <div id="icons">
          <a href="https://www.instagram.com/starthackclub/">
            <svg class="icon-color" height="30px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a href="https://github.com/hackclub">
            <svg class="icon-color" height="30px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Github</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://hackclub.com/slack">
            <svg class="icon-color" height="30px" role="img" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <title>Slack</title>
              <path d="M31 24c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v12C36 21.757 33.757 24 31 24zM43 24h-4c-.553 0-1-.447-1-1v-4c0-2.757 2.243-5 5-5s5 2.243 5 5S45.757 24 43 24zM19 24H7c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S21.757 24 19 24zM23 12h-4c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5v4C24 11.553 23.553 12 23 12zM19 48c-2.757 0-5-2.243-5-5V31c0-2.757 2.243-5 5-5s5 2.243 5 5v12C24 45.757 21.757 48 19 48zM7 36c-2.757 0-5-2.243-5-5s2.243-5 5-5h4c.553 0 1 .447 1 1v4C12 33.757 9.757 36 7 36zM43 36H31c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S45.757 36 43 36zM31 48c-2.757 0-5-2.243-5-5v-4c0-.553.447-1 1-1h4c2.757 0 5 2.243 5 5S33.757 48 31 48z"/>            </svg>
          </a>
        </div>
        <div>
          Made with 💞 by the Hack Club Organizers!
        </div>
      </footer>
    </>
  )
}
