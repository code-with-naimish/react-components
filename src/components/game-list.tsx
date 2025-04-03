const games = [
  {
    name: "The Witcher 3: Wild Hunt",
    description: "An open-world RPG where you play as Geralt, a monster hunter searching for his adopted daughter.",
    rating: 9.5
  },
  {
    name: "Elden Ring",
    description: "A dark fantasy action RPG set in an expansive world created by FromSoftware.",
    rating: 9.7
  },
  {
    name: "Minecraft",
    description: "A sandbox game that allows players to build, explore, and survive in an endless blocky world.",
    rating: 9.0
  },
  {
    name: "Red Dead Redemption 2",
    description: "An epic western adventure that follows the story of outlaw Arthur Morgan in a changing world.",
    rating: 9.8
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    description: "An open-world action-adventure game where Link explores Hyrule to defeat Calamity Ganon.",
    rating: 9.6
  },
  {
    name: "God of War (2018)",
    description: "A story-driven action game where Kratos and his son Atreus embark on a Norse mythology-inspired journey.",
    rating: 9.4
  }
];

const GameList = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-col-1 gap-4">
      {games.map((item, index) => {
        return <div key={index} className="card">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold mb-4 underline underline-offset-9 text-nowrap decoration-[#0095ff]">{item.name}</h2>
            <p className="text-blue-500 font-bold">{item.rating}</p>
          </div>
          <p className=" text-sm text-gray-500">{item.description}</p>
        </div>
      })}
    </div>
  )
}

export default GameList
