// Google Sheets를 CMS로 사용하는 예시
// 실제 Google Sheets API를 사용하거나 CSV export 사용

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

// Google Sheets에서 데이터를 가져오는 함수
export const fetchBlogPostsFromSheets = async (): Promise<BlogPost[]> => {
  try {
    // Google Sheets를 CSV로 export한 URL 사용
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv'
    
    const response = await fetch(SHEET_URL)
    const csvText = await response.text()
    
    // CSV 파싱 로직 (실제로는 papaparse 라이브러리 사용 권장)
    const lines = csvText.split('\n')
    const headers = lines[0].split(',')
    
    const posts: BlogPost[] = []
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',')
      if (values.length === headers.length) {
        posts.push({
          id: values[0],
          title: values[1],
          excerpt: values[2],
          content: values[3],
          category: values[4],
          author: values[5],
          publishedAt: values[6],
          imageUrl: values[7],
          featured: values[8] === 'TRUE',
          slug: values[9]
        })
      }
    }
    
    return posts
  } catch (error) {
    console.error('Failed to fetch from Google Sheets:', error)
    // 실패 시 기본 데이터 반환
    return []
  }
}

// 정적 생성을 위한 빌드 타임 데이터 페칭
export const getStaticBlogPosts = () => {
  // 빌드 시에는 정적 데이터 사용
  // 런타임에는 Google Sheets에서 fetch
  return [
    {
      id: "1",
      title: "AURI COMMUNITY의 첫 번째 이야기",
      excerpt: "하나님의 사랑 안에서 시작된 우리 공동체의 특별한 여정을 소개합니다.",
      content: `AURI COMMUNITY는 하나님의 사랑 안에서 하나 되는 공동체입니다.`,
      category: "리뷰",
      author: "AURI COMMUNITY",
      publishedAt: "2025-01-20T10:00:00Z",
      imageUrl: "/images/blog-1.jpg",
      featured: true,
      slug: "auri-community-first-story"
    }
    // ... 더 많은 데이터
  ]
}
