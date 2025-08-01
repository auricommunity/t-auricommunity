// BlogPost 타입 정의
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  imageUrl: string
  featured: boolean
  slug: string
}

// 정적 블로그 데이터
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "AURI COMMUNITY의 첫 번째 이야기",
    excerpt: "하나님의 사랑 안에서 시작된 우리 공동체의 특별한 여정을 소개합니다.",
    content: `AURI COMMUNITY는 하나님의 사랑 안에서 하나 되는 공동체입니다.

우리는 청소년들이 진정한 예배자로 자라나기 위해 다양한 프로그램을 제공하고 있습니다.

• 정기 모임과 예배
• 캠프 프로그램  
• Connect Worship 팀 활동
• 다양한 공동체 활동

함께 성장하고 하나님의 사랑을 나누는 이 특별한 여정에 여러분을 초대합니다.`,
    category: "리뷰",
    author: "AURI COMMUNITY",
    publishedAt: "2025-01-20T10:00:00Z",
    imageUrl: "/images/blog-1.jpg",
    featured: true,
    slug: "auri-community-first-story"
  },
  {
    id: "2", 
    title: "청소년 캠프의 의미와 가치",
    excerpt: "다음세대를 위한 캠프가 가져다주는 특별한 경험과 성장의 이야기를 나눕니다.",
    content: `AURI 캠프는 단순한 놀이가 아닌, 예배로 나아가는 소중한 통로입니다.

캠프를 통해 청소년들은:

• 하나님과의 깊은 만남을 경험합니다
• 믿음의 친구들과 소중한 관계를 형성합니다
• 자신의 신앙을 돌아보고 성장합니다
• 공동체의 가치를 배우고 실천합니다

함께 웃고 뛰며 놀이를 통해 마음을 열고, 예배를 통해 하나님께 마음을 드리는 특별한 시간입니다.`,
    category: "인터뷰",
    author: "AURI COMMUNITY",
    publishedAt: "2025-01-18T14:30:00Z",
    imageUrl: "/images/blog-2.jpg",
    featured: true,
    slug: "youth-camp-meaning-and-value"
  },
  {
    id: "3",
    title: "Connect Worship과 함께하는 예배",
    excerpt: "워십과 움직임을 통해 하나님께 드리는 창의적인 예배 경험을 소개합니다.",
    content: `Connect Worship은 단순한 춤이 아닙니다. 하나님께 드리는 진정한 예배이며, 우리의 마음과 몸을 통해 표현하는 살아있는 찬양입니다.

워십을 통해 우리는:

• 하나님의 임재를 온몸으로 경험합니다
• 찬양과 경배의 새로운 차원을 발견합니다
• 공동체와 함께 하나님을 높입니다
• 창의적인 표현을 통해 믿음을 나타냅니다

모든 연령층이 함께 참여할 수 있는 특별한 예배의 시간입니다.`,
    category: "이벤트",
    author: "AURI COMMUNITY",
    publishedAt: "2025-01-15T09:00:00Z",
    imageUrl: "/images/blog-3.jpg",
    featured: true,
    slug: "connect-worship-together"
  }
]

// 헬퍼 함수들
export const getBlogPosts = (options?: { featured?: boolean; limit?: number }) => {
  let filteredPosts = [...blogPosts]
  
  if (options?.featured) {
    filteredPosts = filteredPosts.filter(post => post.featured)
  }
  
  if (options?.limit) {
    filteredPosts = filteredPosts.slice(0, options.limit)
  }
  
  // 최신순으로 정렬
  filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return filteredPosts
}

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug)
}
