import axios from 'axios';

const baseURL = 'http://15.164.244.154/api';
export const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsnYDsp4AiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjg1NDAwNzY4fQ.bRdAz89fTe76WgH82wqd4xV4EfF6dp0OckW-JbLgH4-mi34ptPqju87pMfp100_xnbkSBZEfiN9y0CVPKNwY5Q";

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


//검색 API
export const handleSearch = async (searchTerm, userToken) => {
  try {
    const response = await axios.get(`${baseURL}/matches/search?keyword=${searchTerm}&page=0`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//단건 매칭글 조회
export const getMatchById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/matches/${id}`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};