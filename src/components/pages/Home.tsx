import blommaett from "../../assets/blommaett.png";
import anette from "../../assets/anette/nettan.png";
import { images } from "../../assets/anette/anetteimg";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const Home = () => {
  const [currentImg, setCurrentImg] = useState(0);
  let imglength = images.length;

  const prevImg = () => {
    setCurrentImg(currentImg - 1);
    if (currentImg == 0) {
      setCurrentImg(imglength - 1);
    }
  };
  const nextImg = () => {
    setCurrentImg(currentImg + 1);
    if (currentImg == imglength - 1) {
      setCurrentImg(0);
    }
  };
  return (
    <main>
      <div className='homeContainer'>
        <img className='img' src={anette} alt='' />
        <h3>Anette Hammargren Wiberg</h3>
        <h3>1958 - 2022</h3>
        <div>
          <div>
            <h4>Fållan, 2022-06-29</h4>
            <br />

            <h4>Kära Vänner,</h4>
            <h4>Mina tankar</h4>
            <br />
            <p>
              Anette Hammargren Wiberg, mitt livs kärlek, min bästis, min hustru
              och mamma till våra kära barn, avled torsdag den 16 juni 2022. Vi
              möttes i september 1983, när Anette precis fyllt 25 år och jag var
              26, och vi var tillsammans sedan dess – nästan 39 år. Tänk att jag
              kunde kroka denna fantastiska kvinna, ibland har man en sagolik
              tur! Och vilket fantastiskt liv vi haft tillsammans. Oerhört
              mycket glädje, lärt känna fantastiska människor och platser,
              bildat familj men också motgångar, speciellt två stycken. Men
              Anette grävde inte ned sig, utan efter en liten stund såg hon an
              framtiden med tillförsikt och glädje. Precis som hon gjorde när
              cancern konstaterades. Vilken fantastisk och underbar människa!
              <br />
              <br />
              När jag skriver det här till er har jag levt utan Anette en kort
              stund och saknaden är enorm. Varje dag kan beskrivas som en tung
              uppförsbacke som aldrig tar slut och motvinden och regnet piskar
              en i ansiktet och gör det än mer ansträngande. Men tiden brukar
              läka alla sår och jag är övertygad om att det även gäller i det
              har fallet. En dag i framtiden, okänt när, kommer jag plötsligt
              vara i slutet av uppförsbacken på något konstigt sätt, och
              motvinden och regnet har lagt sig. Och där på toppen på berget ser
              jag ned över ett nytt, vackert, böljande grönt, glädjefyllt och
              soligt landskap. Där kommer jag leva ett nytt, annorlunda och
              härligt liv. Men inte utan Anette, hon kommer för evigt vara med i
              mitt hjärta och mina tankar när jag ger mig ut på den nya och
              okända resan.
              <br />
              <br />
            </p>
            <h4>Anettes tankar och önskemål</h4>
            <p>
              Under den svåra sista tiden skrev Anette ned sina tankar i
              allmänhet och även önskemål om sin begravning. Det är något vi
              alla ska göra för att underlätta för efterlevande, och för oss är
              det en glädje att kunna uppfylla hennes sista önskningar och veta
              att Anette kommer till det nya på det sätt hon önskade. <br />
              <br />
              Bröstcancerföreningen/Amazona har varit ett fantastiskt stöd och
              underlättat för Anette under 10 år. Hon såg fram emot med glädje
              till vistelserna på Mases Gården, matlagningskurser,
              samtalsgrupper etc. Anette donerar en rejäl summa pengar för att
              bidra till fortsatt stöd till drabbade samt forskning. Jag passar
              på att skriva att Anette hellre ser bidrag/donationer till dem än
              blommor på sin begravning. Länk finns längs ned. Anette donerar
              även en lika rejäl summa pengar till sin käre bror Kenneth
              (Kenta), så att han kan få lite extra allt i sin vardag. <br />
              <br />
              Begravningen är borgelig och sker i Hoppets Kapell på
              Skogskyrkogården. Hennes aska kommer spridas i Minneslunden strax
              utanför kapellet. Allt enligt hennes önskemål. Anette hoppades att
              Julia-Lotta Tinglöf och Moa Lignell ville sjunga på hennes
              begravning. Två fantastiska tjejer/kvinnor med underbara röster
              och vänner till Amanda. Jag kan med glädje meddela att så blir
              fallet. Officiant blir min kära kusin Göran Sahlén. Göran tittade
              förbi hemma hos oss, ganska nära hennes bortgång, och vi samtalade
              en hel del kring död, begravning och andra tunga saker. Min känsla
              var att Anette tog intryck av Göran samt kände ett förtroende i
              samtalen med honom. Jag är mycket tacksam över att Göran leder oss
              under begravningen. Anette önskade också att begravningen och
              efterföljande minnesstund ska vara så glad och positiv som
              möjligt. Precis som hon ville att barnen och jag ska leva utan
              Anette. Gärna färgglad, somrig klädsel, hellre skratt än gråt om
              det går. Jag kommer troligtvis ha en färgglad skjorta med ljusa
              byxor och döttrarna någon fin sommarklänning. Då tror jag ni
              förstår. <br />
              <br />
              Anette var en fantastisk glad och positiv person, socialt
              utåtriktad, hjälpsam samt gav alltid mer än vad hon tog = otroligt
              generös och frikostig. Många kan lära av henne. Barnen och jag
              hoppas att ni och vi tillsammans kan förmedla dessa känslor på
              begravningen och minnesstunden så att dagen verkligen blir
              Anettes. <br /> <br /> Vi är mitt i sommartider med semester,
              resor, sommarstugan, båten och mycket annat redan inplanerat. Vi
              har all förståelse för detta – och det viktigaste är inte att vara
              på plats. Ha henne i ert hjärta och era tankar, speciellt
              torsdagen den 14 juli, och helst resten av era liv. Det är mycket
              viktigare.
              <br />
              <br />
            </p>
            <h4>Avslutningsord</h4>
            <p>
              Ja, kanske ett lite annorlunda och ovanligt sätt informera om
              Anettes begravning. Skulle jag ha sagt det här på minnesstunden?
              Det är möjligt, men jag har dock insett att varje gång jag pratar
              om Anette så börjar jag gråta – och prata och gråta samtidigt är
              ingen bra kombo för mig. Så det blir så här och en liten fördel är
              att ni som inte kan närvara, ni får ändå en liten glimt av det jag
              tänker och hur Anettes tankar var om sin bortgång och begravning.
              <br />
              <br />
              Välkomna önskar, <br />
              <br />
              Amanda, Malin, Johanna och Janne
            </p>
            <div className='imgContainer'>
              <img src={images[currentImg].image} alt='Anette' />
              <div>
                <BsFillArrowLeftCircleFill
                  className='arrow'
                  onClick={prevImg}
                />
                <BsFillArrowRightCircleFill
                  className='arrow'
                  onClick={nextImg}
                />
              </div>
            </div>
            <h4>Praktisk information om begravningen</h4>
            <p>
              14 juli 2022, kl 12.15 <br />
              Hoppets Kapell, Skogskyrkogården, Enskede <br />
              Ljus klädsel, gärna färgglad och somrig <br />
              Minnestund, Gamla Enskede Catering, ca 13.00, <br />
              <br />
              OSA 7 juli <br />
              Ange hur många ni blir och ev önskemål avseende speciell kost
              <br />
              Mejla <a href='mailto:wibjan@gmail.com'></a> eller SMS till
              070-666 26 31 <br />
              <br />
              Vill ni hålla tal så passar det bäst under minnesstunden
              <br />
              <a href=' https://brostcancerforbundet.se/stod-oss/minnesgava/'>
                {" "}
                Länk till Bröstcancerföreningen
              </a>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
};
