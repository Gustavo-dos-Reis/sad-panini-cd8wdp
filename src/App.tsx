import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];
const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/8fb2ef78-4c10-4d05-90c4-fc4fe2e0ef55-profile_image-70x70.png",
    alt: "Imagem de Mayk Brito",
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png",
    alt: "Imagem de Alanzoka",
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png",
    alt: "Imagemd de Cellbit",
  },
];
const socialListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "/assets/twitch.svg",
    alt: "Imagem de Mayk Brito",
  },
  {
    url: "https://www.twitter.com/maykbrito",
    imageUrl: "/assets/twitter.svg",
    alt: "Imagem de Mayk Brito",
  },
  {
    url: "https://www.instagram.com/maykbrito",
    imageUrl: "/assets/instagram.svg",
    alt: "Imagem de Mayk Brito",
  },
  {
    url: "https://www.youtube.com/maykbrito",
    imageUrl: "/assets/youtube.svg",
    alt: "Imagem de Mayk Brito",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* INCLUIR  HEADER AQUI*/}
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar"
          className="games-list"
        >
          {/* itens da lista */}
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Stremers"
          subtitle="Lista de canais e transmissões que não perco"
          className="channel-list"
        >
          {/* itens da lista */}
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conect comigo agora mesmo"
          className="social-list"
        >
          {/* itens da lista */}
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
