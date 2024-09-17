import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PortfolioDetailPage.module.scss";

// 포트폴리오 데이터 예시 (백엔드나 다른 데이터 소스에서 불러오는 경우에도 사용할 수 있음)
const portfolioDetails = {
  starbucks: {
    title: "스타벅스 홈페이지 클론 코딩",
    imageUrl: [
      `${process.env.PUBLIC_URL}/starbucks/login.png`,
      `${process.env.PUBLIC_URL}/starbucks/signup2.png`,
      `${process.env.PUBLIC_URL}/starbucks/notice.png`,
      `${process.env.PUBLIC_URL}/starbucks/noticeDetail.png`,
    ],
    description:
      "스타벅스 홈페이지를 클론하여 웹 디자인, 게시판, 회원 관리 기능을 구현한 프로젝트입니다.",
    overview: {
      name: "스타벅스 홈페이지 클론 코딩",
      period: "2023년 1월 1일 ~ 2023년 6월 13일",
      role: "프론트엔드 개발",
      stack: "Javascript, HTML, CSS, PHP, phpmyadmin",
      team: "개인 프로젝트",
    },
    motivation:
      "이 프로젝트는 프론트엔드와 서버 측 스크립팅 기술을 통합적으로 이해하고, 웹 개발의 전체적인 흐름을 경험하기 위해 시작했습니다. 사용자와 직접 상호작용하는 웹 페이지를 클론하면서, 실제 서비스와 유사한 기능을 구현하고자 했습니다. 특히, PHP와 phpMyAdmin을 사용하여 데이터베이스 관리와 서버 측 기능 구현을 경험하며, 실무에 필요한 기본 기술들을 다져나가기 위해 이 프로젝트를 수행했습니다.",
    contributions: [
      {
        title: "프론트엔드 개발",
        tasks: [
          "HTML, CSS, JavaScript를 사용하여 스타벅스 홈페이지의 UI와 UX를 최대한 유사하게 구현하여, 실제 사이트와 같은 사용자 경험을 제공합니다.",
          "PHP를 활용해 게시판 기능을 구현하여 사용자가 게시글을 작성, 수정, 삭제할 수 있는 기능을 추가했습니다.",
          "회원가입과 로그인 기능을 통해 사용자 관리를 구현하였으며, 세션 관리로 로그인 상태를 유지할 수 있도록 했습니다.",
        ],
        achievements: [
          "프론트엔드와 서버 측 스크립팅 기술을 통합하여 웹 애플리케이션을 완성함으로써, 웹 개발의 전반적인 기술을 익힐 수 있었습니다.",
          "실제 웹 사이트와 유사한 디자인과 기능을 구현하여 실무에 가까운 경험을 쌓았습니다.",
          "PHP와 데이터베이스 관리 도구인 phpMyAdmin을 활용하여 게시판과 회원 관리 기능을 구현하면서, 서버와 클라이언트 간의 데이터 흐름을 이해하게 되었습니다.",
        ],
      },
    ],
    positives: [
      "웹 디자인과 기능을 최대한 유사하게 구현하여 사용성과 완성도를 높였습니다.",
      "프론트엔드와 백엔드를 통합적으로 경험하며, 전체적인 웹 개발 프로세스를 이해할 수 있었습니다.",
    ],
    negatives: [
      "더 다양한 기능을 추가하지 못한 점과 UI/UX의 세부적인 디테일을 완벽하게 구현하지 못한 점이 아쉬웠습니다.",
    ],
    conclusion:
      "이 프로젝트를 통해 프론트엔드와 서버 측 기술을 종합적으로 활용하여 웹 애플리케이션을 개발하는 경험을 쌓을 수 있었습니다. 특히, 서버 측 스크립팅과 데이터베이스 관리의 기초를 다지며, 웹 개발의 기본 원리와 실무 적용 가능성을 높였습니다. 앞으로의 프로젝트에서는 더 많은 기능과 더 나은 사용자 경험을 제공할 수 있는 방향으로 발전시키고자 합니다.",
  },

  pokemon: {
    title: "포켓몬 도감 사이트",
    imageUrl: [
      `${process.env.PUBLIC_URL}/pokemon/pokemon.png`,
      `${process.env.PUBLIC_URL}/pokemon/pokemonInfo.png`,
      `${process.env.PUBLIC_URL}/pokemon/pokemonStatus.png`,
    ],
    description:
      "React와 Styled-components로 도감 구현 및 Firebase로 OAuth 로그인 및 배포를 완료한 개인 프로젝트",
    overview: {
      name: "포켓몬 도감 사이트",
      period: "2023년 11월 13일 ~ 2023년 12월 4일",
      role: "프론트엔드 개발",
      stack: "Javascript, React, Styled-Components, Firebase",
      team: "개인 프로젝트",
    },
    motivation:
      "이 프로젝트는 프론트엔드 개발 기술을 강화하고, 오픈 API를 활용한 데이터 처리 경험을 쌓기 위해 시작했습니다. pokeAPI를 통해 다양한 포켓몬 데이터를 효율적으로 가져와 사용자에게 제공하는 과정을 통해 실무에서 자주 활용되는 데이터 연동 및 상태 관리 기술을 학습하고자 했습니다. 또한, React와 Styled-components를 활용해 직관적이고 사용자 친화적인 UI를 구현하는 동시에, Firebase를 통해 서버리스 환경에서의 인증 및 배포를 경험해 보고자 했습니다.",
    contributions: [
      {
        title: "웹 프론트엔드 개발",
        tasks: [
          "React와 Styled-components를 사용하여 포켓몬 도감의 UI와 UX를 직관적이고 사용자 친화적으로 설계하였습니다.",
          "Firebase Authentication을 이용해 Google OAuth 로그인을 구현하여 사용자의 인증을 간편하게 처리하였습니다.",
          "pokeAPI를 활용하여 포켓몬 데이터를 효과적으로 관리하고, 사용자가 이름, 타입 등 다양한 기준으로 포켓몬을 필터링할 수 있는 기능을 구현하였습니다.",
          "Firebase Hosting을 활용하여 프로젝트를 안정적이고 신속하게 배포하였으며, 사용자가 언제든지 접근할 수 있도록 웹사이트를 공개하였습니다.",
        ],
        achievements: [
          "React의 컴포넌트 기반 구조를 최대한 활용하여 유지보수성과 재사용성을 높였습니다.",
          "Firebase를 통한 인증 및 배포 경험을 쌓아, 서버리스 환경에서의 웹 애플리케이션 운영을 이해하게 되었습니다.",
          "pokeAPI를 통해 다양한 포켓몬 데이터를 시각적으로 정리하고 필터링하여 사용자가 원하는 정보를 쉽게 찾을 수 있는 UX를 제공하였습니다.",
        ],
      },
    ],
    positives: [
      "사용자 친화적인 인터페이스와 직관적인 필터링 기능을 구현하여 도감의 탐색 경험을 향상시켰습니다.",
      "Firebase를 통해 빠르고 간편한 배포 및 인증 처리를 구현하여 프로젝트 운영의 효율성을 높였습니다.",
    ],
    negatives: [
      "pokeAPI 데이터를 처음으로 다루면서 데이터 처리 과정에서 많은 시행착오를 겪었습니다. 특히, API로부터 데이터를 받아오는 방법과 이를 효과적으로 관리하는 데 있어 미숙함이 있었습니다. 이로 인해 다양한 도감 기능을 구현하지 못한 점이 아쉬웠습니다.",
      "API 데이터를 활용하여 추가적인 포켓몬 비교 기능이나 고급 필터링 옵션 등을 제공하지 못해, 사용자 경험을 더욱 풍부하게 만드는 데 한계가 있었습니다.",
    ],
    conclusion:
      "포켓몬 도감 웹사이트 프로젝트는 React와 Styled-components를 이용해 프론트엔드 개발을 집중적으로 경험할 수 있었던 프로젝트입니다. Firebase를 활용하여 인증 및 배포의 간소화를 이루며, 오픈 API를 통해 데이터 연동과 관리의 중요성을 이해하게 되었습니다. 앞으로의 프로젝트에서는 더 많은 기능과 데이터 관리의 효율성을 높이는 방향으로 발전시키고자 합니다.",
  },

  community: {
    title: "아무 말 대잔치",
    imageUrl: [
      `${process.env.PUBLIC_URL}/community/community.png`,
      `${process.env.PUBLIC_URL}/community/userEdit.png`,
      `${process.env.PUBLIC_URL}/community/noticeDetail.png`,
    ],
    description:
      "Express와 MySQL로 게시판 사이트를 구현하여 백엔드와 데이터베이스 연동을 구현한 카카오테크 부트캠프 개인 프로젝트",
    overview: {
      name: "아무 말 대잔치",
      period: "2024년 4월 ~ 2024년 7월",
      role: "프론트엔드 개발",
      stack: "Javascript, React, Express, MySQL",
      team: "개인 프로젝트",
    },
    motivation:
      "이 프로젝트는 프론트엔드 개발 경험을 토대로 백엔드 기술에 대한 이해를 높이기 위해 시작했습니다. 특히, Express와 MySQL을 처음 접해보며 서버와 데이터베이스의 기본적인 작동 원리와 연동 방식을 학습하고자 했습니다. 초기에 API 명세와 서버 구조를 설계하는 과정에서 많은 어려움을 겪었지만, 이를 통해 실제 서비스의 기초가 되는 백엔드 개발을 경험할 수 있었습니다.",
    contributions: [
      {
        title: "웹 프론트엔드 개발",
        tasks: [
          "React를 사용하여 사용자 친화적인 게시판 UI를 구축하고, 게시글 작성, 수정, 삭제 등의 기능을 제공하였습니다.",
          "Express를 활용하여 RESTful API를 설계하고, MySQL과 연동하여 데이터를 효율적으로 관리하였습니다.",
          "사용자 인증 및 인가를 구현하여 회원가입, 로그인, 로그아웃 기능을 통해 사용자 관리를 강화하고, 웹 애플리케이션의 보안성을 높였습니다.",
          "CRUD 기능을 완전히 지원하는 게시판을 구현하여 사용자가 게시글을 자유롭게 작성하고 관리할 수 있도록 하였습니다.",
        ],
        achievements: [
          "Express와 MySQL을 활용한 서버와 데이터베이스 연동을 통해 백엔드 개발에 대한 이해를 높였으며, 데이터 흐름과 서버 구조의 기본을 다질 수 있었습니다.",
          "React를 이용한 컴포넌트 기반의 프론트엔드 개발을 통해 UI/UX 개선과 유지보수성을 향상시켰습니다.",
          "사용자 인증 및 권한 관리 기능을 구현함으로써 웹 애플리케이션의 보안성을 강화하고, 실제 서비스와 유사한 환경을 경험할 수 있었습니다.",
        ],
      },
    ],
    positives: [
      "Express와 MySQL을 활용하여 서버와 데이터베이스를 유기적으로 연결하고, 데이터를 효율적으로 처리하는 경험을 쌓았습니다.",
      "프론트엔드와 백엔드의 데이터 연동을 통해 전체적인 웹 개발 흐름을 이해하고 구현할 수 있었습니다.",
    ],
    negatives: [
      "Express와 같은 백엔드 기술을 처음 접하면서, API 명세 작성과 서버 설계 과정에서 많은 어려움을 겪었습니다.",
      "초기 기획 단계에서 명확한 설계를 하지 못해 개발 속도가 다소 늦어진 점이 아쉬웠습니다.",
    ],
    conclusion:
      "아무 말 대잔치 프로젝트를 통해 Express와 MySQL의 실제 사용 경험을 쌓고, 프론트엔드와 백엔드를 통합적으로 개발하는 데 많은 배움을 얻을 수 있었습니다. 특히, 서버와 데이터베이스의 기본적인 데이터 연동 방식과 사용자 관리의 중요성을 깨달았으며, 향후 프로젝트에서는 기획 단계에서부터 명확한 목표 설정과 기능 확장을 통해 더 나은 웹 서비스를 제공할 수 있도록 노력하고자 합니다.",
  },

  hackerton: {
    title: "AI 기반 대화형 장소 추천 시스템",
    imageUrl: [
      `${process.env.PUBLIC_URL}/hackerton/hackerton.png`,
      `${process.env.PUBLIC_URL}/hackerton/form.png`,
      `${process.env.PUBLIC_URL}/hackerton/formtag.png`,
    ],
    description:
      "카카오테크 부트캠프 해커톤에서 제주 관광객을 위한 AI 기반으로 맞춤형 장소 추천을 제공하는 대화형 시스템",
    overview: {
      name: "AI 기반 대화형 장소 추천 시스템",
      period: "2024년 8월 5일 ~ 2024년 8월 7일",
      role: "프론트엔드 개발",
      stack:
        "Java, TypeScript, React, Zustand, SpringBoot, 비짓제주 관광 공공데이터 API, OpenAI API, 크램폴린 IDE",
      team: "클라우드 1명, BE 2명, FE 2명",
    },
    motivation:
      "이 프로젝트는 해커톤의 일환으로, 프론트엔드와 백엔드 간의 협업을 통해 실질적인 문제 해결 능력을 향상시키고, 공공 데이터를 활용한 서비스 개발 경험을 쌓기 위해 시작했습니다. 특히, 관광객들이 다양한 선택지 속에서 적합한 장소를 찾는 데 어려움을 겪는 문제를 AI 기반의 대화형 시스템으로 해결하고자 했습니다.",
    contributions: [
      {
        title: "프론트엔드 개발",
        tasks: [
          "React와 Zustand를 활용하여 프론트엔드의 아키텍처를 설계하고, 컴포넌트 기반으로 구현하여 유지보수성과 재사용성을 높였습니다.",
          "사용자의 입력을 받아 AI와의 대화를 통해 추가 정보를 수집하고, 최적의 장소를 추천하는 인터페이스를 구현하였습니다.",
          "비짓제주 관광 공공데이터와 OpenAI API를 연동하여, 사용자 맞춤형 장소 추천이 정확하고 효율적으로 이루어지도록 하였습니다.",
          "크램폴린 IDE를 이용해 개발 환경에서 빠르게 배포하고 테스트할 수 있는 프로세스를 구축하였습니다.",
        ],
        achievements: [
          "AI와 공공 데이터를 결합하여 개인 맞춤형 장소 추천 서비스를 구현, 사용자 만족도와 여행 효율성을 높였습니다.",
          "팀원 간의 원활한 협업과 효과적인 프론트엔드-백엔드 연동을 통해 빠른 개발과 안정적인 서비스를 제공할 수 있었습니다.",
          "React와 Zustand의 사용을 통해 프론트엔드의 상태 관리를 최적화하고, 대화형 인터페이스의 성능과 사용자 경험을 개선했습니다.",
        ],
      },
      {
        title: "협업 및 커뮤니케이션",
        tasks: [
          "백엔드 팀과의 협력을 통해 OpenAI API와 비짓제주 관광 공공데이터 API를 연동하고, 프론트엔드에서 사용자의 입력을 받아 AI가 적절하게 응답할 수 있도록 대화형 인터페이스를 구현했습니다.",
          "프론트엔드 팀원들과의 코드 리뷰를 통해 AI와의 상호작용 로직을 최적화하고, 사용자 입력에 따른 다양한 시나리오를 원활하게 처리할 수 있도록 개선했습니다.",
          "팀 내 실시간 개발 상황을 공유하고, AI의 대화 흐름 및 인터페이스 개선 사항을 조정했습니다.",
        ],
        achievements: [
          "프론트엔드에서 사용자의 입력을 효과적으로 처리하고, AI의 응답을 매끄럽게 연결하는 대화형 UI를 구현하여 사용자 경험을 개선했습니다.",
          "백엔드 팀과의 긴밀한 협업을 통해 API 연동 시 발생할 수 있는 문제를 빠르게 해결하고, 대화형 AI 시스템의 성능과 안정성을 높였습니다.",
        ],
      },
    ],
    positives: [
      "사용자 입력을 기반으로 AI가 자연스럽게 대화형 질문을 생성하여 사용자의 참여도를 높였습니다.",
      "공공 데이터를 활용하여 실제 관광객들에게 유용한 정보를 제공하며, 데이터 활용의 긍정적인 사례를 만들었습니다.",
      "React와 Zustand를 활용해 상태 변화를 효과적으로 관리하고, 사용자 입력과 AI 응답 간의 연속성을 유지하며 성능을 최적화했습니다.",
    ],
    negatives: [
      "짧은 개발 기간으로 인해 추가적인 기능 구현과 UI/UX의 세부적인 디테일을 완성하지 못한 점이 아쉬웠습니다.",
      "AI 학습 데이터와 프롬프트의 제한으로 인해 일부 추천 결과의 정확도가 낮거나 예상과 다르게 나타난 점이 있었습니다.",
    ],
    conclusion:
      "AI 기반 대화형 장소 추천 시스템은 사용자 입력을 바탕으로 한 맞춤형 추천의 가능성을 보여주었으며, 공공 데이터와 AI 기술의 통합을 통해 실질적인 여행 계획에 도움을 주는 혁신적인 솔루션을 제공했습니다. 향후에는 더 많은 데이터와 사용자 피드백을 반영하여 추천의 정확성을 높이고, 사용자 경험을 더욱 개선할 계획입니다.",
  },

  sumda: {
    title: "숨쉬는 다람쥐 숨다",
    imageUrl: [
      `${process.env.PUBLIC_URL}/sumda/weather.png`,
      `${process.env.PUBLIC_URL}/sumda/aqi.png`,
      `${process.env.PUBLIC_URL}/sumda/squirrel.png`,
      `${process.env.PUBLIC_URL}/sumda/dailyMission.png`,
    ],
    description:
      "공공 데이터 API를 활용해 실시간 날씨와 대기질 정보 제공 및 다람쥐 육성 게이미피케이션 기능을 포함한 웹 서비스",
    overview: {
      name: "숨쉬는 다람쥐 숨다",
      period: "2024년 7월 22일 ~ 2024년 9월 13일",
      role: "프론트엔드 개발",
      stack: "TypeScript, React, CSS, Zustand",
      team: "FE 2명, BE 3명",
    },
    motivation:
      "현대 소프트웨어 개발 환경에서 협업과 기여도를 명확히 파악하는 것은 매우 중요한 과제입니다. ...",
    contributions: [
      {
        title: "웹 프론트엔드 개발",
        tasks: [
          "공공 데이터 API를 활용하여 사용자가 현재 위치에 따른 날씨와 대기질 정보를 실시간으로 조회할 수 있는 기능을 구현했습니다.",
          "Zustand를 활용하여 앱의 전역 상태를 효율적으로 관리하고, 데이터 일관성을 유지하여 사용자 경험을 최적화했습니다.",
          "Kakao OAuth를 사용하여 간편한 로그인 기능을 구현하고, 사용자 인증을 통해 개인화된 데이터를 제공했습니다.",
          "사용자가 Kakao OAuth로 로그인하면 JWT 토큰을 발급받고, 이를 통해 다양한 종류의 다람쥐 정보를 불러와 육성할 수 있는 시스템을 구현했습니다. 사용자는 일일 미션을 통해 도토리를 획득하고, 이를 바탕으로 다양한 다람쥐를 육성할 수 있습니다.",
        ],
        achievements: [
          "React와 Zustand를 통해 컴포넌트 기반의 상태 관리와 UI 설계를 최적화하여 사용자 경험을 향상시켰습니다.",
          "Kakao OAuth를 통한 사용자 인증과 JWT 기반의 데이터 관리로 보안성과 개인화된 서비스를 제공했습니다.",
          "게임 요소를 추가하여 사용자 참여도를 높이고, 날씨/대기질 정보를 재미있게 접근할 수 있도록 했습니다.",
        ],
      },
      {
        title: "협업 및 커뮤니케이션",
        tasks: [
          "백엔드 팀과의 원활한 API 연동 및 데이터 통신을 담당하여, 날씨와 대기질 정보뿐만 아니라 게이미피케이션 요소와 관련된 데이터를 정확하게 전달받을 수 있도록 협업을 진행했습니다.",
          "프론트엔드 팀원과의 코드 리뷰를 통해 지속적으로 UI/UX를 개선하고, 기능의 안정성을 높였습니다.",
          "주기적인 팀 미팅을 통해 프로젝트 진행 상황을 공유하고, 개발 일정을 효율적으로 관리했습니다.",
        ],
        achievements: [
          "백엔드 팀과의 긴밀한 협력을 통해 API 연동 문제를 최소화하고, 신속한 데이터 처리로 서비스의 안정성을 확보했습니다.",
          "코드 리뷰와 팀 내 피드백을 통해 코드 품질을 지속적으로 향상시켰으며, 기능 개발의 효율성을 높였습니다.",
        ],
      },
    ],
    positives: [
      "사용자 인증과 게이미피케이션 기능을 성공적으로 통합하여, 실시간 데이터 제공 서비스에 재미 요소를 더했습니다.",
      "API 연동 및 데이터 통신에서 발생할 수 있는 오류를 최소화하여 안정적인 서비스 운영을 가능하게 했습니다.",
    ],
    negatives: [
      "짧은 개발 기간으로 인해 추가적인 기능 구현에 한계가 있었으며, 일부 UI/UX 디테일을 더 다듬지 못한 점이 아쉬웠습니다.",
      "게이미피케이션 기능의 확장성과 다양성을 더욱 높일 수 있었던 부분이 부족했습니다.",
    ],
    conclusion:
      "숨쉬는 다람쥐 숨다 프로젝트는 실시간 데이터 제공과 사용자 참여를 유도하는 게임 요소를 결합한 웹 서비스로, 공공 데이터와 AI 기술을 활용한 혁신적인 접근을 시도했습니다. 향후에는 사용자 피드백을 반영하여 기능의 확장성과 서비스의 안정성을 더욱 강화하고, 다양한 다람쥐 캐릭터와 미션을 추가하여 사용자 경험을 풍부하게 만들 계획입니다.",
  },
  // 다른 포트폴리오 아이템 추가 가능
};

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const detail = portfolioDetails[id];

  if (!detail) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.portfolioDetail}>
      <h1 className={styles.title}>{detail.title}</h1>
      <div className={styles.imageGrid}>
        {detail.imageUrl.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${detail.title} 이미지 ${index + 1}`}
            className={styles.detailImage}
          />
        ))}
      </div>
      <p>{detail.description}</p>

      <section className={styles.projectOverview}>
        <h2>프로젝트 개요</h2>
        <p>
          <strong>프로젝트 이름:</strong> {detail.overview.name}
        </p>
        <p>
          <strong>프로젝트 기간:</strong> {detail.overview.period}
        </p>
        <p>
          <strong>담당 역할:</strong> {detail.overview.role}
        </p>
        <p>
          <strong>사용 스택:</strong> {detail.overview.stack}
        </p>
        <p>
          <strong>팀 구성:</strong> {detail.overview.team}
        </p>
      </section>

      <section className={styles.projectMotivation}>
        <h2>프로젝트를 시작하게 된 계기</h2>
        <p>{detail.motivation}</p>
      </section>

      <section className={styles.projectContributions}>
        <h2>주요 기여 및 성과</h2>
        {detail.contributions.map((contribution, index) => (
          <div key={index}>
            <h3>{contribution.title}</h3>
            <p>
              <strong>주요 업무:</strong>
            </p>
            <ul>
              {contribution.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
            <p>
              <strong>성과:</strong>
            </p>
            <ul>
              {contribution.achievements.map(
                (achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.projectEvaluation}>
        <h2>잘한 점</h2>
        <ul>
          {detail.positives.map((positive, index) => (
            <li key={index}>{positive}</li>
          ))}
        </ul>

        <h2>아쉬운 점</h2>
        <ul>
          {detail.negatives.map((negative, index) => (
            <li key={index}>{negative}</li>
          ))}
        </ul>
      </section>

      <section className={styles.projectConclusion}>
        <h2>결론</h2>
        <p>{detail.conclusion}</p>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;
