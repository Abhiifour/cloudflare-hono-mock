import { Hono } from 'hono'

const app = new Hono()

 const jokes = {
  tech: [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why was the JavaScript developer sad? Because he didn’t ‘null’ his feelings.",
    "How do you comfort a JavaScript bug? You console.log('It's okay, buddy').",
    "Why don’t programmers like nature? Too many bugs.",
    "How do you make a website feel at home? Give it a good domain."
  ],
  general: [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Parallel lines have so much in common… It’s a shame they’ll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she should embrace her mistakes… She gave me a hug.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out."
  ],
  puns: [
    "I used to play piano by ear… but now I use my hands.",
    "I would tell you a joke about an elevator, but it’s an uplifting experience.",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "I used to be a baker, but I couldn't make enough dough.",
    "I don’t trust those trees. They seem a little shady."
  ],
  animal: [
    "Why did the chicken go to the séance? To talk to the other side.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What do you call an alligator in a vest? An investigator.",
    "What do you get when you cross a fish with an elephant? Swimming trunks.",
    "Why don’t ants get sick? Because they have tiny ant-bodies!"
  ],
  dadJokes: [
    "Why can’t you give Elsa a balloon? Because she will let it go.",
    "Why did the coffee file a police report? It got mugged.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Did you hear about the guy who invented Lifesavers? He made a mint!",
    "I told my suitcase there will be no vacations this year… Now I’m dealing with emotional baggage."
  ],
  random: [
    "Why did the bicycle fall over? Because it was two-tired.",
    "What did one wall say to the other wall? I’ll meet you at the corner.",
    "Why don’t eggs tell jokes? They might crack up.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why did the tomato blush? Because it saw the salad dressing!"
  ]
};


app.get('/', (c) => {
  return c.json(jokes)
})

app.post('/', async (c) => {
  const body = await c.req.json();

  return c.json({
    msg : "alright"
  })
})

export default app
