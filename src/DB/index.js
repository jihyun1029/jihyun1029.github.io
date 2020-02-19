import CareerPage from '../pages/Career'
import IntroducePage from '../pages/Introduce'
import TechPage from '../pages/Tech'

export const Sidebar = {
  profile:
    'https://item.kakaocdn.net/do/c620e34ce78db64b44ff1e422a35e2787154249a3890514a43687a85e6b6cc82',
  name: '박지현',
  description: '웹 프론트엔드 프로그래머',
  contents: [
    {
      title: '소개',
      path: '/',
      component: IntroducePage
    },
    {
      title: '경력',
      path: '/career',
      component: CareerPage
    },
    {
      title: '기술',
      path: '/tech',
      component: TechPage
    }
  ]
}

export const Tech = {
  title: '기술',
  contents: [
    {
      title: '타이틀 1',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1' ]
        },
        {
          subTitle: '서브 타이틀 2',
          subContents: [ '서브 컨텐츠 2' ]
        }
      ]
    },
    {
      title: '타이틀 2',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1', '서브 컨텐츠 2' ]
        }
      ]
    }
  ]
}

export const Career = {
  title: '경력',
  contents: [
    {
      title: '회사 1',
      contents: [
        {
          subTitle: '프로젝트 1',
          subContents: [ '뭘 만듬1', '뭘 만듬2' ]
        }
      ]
    }
  ]
}

export const Interest = {
  title: '관심사',
  contents: [
    {
      title: 'React',
      contents: [
        {
          subTitle: '리액트로 만듬 1',
          subContents: [ '뭘 만듬1', '뭘 만듬1' ]
        }
      ]
    }
  ]
}
