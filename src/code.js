/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var quotes = [
    'Choose a topic you love: Pick something you\'re passionate about or that has always piqued your curiosity. It\'ll make researching and writing your paper more fun!',
    'Start early and take your time: Don\'t wait until the last minute! Give yourself plenty of time to research, write, revise, and edit your paper.',
    'Explore different sources: Check out books, academic journals, and online resources to gather information. Don\'t forget to cite your sources properly!',
    'Get organized: Create an outline or a mind map to organize your thoughts and ideas before you start writing.',
    'Keep it simple: Make your writing easy to understand and avoid using overly technical language or jargon that might confuse your readers.',
    'Bring your ideas to life: Use examples and illustrations to help explain complex concepts and to make your paper more interesting.',
    'Get feedback: Share your paper with your peers, your advisor, or a tutor to get feedback and suggestions for improvement.',
    'Polish your work: Edit and proofread your paper for grammar, punctuation, and spelling errors. Make sure your citations are accurate and consistent.',
    'Practice your presentation: Prepare a clear and concise presentation of your work, and practice presenting it to a small audience to gain confidence and improve your delivery.',
    'Have fun: Remember that your senior comprehensive is a chance to delve into a topic that fascinates you and show off your knowledge and skills. Enjoy the journey and be proud of your accomplishments!',
    'Use puns and math jokes in your presentation to add some humor and keep your audience engaged. For example, "Let\'s integrate some fun into this presentation!" or "I promise not to make any derivative jokes."',
    'Use colorful props or illustrations to help explain complex concepts. For example, use candy to demonstrate geometric shapes or use a toy car to demonstrate calculus concepts.',
    'Use a game-show style format for your presentation, complete with buzzers, prizes, and trivia questions related to your topic.',
    'Incorporate fun mathematical challenges or puzzles into your presentation to give your audience a chance to participate and interact.',
    'Use fun animations or videos to demonstrate concepts or to add some humor to your presentation.',
    'Dress up as your favorite mathematician or wear a fun math-themed costume to add some personality to your presentation.',
    'Start your presentation with a funny math-related quote or a humorous anecdote related to your topic.',
    'Use memes or funny pictures to add some humor to your slides and keep your audience entertained.',
    'Look for an advisor who specializes in the area of mathematics that interests you. Ideally, you want to work with someone who has a deep understanding of the topic you want to research.',
    'Consider the advisor\'s availability. You want to work with someone who is willing to give you the time and attention you need to succeed in your project.',
    'Seek advice from other students who have worked with potential advisors. Talking to other students can give you a sense of what it\'s like to work with a particular advisor.',
    'Consider the advisor\'s expectations. Some advisors may have a more hands-off approach, while others may want to be more involved in the research process. Make sure you choose an advisor whose expectations align with your own.',
    'Meet with potential advisors before making a decision. This will give you a chance to get to know them and determine whether you feel comfortable working with them.'
  ]

  function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }