import axios from 'axios';

const baseURL = 'http://15.164.244.154/api';

//전체 데이터 API
export const getMatches = (userToken) => {
	return axios.get(`${baseURL}/matches`, {
		headers: {
			'Authorization': `Bearer ${userToken}`
		}
	});
};

//즐겨찾기 목록 API 
export const getFavoriteMatches = (userToken) => {
	return axios.get(`${baseURL}/matches/favorites`, {
		headers: {
			'Authorization': `Bearer ${userToken}`,
		},
	});
};

//즐겨찾기 추가, 삭제 API
export const toggleFavoriteMatch = (userToken, matchingId) => {
  return axios.post(
    `${baseURL}/matches/${matchingId}/favorites`,
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
};

//노인돌봄 데이터 API
export const getElderlyMatches = (userToken) => {
	return axios.get(`${baseURL}/matches/category?category=노인돌봄`, {
		headers: {
			'Authorization': `Bearer ${userToken}`
		}
	});
};

//아이돌봄 데이터 API
export const getKidsMatches = (userToken) => {
	return axios.get(`${baseURL}/matches/category?category=아이돌봄`, {
		headers: {
			'Authorization': `Bearer ${userToken}`
		}
	});
};


//반려동물 데이터 API
export const getPetMatches = (userToken) => {
	return axios.get(`${baseURL}/matches/category?category=반려동물`, {
		headers: {
			'Authorization': `Bearer ${userToken}`
		}
	});
};

//기타 데이터 API
export const getEtcMatches = (userToken) => {
	return axios.get(`${baseURL}/matches/category?category=기타`, {
		headers: {
			'Authorization': `Bearer ${userToken}`
		}
	});
};


