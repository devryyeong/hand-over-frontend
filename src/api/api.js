import axios from 'axios';

const baseURL = 'http://15.164.244.154/api';
export const userName = "user1";

//전체 데이터 API
export const getMatches = (userToken) => {
	return axios.get(`${baseURL}/matches`, {
		headers: {
			'Authorization': `Bearer ${userToken}`
		}
	});
};

//매칭글 작성 API
export const postMatches = (userToken, postInfo) => {
  return axios.post(`${baseURL}/matches`, postInfo, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
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


//댓글달기
export const postComment = async (matchingId, text, userToken) => {
	const newComment = {
		matchId: matchingId,
		content: text,
	};

	try {
		const response = await axios.post(
			`${baseURL}/match/comments`,
			newComment,
			{
				headers: {
					'Authorization': `Bearer ${userToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

//댓글 목록
export const getCommentsByMatchId = async (matchId, page, userToken) => {
	try {
		const response = await axios.get(`${baseURL}/match/comments`, {
			params: {
				matchId,
				page,
			},
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error("댓글 목록 불러오기 실패:", error);
		throw error;
	}
};

//댓글 삭제
export const deleteCommentById = async (commentId, userToken) => {
	try {
		const response = await fetch(`${baseURL}/match/comments/${commentId}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});

		if (response.ok) {
			// console.log("댓글 삭제 성공");
		} else {
			console.error("댓글 삭제 실패");
		}
	} catch (error) {
		console.error("댓글 삭제 실패:", error);
	}
};

//댓글 수정
export const updateCommentById = async (commentId, content, userToken) => {
	const url = `${baseURL}/match/comments/${commentId}`;
	const body = { content };

	try {
		const response = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${userToken}`,
			},
			body: JSON.stringify(body),
		});

		if (response.ok) {
			console.log('댓글이 수정되었습니다.');
		} else {
			console.error('댓글 수정 실패');
		}
	} catch (error) {
		console.error('댓글 수정 요청 실패:', error);
	}
};

//내가 쓴 매칭글 API
export const getMyMatchingsPosts = async (page, userToken) => {
	try {
		const response = await axios.get(`${baseURL}/matches/posts`, {
			params: {
				page: page
			},
			headers: {
				Authorization: `Bearer ${userToken}`
			}
		});
		return response.data;
	} catch (error) {
		throw new Error('매칭글 조회 실패');
	}
};


//매칭상태 변경
export const toggleMatchStatus = async (id, userToken) => {
	try {
		const response = await axios.patch(
			`${baseURL}/matches/${id}/edit/matchStatus`,
			{},
			{
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			}
		);
		const updatedStatus = response.data.matchStatus;
		return updatedStatus;
	} catch (error) {
		console.error('매칭글 상태 변경 실패:', error);
		throw error;
	}
};

//프로필 수정하기
export const updateProfile = async (nickname, password, userToken) => {
	try {
		const requestBody = {
			nickname: nickname,
			password: password
		};

		const headers = {
			Authorization: `Bearer ${userToken}`
		};

		const response = await axios.patch(`${baseURL}/members`, requestBody, { headers });

		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
		throw new Error("프로필 업데이트에 실패했습니다.");
	}
};

//신고하기
export const reportId = async (reportedMatchId, content, userToken, onClose) => {
	if (content.trim() === '') return;

	try {
		const requestBody = {
			reportedMatchId: reportedMatchId,
			content: content
		};

		const headers = {
			Authorization: `Bearer ${userToken}`
		};

		const response = await axios.post(`${baseURL}/reports/matches`, requestBody, { headers });

		console.log(response.data);
		onClose();
	} catch (error) {
		console.error(error);
	}
};

//탈퇴하기
export const outProfile = async (userToken, onClose) => {
  try {
    const headers = {
      Authorization: `Bearer ${userToken}`
    };

    const response = await axios.delete(`${baseURL}/members`, { headers });

    console.log(response.data);
    onClose();
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("회원 탈퇴실패.");
  }
};

//전체 쪽지
export const getMessages = (userToken) => {
  const params = {
    page: 0
  };

  const headers = {
    Authorization: `Bearer ${userToken}`
  };

  return axios.get(`${baseURL}/messages`, { params, headers })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
};