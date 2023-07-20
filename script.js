const affirmationQuotes = [
    "I am worthy of love and respect.",
    "I believe in myself and my abilities.",
    "I attract positivity and abundance into my life.",
    "I am in control of my thoughts and emotions.",
    "I am capable of achieving my goals.",
    "I am deserving of happiness and success.",
    "I am strong and resilient.",
    "I am constantly growing and evolving.",
    "I am at peace with my past and excited for my future.",
    "I am confident in my decision-making skills.",

    "I am worthy of all the good things that come my way.",
    "I embrace change and see it as an opportunity for growth.",
    "I radiate confidence and self-assurance in every situation.",
    "I release all negative beliefs and replace them with positive ones.",
    "I am surrounded by loving and supportive relationships.",
    "I forgive myself and others for any past mistakes and move forward with grace.",
    "I am a magnet for wonderful opportunities and experiences.",
    "I trust my intuition and make decisions that align with my highest good.",
    "I am a unique individual with valuable contributions to offer the world.",
    "I let go of comparison and embrace my own journey with joy and enthusiasm.",
    "I am open to receiving love, success, and abundance in all areas of my life.",
    "I face challenges with courage and emerge stronger from every obstacle.",
    "I am worthy of self-care and prioritize my well-being.",
    "I attract prosperity and abundance effortlessly.",
    "I am a beacon of positivity and inspire those around me.",
    "I am loved and cherished just as I am.",
    "I have the power to create the life of my dreams.",
    "I am constantly attracting positive energy and blessings into my life.",
    "I am a master of my thoughts, directing them towards positivity and growth.",
    "I trust in the divine timing of my life and stay patient as things unfold.",
    "I radiate love, compassion, and understanding to all beings.",
    "I am resilient and bounce back from setbacks with even more determination.",
    "I am open to receiving compliments and praise with grace and gratitude.",
    "I am worthy of achieving all my aspirations, and I take action towards them daily.",
    "I am worthy of taking breaks and resting when needed, knowing it contributes to my overall success.",
    "I am a source of motivation and encouragement for others.",
    "I am aligned with my life's purpose and follow my passion with unwavering dedication.",
    "I celebrate my achievements and acknowledge my progress, no matter how small.",
    "I am a loving and kind person, and I attract the same energy from others.",
    "I am open to giving and receiving love freely, without fear or reservation.",
    "I am a creative being, and my ideas flow effortlessly into reality.",
    "I embrace my uniqueness and let it shine brightly in the world.",
    "I am constantly learning and growing, evolving into the best version of myself.",
    "I am confident in my abilities to overcome any challenge that comes my way.",
    "I am at peace with my past, understanding that it has shaped me into who I am today.",
    "I attract positive, like-minded individuals into my life who support and uplift me.",
    "I am deserving of all the good things that life has to offer.",
    "I am an inspiration to others, motivating them to pursue their dreams.",
    "I am in harmony with the universe, and everything is falling into place perfectly.",
    "I am open to giving and receiving love in its various forms.",
    "I am in tune with my intuition, and it guides me towards the right decisions.",
    "I am a vessel of love, spreading joy and compassion wherever I go.",
    "I am confident in my ability to handle whatever comes my way.",
    "I am deserving of success and abundance, and I embrace it wholeheartedly.",
    "I am worthy of respect and treat myself and others with kindness and dignity.",
    "I am a powerful creator, manifesting my desires with clarity and focus.",
    "I am in control of my reactions and choose to respond with understanding and empathy.",
    "I am a source of positivity and light in the lives of those around me.",
    "I am deserving of all the good things that life has to offer, and I gratefully receive them.",
    "I am worthy of taking time for self-care and nurturing my well-being.",
    "I am courageous and face challenges with confidence and determination.",
    "I am constantly learning and growing, expanding my knowledge and understanding of the world.",
    "I am surrounded by love and support, and I give the same to others.",
    "I am deserving of happiness and fulfillment, and I create a life that reflects that.",
    "I am a magnet for success, attracting opportunities that align with my goals.",
    "I am at peace with myself and the world, finding serenity in every moment.",
    "I am capable of handling any obstacles that come my way with grace and resilience.",
    "I am worthy of all the good that life has to offer, and I embrace it with gratitude.",
    "I am a beacon of positivity, radiating joy and optimism to those around me.",
    "I am in control of my destiny and create the life I desire.",
    "I am worthy of love, respect, and all the blessings that the universe has in store for me."
    // Add more quotes here until we have 150
  ];
  
  // Function to get a random affirmation quote from above
  function getRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmationQuotes.length);
    return affirmationQuotes[randomIndex];
  }

  // Function to display a chosen affirmation
  function dis() {
    const affirma = getRandomAffirmation();
    document.getElementById("the_text").innerHTML = affirma;
  }
  
