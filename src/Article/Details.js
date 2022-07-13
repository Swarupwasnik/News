import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      "id":1,
      "title":"India, China to hold 16th round of corps commander-level talks on July 17",
      "Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/_668169ca-659f-11e7-99b4-5703255acffe_1657708053165_1657708053165.jpg",
      "category":"home",
      "description":"India and China is likely to hold the 16th round of Corps Commander-level talks on July17. The Indian side will be represented by Fire and Fury Corps Commander Lt Gen A Sengupta."
      
    },
    {
      "id": 2,
      "title": "Priyanka Chopra and Nick Jonas turn the glam on in new photoshoot, invest in a fashion initiative",
      
      "Image": "https://images.hindustantimes.com/img/2022/07/13/400x225/nick_1657717247361_1657717247543_1657717247543.jpg",
      "category": "Bollywood",
      "description": "Priyanka Chopra and Nick Jonas's latest picture from a photoshoot is all about their strong chemistry. Here's what fans think about it."
      
    },
    {
      "id": 61,
      "title": "SAY HELLO TO A NEW KIND OF LIVING IN SOUTH MUMBAI'S PREMIER DISTRICT",
      
      "Image": "https://piramalaranya-official.com/images/m3-banner.jpg",
      "category": "footer1",
      "description": "Presenting Piramal Aranya, a high rise gated sanctuary that offers luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness technologies, dual-aspect blue and green views and a world-class lifestyle crafted alongside the world’s leading partners at Rani Baug, Byculla, South Mumbai."

      
    },
    
    {
      "id": 3,
      "title": "Even Kareena Kapoor can't stop laughing at Taimur Ali Khan's hilarious expressions in new pic: ‘What are you doing Tim?'",
      
      "Image": "https://images.hindustantimes.com/img/2022/07/13/400x225/taimur_1657681589620_1657681589804_1657681589804.jpg",
      "category": "Bollywood",
      'description':"Kareena Kapoor clicked son Taimur Ali Khan's funny expressions as he watched the India versus England cricket match with Saif Ali Khan and their friends in London."
      
    },
    {
      "id": 4,
      "title":"When Johnny Depp blushed on TV, said Vanessa Paradis was the love of his life",
      "Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/Untitled_design_(9)_1657713002009_1657713021556_1657713021556.png",
      "category": "Hollywood",
      'description':"Johnny Depp said in a 2004 interview that his then girlfriend, actor Vanessa Paradis is the love of his life. They broke up in 2012 and in the same year he started dating Amber Heard."
    },
    {
      "id": 5,
      "title": "'Brahmastra' star Ranbir Kapoor reveals THIS Telugu actor is his favourite",
      "Image": "https://static.toiimg.com/thumb/msid-91915598,width-800,height-600,resizemode-75,imgsize-32890,pt-32,y_pad-40/91915598.jpg",
      "category": "Bollywood",
      "description": "During an interaction with the media, the actor was asked who his favourite Telugu actor was. After a brief pause, Ranbir quipped, “I love my darling Prabhas. He is a dear friend of mine.” Ranbir also went on to add, "
    },
    {
      "id": 6,
      "title": "Neetu Kapoor on Viral Bhayani's comment about Alia Bhatt-Ranbir Kapoor wedding: 'Will host special reception for him'",
      "Image": "https://images.hindustantimes.com/img/2022/05/30/550x309/neetu_kapoor_1650036794774_1653923025524.jpg",
      "category": "Bollywood",
      "description": "Actor Neetu Kapoor has reacted to paparazzo Viral Bhayani's remark that he was upset that actors Alia Bhatt and Ranbir Kapoor did not hold a reception after their wedding. In a new interview, Neetu said that she doesn't like it when a person is upset, and added that she will 'host a special reception only for him'."
    },
    {
      "id": 54,
      "title": "Neetu Kapoor on Viral Bhayani's comment about Alia Bhatt-Ranbir Kapoor wedding: 'Will host special reception for him'",
      "Image": "https://images.hindustantimes.com/img/2022/05/30/550x309/neetu_kapoor_1650036794774_1653923025524.jpg",
      "category": "mix",
      "description": "Actor Neetu Kapoor has reacted to paparazzo Viral Bhayani's remark that he was upset that actors Alia Bhatt and Ranbir Kapoor did not hold a reception after their wedding. In a new interview, Neetu said that she doesn't like it when a person is upset, and added that she will 'host a special reception only for him'."
    },
    {
      "id": 7,
      "title": "Salman Khan has finished 5 days of 'Kabhi Eid Kabhi Diwali' shoot in Mumbai",
      "Image": "https://static.toiimg.com/thumb/msid-91911724,imgsize-24512,width-800,height-600,resizemode-75/91911724.jpg",
      "category": "Bollywood",
      "description": "Now, Salman may still keep Sajid Nadiadwala's name in the credits as we had told you. But what takes us by surprise now is an information from a top source that Salman has already shot the film for 5 days."
    },
  {
    "id": 8,
    "title":"Pooja Bhatt says John Abraham complained why only Bipasha Basu was asked if she was fine during Jism shoot and not him",
    "category": "Bollywood",
    "Image":"https://images.hindustantimes.com/img/2022/07/13/400x225/jism_pooja_bhatt_1657713955202_1657713966686_1657713966686.jpg",
    "description":"Pooja Bhatt recalls how she asked Bipasha Basu about her comfort but forgot to ask the same to John Abraham. She said it is presumptuous of women to assume that only they will feel awkward in intimate situations."
  },
  {
    "id": 9,
    'title':"R Madhavan reacts after fan shares videos of Kolkata theatre stopping Rocketry: The Nambi Effect screening",
"Image":"https://images.hindustantimes.com/img/2022/07/11/400x225/R-Madhavan-twitter_1657539821143_1657539836872.jpg",
"category": "Bollywood",
'description':"R Madhavan has responded to a Twitter user who said that a Kolkata theatre abruptly stopped the screening of Rocketry: The Nambi Effect. Here's what he has said."
  },
  {
    "id": 10,
    "title":"Deepika Padukone gives shoutout to South Indian restaurant for 'scrumptious breakfast': 'My husband and I...'",
    'Image':"https://images.hindustantimes.com/img/2022/07/11/400x225/ranveer_singh_deepika_padukone_1657510415348_1657510415550.jpg",
    "category": "Bollywood",
"description":"Ranveer Singh and Deepika Padukone returned from their US vacation on Monday morning. The couple was spotted at the Mumbai airport after they had a South Indian breakfast at the Delhi airport. " },
  {
    "id": 11,
    "title": "Tom Cruise furious with ex-wife Katie Holmes for contacting his enemy ",
    "Image": "https://static.toiimg.com/thumb/msid-49724925,width-800,height-600,resizemode-75/49724925.jpg",
    "category": "Hollywood",
    "description": "As controversy about Scientology continues to hit the headlines, it appears Tom is angry that ex-wife Katie has reached out to the Scientology enemy. With Leah Rimini in the Church’s bad books following her penning a tell-all book, Trouble Maker, about her time as a Scientologist, the Mission Impossible actor has reacted badly to Katie apologising to Remini for the way she has been treated in the past."
  },
  {
    "id": 55,
    "title":"Why is continuous glucose monitoring important during pregnancy?",
"Image":"Why is continuous glucose monitoring important during pregnancy?",
    "category": "mix",
    "description":"Gestational diabetes creates insulin resistance in the body. Pregnancy hormones can significantly affect the insulin produced in a woman’s body, rendering it ineffective. For a healthy pregnancy, all health parameters of an expectant mother must be in control. Therefore, gestational diabetes and its subsequent management must not be ignored."
  },
  {
    "id": 12,
    "title":"Who is Huma Abedin? Meet Bradley Cooper’s rumoured girlfriend",
    "Image":'https://images.hindustantimes.com/img/2022/07/13/550x309/Bradley_Cooper_Indian_girlfriend_Huma_Abedin_1657703913302_1657703944096_1657703944096.jpg',
"description":"Hollywood actor Bradley Cooper and Huma Abedin are dating, multiple reports said on Thursday. Vogue editor Anna Wintour is said to have set them up. Find out more about Bradley’s rumoured girlfriend, who reportedly has Indian and Pakistani ancestry. ",
    "category": "Hollywood",
  },
  {
    "id": 13,
    "title": "Robert De Niro: Enjoy giving advice to younger actors' ",
    "Image": "https://static.toiimg.com/thumb/msid-49086446,width-800,height-600,resizemode-75/49086446.jpg",
    "category": "Hollywood",
    "description": "Speaking about what each generation can learn from the other, De Niro, 72, said, There is no downside in asking somebody who is been around a lot longer than you especially if they have done things that you have done, or in that area."
  },
 
  {
    "id": 14,
    "title":"Hilary Duff says husband Matthew Koma's ‘very good friends with Priyanka Chopra’",
    "category": "Hollywood",
    "Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/priyanka_chopra_Instagram_1657712320096_1657712343817_1657712343817.jpg",
    "description":"Priyanka Chopra is friends with Hilary Duff’s husband Matthew Koma, and the two often leave comments on each other’s social media posts. In a new interview, Hilary spoke about Priyanka and also working with Nick Jonas’ band, Jonas Brothers."
  },
  {
    "id": 15,
    "title": "Elon Musk to borrow less in Twitter bid, filing says ",
    "Image": "https://images.hindustantimes.com/img/2022/05/26/550x309/TWITTER-AGM-0_1653534087051_1653534101559.JPG",
    "category": "Hollywood",
    "description": "Tesla CEO Elon Musk has been courting major Twitter investors including co-founder Jack Dorsey in the hope of getting them to partner with him in taking the San Francisco-based company private.Elon Musk notified US regulators on Wednesday that he will rely less on loans in his bid to buy Twitter, as he and partners put $33.5 billion into the deal.Twitter shares climbed more than 5 percent on the news, as the market evidently took it as a sign the acquisition is moving forward despite Musk declaring it on hold due to his concerns about the number of accounts that might be software bots instead of real people. Musk said in the regulatory filing that he had new commitments that will allow him to rely less on loans to buy Twitter, but did not specify whether he was reaching into his own pocket for money or had won over others with big stakes in the company Analysts were concerned about Musk using billions of dollars worth of his Tesla shares to back loans, meaning the electric car company's stock price would be affected by the fortunes of Twitter  ."
  },
  {
    "id": 16,
    "title": "'Deadpool' trailer: Ryan Reynolds is Marvel's most unconventional superhero till date",
    "Image": "https://static.toiimg.com/thumb/msid-48355484,width-800,height-600,resizemode-75/48355484.jpg",
    "category": "Hollywood",
    "description": "Ryan Reynolds, who plays a disfigured and mentally unstable mercenary with the superhuman ability of an accelerated healing factor. He is known as the Merc with a Mouth because of his talkative nature and a tendency to break the fourth wall, which is also seen at the end of the trailer."
  },
  {
    "id": 17,
    "title": "Cannes full list of winners: Swedish film Triangle of Sadness wins Palme d'Or ",
    "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/FILMFESTIVAL-CANNES-AWARDS-354_1653794715337_1653794733888.JPG",
    "category": "Hollywood",
    "description": "The 75th Cannes Film Festival - Closing ceremony - Cannes, France, May 28, 2022. Song Kang-ho, Best Actor award winner for his role in the film Broker (Les bonnes etoiles), director Ruben Ostlund, Palme d'Or award winner for the film film Triangle of Sadness, and Vincent Lindon, Jury President of the 75th Cannes Film Festival, react on stage. REUTERS/Sarah Meyssonnier TPX IMAGES OF THE DAY(REUTERS). The 75th edition of the Cannes Film Festival came to a glittering close on Saturday with the nine-member jury giving out the big awards at the prestigious festival. Swedish director Ruben Ostlund’s class warfare comedy took the top honours by winning the festival's top prize--the Palme d’Or. Korean cinema again showed its dominance by taking home multiple awards for different films.The awards were selected by a nine-member jury headed by French actor Vincent Lindon and presented Saturday in a closing ceremony inside Cannes' Grand Lumière Theater. The jury included an Indian face in actor Deepika Padukone. A separate section of two awards for documentary films was adjudged e earlier on Saturday. Those awards were adjudged by a separate jury."
  },
  {
    "id": 18,
    "title": "Woody Allen dreams of perfect murder",
    "Image": "https://static.toiimg.com/thumb/msid-48131438,width-800,height-600,resizemode-75/48131438.jpg",
    "category": "Hollywood",
    "description": "The director said since childhood he was preoccupied with a few subjects including magic tricks, baseball and crime, reported the Huffington Post."
  },
  {
    "id": 19,
    "title": "Chris Pratt, Anna Faris debunk marriage problem ",
    "Image": "https://static.toiimg.com/thumb/msid-48029128,width-800,height-600,resizemode-75/48029128.jpg",
    "category": "Hollywood",
    "description": "On their sixth wedding anniversary, the much-in-love couple exchanged sweet tweets to each other, debunking the rumours that their marriage is no longer intact, reported Ace Showbiz."
  },
  {
    "id": 20,
    "title": "Leonardo DiCaprio sues magazine over baby rumours with Rihanna",
    "Image": "https://static.toiimg.com/thumb/msid-47575141,width-800,height-600,resizemode-75/47575141.jpg",
    "category": "Hollywood",
    "description": "He has sued Oops! for its May 28 cover story, which also said that the 40-year-old 'Inception' actor would not recognise the baby as his, reported TMZ."
  },
  {
    "id": 21,
    "title": "Apple iPhone 14 may get Always-On Display, but what is it and why should you care? ",
    "Image": "https://images.indianexpress.com/2022/05/iPhone-14-Pro-Ian-Zelbo-1.jpg",
    "category": "Technology",
    "description": "Always-On Display, or AoD is expected to be one of the major features coming to select models of iPhone 14 later this year. While those who have been using iPhones for a long time may be new to the term, Android users have enjoyed Always On Display for years."
  },
  {
    "id": 56,
    "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
    "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
    "category": "mix",
    "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
  },
  {
    "id": 52,
    "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
    "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
    "category": "technology",
    "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
  },
  {
    "id": 22,
    "title":"Explained: How James Webb telescope images change universe' understanding",
"Image":"https://images.hindustantimes.com/img/2022/07/12/550x309/SPACE-EXPLORATION-TELESCOPE-18_1657647880717_1657647880717_1657647890457_1657647890457.JPG",
    "category": "Technology",
    "description":"On Monday, the American space agency had released the clearest image to date of the early universe, going back as old as 13 billion years."
  },
  {
    "id": 63,
    "title":"Advanced Certification in Digital Marketing and Analytics",
    "Image":"https://intellipaat.com/course-image/2020/08/career-services-1.png",
    "category": "footer3",
    "description":"Guaranteed 3 job interviews upon submission of projects and assignments. Get interviewed by our 400+ hiring partners."

    
  },
  {
    "id": 22,
    "title": "This is the space station China is building to challenge the US ",
    "Image": "https://images.indianexpress.com/2022/05/tiangong-space-station-model.jpg",
    "category": "Technology",
    "description": "China released new details about the final stages of work on its Tiangong space station, an under-construction orbiter started after the US barred Beijing from participating in the International Space Station."
  },
  {
    "id": 23,
"title":"NASA releases next wave of images of universe from James Webb Space Telescope",
"Image":"https://images.hindustantimes.com/img/2022/07/12/400x225/FXeXvbKXkAEYsK0_1657638328761_1657638350881_1657638350881.jfif",   
 "category": "Technology",
 "description":"This morning, folks across this planet are going to see the images captured by this telescope, and every image is a new discovery,said NASA administrator Bill Nelson"

  },
  {
    "id": 24,
    "title": "NASA video shows Ingenuity Mars Helicopter on a daring record-breaking flight",
    "Image": "https://images.indianexpress.com/2022/05/Ingenuity-helicopter-illustration-record-flight.jpg",
    "category": "Technology",
    "description": "NASA has published dramatic footage of the Ingenuity Mars helicopter completing its record-breaking 25th flight where the helicopter covered a distance of 704 metres at a speed of 5.5 metres per second, marking the rotorcraft’s longest and fastest flight to date. The video was taken on April 8 during the flight but was only released by the space agency on May 27."
  },
  {
    "id": 25,
    "title": "Raju Narisetti interview: ‘Wikipedia is building trust with transparency’ ",
    "Image": "https://images.indianexpress.com/2022/05/raju-narisetti.jpg",
    "category": "Technology",
    "description": "Within hours of the shooting in Texas, the Wikipedia page of the Robb Elementary School in Uvalde had seen 765 edits from 154 different contributors and was overseen by 103 page-watchers who ensure only accurate information is published. This ability to offer “reliable information”, especially in critical times, is for Raju Narisetti, a member of the Board of Trustees of the Wikimedia Foundation, the “significant opportunity” for Wikipedia in countries like India."
  },
  {
    "id": 26,
    "title": "Airtel launches new broadband plans with unlimited internet, OTT subscriptions",
    "Image": "https://images.indianexpress.com/2022/05/Airtel-Xstream-new-unlimited-packages-ott-subscription.jpg",
    "category": "Technology",
    "description": "The Rs 699 plan gives you 40 Mbps of unlimited internet, along with a Disney+ Hotstar subscription. You also get an Airtel Xstream Premium single login for 14 OTTS: SonyLIV, ErosNow, Lionsgate Play, Hoichoi, ManoramaMax, Shemaroo, Ultra, HungamaPlay, EPICon, DivoTV, Klikk, Nammaflix, Dollywood and Shorts TV. You also get 350 channels on the Airtel 4K Xstream Box."
  },
  {
    "id": 27,
    "title":"Daily brief: Was Elon Musk ever the right man to ‘save’ Twitter, and all the latest news",
"Image":"https://images.hindustantimes.com/img/2022/07/12/400x225/ELON-MUSK-CHILDCARE-0_1657639053094_1657639053094_1657639066419_1657639066419.JPG",   
 "category": "Technology",
 "description":"Here are today’s top news, analysis, and opinion. Know all about the latest news and other news updates from Hindustan Times"
  },
  {
    "id": 28,
    "title": "iQOO Z6 Pro review: What’s the X factor here? ",
    "Image": "https://images.indianexpress.com/2022/05/iQOO-Z6-Pro-review-1.jpg",
    "category": "Technology",
    "description": "The iQOO Z6 Pro is yet another performance-oriented phone for the masses. Starting at Rs 23,999, the phone comes with a Snapdragon 778G  processor, 66W fast charging, and other features, which are geared towards gaming. Now I have used a number of phones running this same processor already, and all of them seem to target a particular use case. The Xiaomi 11 Lite NE 5G for instance, is a compact phone, while the Realme 9 5G SE is a gaming phone on a budget.The iQOO Z6 Pro doesn’t seem to hit a particular string, and neither is it the most affordable phone with the chip. So should you care about this phone at all? Let’s find out.iQOO Z6 Pro specs: 6.44-inch AMOLED 90Hz screen | Snapdragon 778G chip | 64MP + 8MP + 2MP camera, 16MP front camera | 4700mAh battery with 66W fast charging One of the first things noticeable about the iQOO Z6 Pro is a unique looking rear-design, complete with two large circles holding in the three camera sensors. The phone has a plastic body but the build quality is really nice and everything feels solid to the touch when using this."
  },
  {
    "id": 29,
    "title": " Google hit with fresh UK investigation over ad tech dominance",
    "Image": "https://images.indianexpress.com/2022/05/Google-reuters-1.jpg",
    "category": "Technology",
    "description": "The UK’s antitrust watchdog started a new investigation of Alphabet Inc.’s Google, over suspicions it may have abused its dominant position across its ad tech that goes to the heart of the tech giant’s business model.The move by the Competition and Markets Authority opens a fresh front in its regulatory tussle with Google. The CMA said it was concerned Google sought to illegally favor its own ad exchange services, while taking steps to exclude the services offered by rivals.“Weakening competition in this area could reduce the ad revenues of publishers, who may be forced to compromise the quality of their content to cut costs or put their content behind pay walls,” said Andrea Coscelli, the CMA’s Chief Executive Officer.Watchdogs around the world have started to home in on the huge power that firms such as Google and Meta’s Facebook wield over ad markets — striking at the heart of the tech giants’ money making machines. Google faces a separate probe by the CMA into possible collusion over the way it operates online display advertising services.The CMA has been examining the way Google buys and sells advertising since at least 2020, saying that its advertising stack is a potential conflict of interest. It’s called for powers that would even allow for a structural changes."
  },
  {
    "id": 30,
    "title": "Realme GT Neo 3 get a special Naruto Edition: All you need to know ",
    "Image": "https://images.indianexpress.com/2022/05/Realme-Naruto-edition-1.jpg",
    "category": "Technology",
    "description": "Realme is no stranger to launching special edition devices targeted at anime fans out there. The brand’s GT Neo 2 smartphone came out with a limited Dragon Ball edition complete with the titular character Goku’s colours and more. Now, the company has revealed yet another anime-edition phone.The Realme GT Neo Naruto Edition phone is based on the Naruto-series. Taking elements from both Naruto and the sequel series Naruto: Shippuden, the phone’s design takes cues from the signature black and orange jacket worn by the show’s lead character Naruto Uzumaki, as well as the silver headband most ninja in the show wear, complete with the Konoha seal.However, that’s just the device. Realme has also thrown in other themed goodies into the package, including a neat-looking Naruto-themed case, a black and orange charging adapter and a black USB type-C to type-C cable to go with it. Additionally, there is also a Naruto-themed SIM-ejector pin and a 10,000mAh power bank.Asides from the aesthetics, the phone itself is a regular Realme GT Neo 3 (the 150W fast charging variant) and includes the same hardware as its standard counterpart. This includes a MediaTek Dimensity 8100 chip. A 6.7-inch AMOLED display with 120Hz HDR10+ and an under-display fingerprint scanner. The single storage variant will also feature 12GB RAM and 256GB UFS 3.1 storage."
  },
  {
    "id": 31,
    "title": "Gul Panag shares her experience of cycling in the mountains: ‘It’s a different ball game’",
    "Image": "https://images.indianexpress.com/2022/05/Gul-Panag-1200.jpg",
    "category": "Fitness",
    "description": "Actor Gul Panag, who is a fitness enthusiast, took to Instagram to share her experience riding her bike or cycle in the mountains in Himachal Pradesh. In one of her recent posts, as she posed with her two wheeler in a blue jacket and a hat, smiling at the camera, she wrote, “Day 1 of training to ride in the mountains. And it’s a whole different ball game!”"
  },
  {
    "id": 32,
    "title":"Beauty and skincare tips: Tricks to treat monsoon acne at home",
"Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/pexels-cottonbro-4812658_1657715279844_1657715306302_1657715306302.jpg",   
 "category": "Fitness",
 "description":"Looking for effective ways to combat acne prone skin during monsoon? Here are some tips and tricks by beauty and skincare experts to treat monsoon acne at home"
  },
  {
    "id": 33,
    "title": " Asanas and breathing exercises to enhance mood, boost energy levels",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-breathing-1200.jpg",
    "category": "Fitness",
    "description": "Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.“In yoga, we use movement and breath to release stuck energy along the spine and throughout the body. The mind-body connection created in yoga facilitates change at a cellular level. Our nervous systems can rewire by retraining psychological or emotional triggers that set off our flight-or-fight response,” she explains."
  },
  {
    "id": 34,
    "title":"How soon can I get Covid again? Experts now say 28 days!",
"Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/Covid-19_1657714897593_1657714897852_1657714897852.jpg",    "category": "Fitness",
"description":"Experts have reduced the protective window of prior infection from 12 weeks to 28 days." },
  {
    "id": 35,
    "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
    "category": "Fitness",
    "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
  },
  {
    "id": 37,
    "title":"Diabetes-friendly dinner recipes for every season",
    "category": "mix",
    "Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/diabetes_dinner_recipes_1657713937138_1657713950813_1657713950813.jpg",
"description":"Here are some evergreen dinner recipes for people with diabetes that are as delicious as they are healthy."
 },
  {
    "id": 36,
    "title": " Feeling lazy on a vacation? Try doing these simple exercises",
    "Image": "https://images.indianexpress.com/2022/05/GettyImages-workout-session-beach-1200.jpg",
    "category": "Fitness",
    "description": "Many people feel lazy when they are on a vacation, because of a change in schedule. If they are physically active otherwise, a few days of inactiveness can take a toll on their body. When it comes to exercising, it is important to be consistent and disciplined.    "
  },
  {
    "id": 37,
    "title": "Celeb fitness: Sooraj Pancholi is ‘back to the game ",
    "Image": "https://images.indianexpress.com/2022/05/sooraj-pancholi_1200_insta.jpg",
    "category": "Fitness",
    "description": "Sooraj Pancholi, who loves to work out, is back to the fitness grind after long. His fitness trainer, Pawan Jatwa, recently shared a video in which the Hero actor could be seen flexing his muscles. According to Bala Krishna Reddy Dabbedi, a fitness expert, and co-founder, director at Fittr, people usually think that they can pick up from where they left and that their original strength will be the same — “but that will not be the case”. “It’s easy to compare yourself to the times when you were training regularly. But, if there has been a gap in your gymming routine, it’s reasonable to see a decline in strength, endurance, and overall muscle,” he expressed.Assess again, test your current strength levels and train accordingly, he suggested. “There is something called muscle memory which helps one get back to their previous strength levels and muscle mass, but this takes times — from a few weeks to even some months. Just be consistent and positive till you get there. On resuming, do not start with an intense program. Keep it minimal, start slow, and you may even experience muscle soreness and pain. Eventually increase the intensity with every passing week,” she said."
  },
  {
    "id": 38,
    "title": "Exercise Reduces Risk of Type 2 Diabetes, Studies Show ",
    "Image": "https://www.verywellfit.com/thmb/3MvvjaqTvCD5A7YBCj51B7KR6ec=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/exerciseCecilie_Arcurs-9b4222509db94b4ba991e86217bdc542.jpg",
    "category": "Fitness",
    "description": "Being physically active can help reduce the risk of developing type 2 diabetes. A recent study in Diabetes Care found that women who get more steps have a lower risk of developing diabetes, compared to women who are more sedentary.1And a study in the journal Metabolites found that men who are more active have a lower risk of developing type 2 diabetes compared to men who are more sedentary.2 It seems that physical activity significantly changes the body’s metabolite profile, and many of these changes are associated with a lower risk of type 2 diabetes, says Maria Lankinen, PhD, research scientist, Institute of Public Health and Clinical Nutrition at the University of Eastern Finland, and one of the researchers on the study published in Metabolites. Increased physical activity also improved insulin secretion.The study published in Diabetes Care focused on 4,838 older women (median age 78.9) without diabetes, who were followed for up to 6.9 years. Their steps were monitored by accelerometers to account for the number of steps and the intensity of steps, which were labeled as light-intensity or moderate- to vigorous-intensity.For diabetes among older adults, our findings indicate that moderate- to vigorous-intensity steps were more strongly associated with a lower risk of diabetes than light-intensity steps, adds John Bellettiere, PhD, an assistant professor of family medicine and public health at UC San Diego, and a co-author on the study."
  },
  {
    "id": 39,
    "title":"Tips to quit smoking: 10 easy ways to conquer tobacco cravings",
    "Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/zachary-nelson-98Elr-LIvD8-unsplash_1657701262883_1657701287254_1657701287254.jpg",
    "category": "Fitness",
    "description":"Check out these 10 simple strategies to help you resist the impulse to smoke or use tobacco when a craving occurs"
  },
  {
    "id": 40,
    "title": "Walking Shoe Types and Buying Tips",
    "Image": "https://www.verywellfit.com/thmb/1LJpQJpL0Ek812XT-GlNOpOjE_4=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-606353299-46be0bd52ffb43558df62348abf5fffb.jpg",
    "category": "Fitness",
    "description": "Walking shoes are your most important item of walking gear. Not only do you want to choose the best pair for your health and performance, but you also want to make sure that you are spending your money wisely.It's helpful to know what to look for in a good fitness walking shoe and how to understand that the pair you pick is the right set of shoes for your walking style.There's no one best shoe for all walkers. The best shoe for you is the one that fits you best. It should give you proper support, flexibility, and cushioning and compensate for any stride problems you may have, such as overpronation. Each person's feet are differentIt can be hard to determine all of that on your own, however. Find a shoe fitting expert to help you discover the best shoe for your walking distance, speed, style, and surface, as well as your weight and stride. The best place to find that person is at the most serious running shoe store in your area.Once you have found a shoe that fits you right, you may become more familiar with shoe lasts and shapes so that you can make your own selections in the future.Shoe manufacturers put the best design and technology into running shoe styles while walking shoe styles are designed primarily for market appeal rather than performance."
  },
  {
    "id": 41,
    "title": "Ensure your cheese does not turn sticky on grating with this tip",
    "Image": "https://images.indianexpress.com/2022/05/cheese_1200_pexels.jpg",
    "category": "Food",
    "description": "Kitchen tips and tricks are always welcome. They make cooking seem like a breeze, and the experience hassle-free and enjoyable. They are also perfect for days when you want to whip up a dish in a jiffy!"
  },
  {
    "id": 42,
    "title":"Theatre productions promote healthier body image in children: Study",
"Image":"https://images.hindustantimes.com/img/2022/07/13/550x309/kyle-head-p6rNTdAPbuk-unsplash_1657712726634_1657712735086_1657712735086.jpg",
    "category": "Food",
    "description":"https://images.hindustantimes.com/img/2022/07/13/550x309/kyle-head-p6rNTdAPbuk-unsplash_1657712726634_1657712735086_1657712735086.jpg"
  },
  {
    "id": 43,
    "title": "Points Every Diabetic Fruit Lover Must Keep in Mind",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-2-51-16529608873x2.png?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "With summers already here, who doesn’t want to thoroughly enjoy the seasonal fruits that come with it. But if you have diabetes, then you must have been told countless times to consume fruits with utmost caution. Seasonal fruits like watermelon and grapes are high in glycemic index (GI), and thus with it comes the question — Can a diabetic have fruits? Is it safe?However, bursting the myth, a diabetic can enjoy fruits, but simply need to make strategic decisions based on fruit and how much to consume as per its GI as it assists the person in selecting fruit.  Fruits like watermelon have a glycemic index (GI) of 72 per 100 g serving, but one watchful serving of the fruit contains little carbs and will have minimal effect on the blood sugar level.It is safe to consume blackberries, apples, avocados, strawberries, plums, grapefruit, peaches, pears, and cherries in watchful quantity as they have 20-49 GI levels, which technically classifies them as low GI fruit. With lots of fibre and a low GI, these fruits help improve blood sugar tolerance.People who have diabetes are usually advised to keep an eye on the number of carbohydrates and portion size of their meal, even if it contains low GI, which is indeed true. While consuming fruits certain factors such as the ripeness of the fruit that influences its GI should be taken into account."
  },
  {
    "id": 44,
    "title": "Excessive Consumption of Ginger can Lead to These Side Effects",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/ginger-16521781103x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Ginger is a very common Indian household ingredient, which is well known for its amazing flavour. For many, morning tea is incomplete without crushing ginger in it. Not only as spices, but ginger has been a traditional remedy in many cultures for thousands of years. After all, it is loaded with impeccable health benefits. While we have been told time and again that ginger carries innumerable nutritious benefits, it’s rarely discussed that this magical ingredient can also cause side effects.Although the side effects usually happen after excessive intake of ginger, several cases have been witnessed where it aggravates the health issues. So let’s learn more about the side effects.As ginger carries antiplatelet properties, excessive intake of ginger may cause bleeding. Not just this, but if it is consumed with clove or garlic, it further increases the risk of excessive bleeding.The most common symptoms of basic side effects caused by excessive ginger intake are skin rashes, eye redness, dyspnea, itching, swollen lips, itchy eyes, and throat discomfort. In such circumstances, it is advised to immediately seek medical attention.Consuming ginger beyond the prescribed limit of 1500 mg per day may even lead to the risk of miscarriage. Therefore it is advised to avoid too much ginger during pregnancy and intake it only after consulting the doctor"
  },
  {
    "id": 46,
    "title":"Quick healthy treats to refresh you after a long, hot summer day",
    "Image":"https://images.hindustantimes.com/img/2022/07/13/400x225/Collage_Maker-13-Jul-2022-03.19-PM_1657705741556_1657705754291_1657705754291.jpg",
    "category": "Food",
    "description":"https://images.hindustantimes.com/img/2022/07/13/400x225/Collage_Maker-13-Jul-2022-03.19-PM_1657705741556_1657705754291_1657705754291.jpg"
  },
  {
    "id": 45,
    "title": "When to Have Breakfast, Lunch and Dinner to Get Maximum Benefits?",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/01/untitled-design-1-8-16412180333x2.png?impolicy=website&width=510&height=356",
    "category": "food",
    "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
  },
  {
    "id": 46,
    "title": "What The Fork: Kunal Vijayakar on the Perfect Summer Food to Beat the Heat",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/curd-rice-1-16519277623x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "​​ How soon we renounce age-old traditions in the praxis of food, and succumb to the allure of convenience, short cuts, and finished good-looking products. I’m talking about age old dahi or curd. In my grandmother’s home where I lived for the first 15 years of my life and even when we moved lock stock and tapeli to where my parents made their new home, dahi was always made in the kitchen. It was a daily process. Every day milk would be boiled and cooled to room temperature. A medium-heavy bottomed pot would be greased with the previous day’s dahi, which worked like a bacterial curd starter, and the boiled warm milk would be poured in. A wet cloth kept the milk covered as nature created magic, fermented the milk, added wonderfully healthy probiotic characteristics, thickened it and set it to curd. It would take four to five hours on a normal warm, hot and humid Mumbai day, eight to 12 in cold weather, that was it. Sometimes we’d make curd two times a day, just to be able to have it fresh. There was also a kind of romantic uncertainty about how well the curd would set. Sometimes it could set loosely, separating the water from the milk and sometimes it would be firm and silky. After all milk wasn’t bought homogenised, standardised and in a carton, but was bought at the doorstep from a doodhwala, whose honesty was always in question. So obviously, the better the milk the better the curd. The pot of milk with the curd starter would always be kept in a warm place and most importantly left alone. One old ladies’ tale was that you could add a green chilly with its stem intact to help the curd set faster. Ostensibly, the chilly with the stem would not impart any taste but contained certain bacteria that activated the milk to produce protein curdles that turned milk into curd faster. I’d actually never seen that happening in any of our kitchens."
  },
  {
    "id": 47,
    "title":"Recipe: Brush aside mid-week blues with this raspberry and dark chocolate mousse",
    "category": "Food",
    "Image":"https://images.hindustantimes.com/img/2022/07/11/400x225/Raspberry_chocolate_Mousse_(1)_1657532551807_1657532584678.jpg",
    "description":"Desserts are like feel good songs and if they are packed with health benefits, they definitely make us dance like this recipe of raspberry and dark chocolate mousse which is undoubtedly the perfect Monday treat one could ask for"
  },
  {
    "id": 48,
    "title": "Fruits and Vegetables are Losing Their Nutrient Value, Know the Risks",
    "Image": "https://images.news18.com/ibnlive/uploads/2021/12/untitled-3-276-16409377143x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Every now and then, we stress upon the fact of eating lots of fruits and vegetables as they are packed with nutrients. They are said to be the best way to provide nutrition to the body and boost immunity. Every season comes with a variety of grains, vegetables, and fruits and we can’t agree more that they are tastier than the stored ones. However, do you know with time the nutrition value of fruits and vegetables are declining? Yes, you read that right. With time, due to various reasons that nutrition in fruits and vegetables have declined tremendously leaving us with various deficiencies. According to a National Geographic report, the experts find the root of the problem in the quality of soil. In the last few decades, the soil quality has been compromised due to various reasons including excessive chemical use, fertilisers, irrigation and so on. The harvesting methods have changed from natural ways to machineries which has also taken a dig at the health of the soil. Apart from it, due to global warming and climate change, the atmospheric temperature is rising and making the soil lose its moisture even more that do not hold the crops well putting them in risk of losing nutrition.The report also states that due to carbon dioxide increase in the air, the nutrient content of the fruits, vegetables and other crops are pulling down.David R. Montgomery, a professor of geomorphology at the University of Washington in Seattle emphasis on one of the major risks of the lower nutrient value, that is making our immunity low. According to him, “Nutrient decline is going to leave our bodies with fewer of the components they need to mount defences against chronic diseases — it’s going to undercut the value of food as preventive medicine,” state National Geographic."
  },
  {
    "id": 49,
    "title": "This shake is a ‘powerful combination of healthy fats, protein, carbohydrates’ (recipe inside)",
    "Image": "https://images.indianexpress.com/2022/05/seeds-mix-nut-milk_200_getty.jpg",
    "category": "Food",
    "description": "Even after a restful sleep, many people wake up feeling tired and exhausted. The feeling, sometimes, may even continue throughout the day, making one feel low on energy and unproductive. But worry not, as nutritionist Nidhi Gupta has recommended a ‘powerful’ shake that will not only help you get through the day but also keep you feeling satiated."
  },
  {
    "id": 58,
    "title":"Suji ka Halwa for making breakfasts healthier and tastier. Recipe inside",
    "Image":"https://images.hindustantimes.com/img/2022/07/10/400x225/ss_1657446314336_1657446339023.jpg",
    "category": "mix",
    "description":"https://images.hindustantimes.com/img/2022/07/10/400x225/ss_1657446314336_1657446339023.jpg"
  },
  {
    "id": 50,
    "title":"Eid al-Adha special: Lip-smacking recipes to make Bakra Eid celebrations extra special",
    "Image":"https://images.hindustantimes.com/img/2022/07/09/400x225/bakra_eid_recipes_1657376837246_1657376845092.jpg",
    "category": "Food",
    "description":"On the occasion of Eid al-Adha, here are some sweet and savoury recipes you must try making at home."
  },
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details