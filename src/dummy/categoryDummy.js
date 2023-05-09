const categoryDummy = [
  {
    id: 1,
    state: '매칭중',
    category: '노인돌봄',
    title: '할머니 돌보기',
    location: '서울시 강남구',
    date: '2022-05-01',
    content: '할머니가 매우 친절하십니다. 매일 9시부터 5시까지 돌봄이 가능합니다.',
    price: 150000,
    important: "자차가 있으신 분이시면 좋겠어요."
  },
  {
    id: 2,
    state: '매칭중',
    category: '아이돌봄',
    title: '어린이집 보육원 선생님 모집',
    location: '경기도 수원시',
    date: '2022-06-01',
    content: '어린이집 보육원 선생님을 모집합니다. 경력 우대합니다.',
    price: 2000000,
    important: "자차가 있으신 분이시면 좋겠어요."
  },
  {
    id: 3,
    state: '매칭중',
    category: '반려동물',
    title: '강아지 산책 도우미 모집',
    location: '부산시 해운대구',
    date: '2022-05-20',
    content: '강아지 산책 도우미를 구합니다. 산책 시간은 오전 10시부터 오후 3시까지입니다.',
    price: 50000,
    important: "자차가 있으신 분이시면 좋겠어요."
  },
  {
    id: 4,
    state: '매칭중',
    category: '기타',
    title: '청소 도우미 구합니다',
    location: '대전시 서구',
    date: '2022-06-01',
    content: '집 청소 도우미를 구합니다. 성실하고 청결한 분 구합니다.',
    price: 100000,
    important: "자차가 있으신 분이시면 좋겠어요."
  },
  {
    id: 5,
    state: '매칭중',
    category: '노인돌봄',
    title: '할머니 돌보기',
    location: '인천시 연수구',
    date: '2022-07-01',
    content: '할머니를 돌보는 분을 구합니다. 경력이 있으신 분 우대합니다.',
    price: 170000,
    important: "자차가 있으신 분이시면 좋겠어요."
  },
  {
    id: 6,
    state: '매칭중',
    category: '아이돌봄',
    title: '어린이집 보육원 선생님 모집',
    location: '서울시 중구',
    date: '2022-08-01',
    content: '어린이집 보육원 선생님을 모집합니다. 경력 우대합니다.',
    price: 2200000,
    important: "자차가 있으신 분이시면 좋겠어요."
  },
  {
    id: 7,
    state: '매칭중',
    category: "반려동물",
    title: "고양이 산책",
    location: "경기도 의왕시",
    date: "2023-05-21",
    content: "고양이 산책 1시간",
    price: 15000,
    important: "자차가 있으신 분이시면 좋겠어요."
  },
  {
    id: 8,
    state: '매칭중',
    category: "기타",
    title: "강의 녹음",
    location: "서울시 강동구",
    date: "2023-05-22",
    content: "대학교 강의 녹음",
    price: 25000,
  },
      
  ];

  export default categoryDummy;

  export const getWritingById = (id) => {
    return categoryDummy.find((categoryDummy) => categoryDummy.id === parseInt(id));
  }