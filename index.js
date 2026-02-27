const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke');

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });

  return response.json();
}

async function handleClick() {
  jokeHolder.innerText = 'Loading...;';
  try {
    const { joke } = await fetchJoke();
    jokeHolder.innerText = joke;
    //console.log(joke);

    jokeButton.innerText = randomItemFromArray(
      buttonText,
      jokeButton.innerText,
    );
  } catch (error) {
    jokeHolder.innerText = 'Failed to load joke';
    console.log(error);
  }
}

jokeButton.addEventListener('click', handleClick);

const buttonText = [
  'ugh.',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it',
  'please stop',
  'that was the worst one',
];

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  if (item === not) {
    console.log('Ah! we used that one last time, look again')
    return randomItemFromArray(arr, not);
  }
  return item;
}

// randomItemFromArray(buttonText,"please stop");
