import "./App.css";
import IMAGES from "./Images";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
const skypost_mobile = 1.7;
const skypost_desktop = 2;
const pencilpost_mobile = 3;
const pencilpost_desktop = 3.85;
const nightpost_mobile = 3.6;
const nightpost_desktop = 4.2;

  return (
    <div id="root">
      <Parallax pages={6.7}>
        {/* Polkadots */}
        <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={1.5} //length of background
          style={{
            backgroundImage: `url(${IMAGES.page1_background_polka})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        {/* Title */}
        <h2>You are Invited to ...</h2>
        <ParallaxLayer offset={0} speed={0.4} factor={2}>
          {/* Bunting */}
          <div class="flex-container bunting">
            <div class="box">
              <img src={IMAGES.bunting_L} alt="bunting left" />
            </div>
            <div class="box"></div>
            <div class="box">
              <img src={IMAGES.bunting_R} alt="bunting right" />
            </div>
          </div>
          {/* Title */}
          <div class="flex-container">
            <div class="box title">
              <img
                src={IMAGES.page1_title}
                alt="Aly's arty farty fancy dress party"
              />
            </div>

            <div class="box title">
              <img src={IMAGES.page1_aly} alt="aly" />
            </div>
          </div>
        </ParallaxLayer>
        {/* PAGE 2 */}
        <ParallaxLayer
          // sticky={{start:0.9, end: 1.2}}
          offset={window.innerWidth < 748 ? 0.6 : 0.8}
          speed={0.5}
          factor={3} //length pof background
          style={{
            backgroundImage: `url(${IMAGES.page2_background})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        {/* Where, when cost? */}
        <ParallaxLayer
          offset={window.innerWidth < 748 ? 0.6 : 0.8}
          speed={0.5}
          factor={1.5} //length pof background
        >
          {/* When? */}
          <div class="flex-container ">
            <div class="box2">
              <h1 class="red padded"> When? </h1>
            </div>
            <div class="box2">
              <img src={IMAGES.date} alt="date" />
            </div>
          </div>
          {/* Where? */}
          <div class="flex-container ">
            <div class="box2">
              <img src={IMAGES.location} alt="claremorris" />
            </div>
            <div class="box2">
              <h1 class="blue padded"> Where? </h1>
            </div>
          </div>
          {/* Cost? */}
          <div class="flex-container ">
            <div class="box2">
              <h1 class="yellow padded"> Cost? </h1>
            </div>
            <div class="box2">
              <img src={IMAGES.piggybank} alt="175euro" />
            </div>
          </div>
          <div class="yellow note padded">
            Amount to be paid to Georgina by 1st of May.
          </div>
        </ParallaxLayer>

        {/* PAGE 3  daytimefun*/}
        <ParallaxLayer
          offset={window.innerWidth < 748 ? skypost_mobile : 1.97}
          speed={0.5}
          factor={3} //length pof background
          style={{
            backgroundImage: `url(${IMAGES.blue_background})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        {/**TODO SUN */}
        <ParallaxLayer
          offset={window.innerWidth < 748 ? skypost_mobile + 0.05: 1.97}
          speed={-0.2}
          factor={3} //length pof background
        >
          <div class="center">
            <img src={IMAGES.sun} alt="activities" />
          </div>
        </ParallaxLayer>
        {/* PAGE 3  clouds*/}
        <ParallaxLayer
          offset={window.innerWidth < 748 ?skypost_mobile: 1.97}
          speed={0.5}
          factor={3} //length pof background
          style={{
            backgroundImage: `url(${IMAGES.clouds})`,
            backgroundSize: "cover",
          }}
        >
          <div class="center">
            <img src={IMAGES.clouds} alt="activities" />
          </div>
        </ParallaxLayer>
        {/** Content daytimefun */}
        <ParallaxLayer
          offset={window.innerWidth < 748 ? (skypost_mobile + 0.02) : (skypost_desktop + 0.02)}
          speed={0.45}
          factor={3} //length pof background
        >
          {/** title daytimefun */}
          <h1 class="white darkoutline fix-stroke">Daytime fun</h1>
          {/* Prosecco? */}
          <div class="flex-container ">
            <div class="box2">
              <img src={IMAGES.alyprosecco} alt="claremorris" />
            </div>
            <div class="box2">
              <h2 class="dark padded">
                Enjoy some <br />
                Prosecco <br /> on arrival{" "}
              </h2>
            </div>
          </div>
          {/* Dress note*/}
          <div class="yellow note darkoutline fix-stroke padded">
            Dress comfy with an artsy striped top
          </div>
          {/*Activities*/}
          <div class="center">
            <img src={IMAGES.activities} alt="activities" />
          </div>
          {/*BBQ*/}
          <div class="center padded">
            <img src={IMAGES.bbq} alt="bbq" />
          </div>
        </ParallaxLayer>

        {/** Content daytimefun */}

        {/* PAGE 4 PENCILS */}
        <ParallaxLayer
          offset={window.innerWidth < 748 ? pencilpost_mobile : pencilpost_desktop}
          speed={0.6}
          factor={3} //length pof background
          style={{
            backgroundImage: `url(${IMAGES.pencils})`,
            backgroundSize: "cover",
          }}
        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={window.innerWidth < 748 ? (pencilpost_mobile + 0.145) : (pencilpost_desktop+0.145)}
          speed={0.5}
          factor={1.2} //length pof background
        >
          <div class=" center darkbackground padded ">
            <div class="note  white">
              Aly collects wacky pencils! If you’d like get one as a little gift
              to add to her huge collection then that would be perfect ! No
              pressure though!! :-){" "}
            </div>
          </div>
        </ParallaxLayer>
        {/* PAGE 5 nightitme */}
        <ParallaxLayer
          offset={window.innerWidth < 748 ? nightpost_mobile : nightpost_desktop}
          speed={0.5}
          factor={5} //length pof background
          style={{
            backgroundImage: `url(${IMAGES.stars})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        {/* PAGE 5 nightitme content */}
        <ParallaxLayer
          offset={window.innerWidth < 748 ? nightpost_mobile: nightpost_desktop}
          speed={0.4}
          factor={10} //length pof background
        >
          {/*bunting*/}
          <div class="center">
            <img src={IMAGES.starbunting} alt="bunting" />
          </div>
          {/** title nightitmefun */}
          <h1 class="white darkoutline fix-stroke">Nightime Fun</h1>
          {/*fancydress party*/}
          <div class="center">
            <img src={IMAGES.fancydresspart} alt="Fancy Dress Party" />
          </div>
          {/*aly dress up */}
          <div class="center">
            <img src={IMAGES.alydressup} alt="ALy's fun costumes" />
          </div>
          {/**Who will be? */}
          <div class=" center  ">
            <h2 class="white ">Who will you come as?</h2>
          </div>
          {/* TJKEANE? */}
          <div class="flex-container ">
            <div class="box2">
              <img src={IMAGES.tjkeane} alt="TJKEANE" />
            </div>
            <div class="box2 darkbackground">
              <div class="note mediumtextbox green sidepadding">
                {" "}
                Lets enjoy the evening in our own private Bar dancing to the DJ
                with Aly!
              </div>
            </div>
          </div>

          <div class="red note  padded">
            *NOTE*: It's BYOB <br/>
            <div class="yellow">
            So bring what you like 😃<br/>
            But we'll be sure to have a few mixers and treats for everyone!<br/>
            (Just In Case!!) <br/> <br/>
            </div>
            <div class="white">So dust those dancing shoes off, get those party feet ready, mark that calender off and we will see you for a night to remember in June!</div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
