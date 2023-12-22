
import axios from 'axios'

export const getQuestionsData = async (noOfQuestions , category , difficulty) => {
  const options = {
    method: 'GET',
    url: 'https://quizapi3.p.rapidapi.com/api/v1/questions',
    params: {
      apiKey: 'IAH1LGgyYhWKA2HizVnK2G2hT3ltrg1WhJxZLf5X',
      category: category,
      difficulty: difficulty,
      limit: noOfQuestions,
      mode:'no-cors'
    },
    headers: {
      'X-RapidAPI-Key': '9092f147c0mshdfc0e555bcd8629p115359jsnac75da5b2776',
      'X-RapidAPI-Host': 'quizapi3.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Call the function
// getQuestionsData()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
