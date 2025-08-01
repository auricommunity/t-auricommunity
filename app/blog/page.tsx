"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Facebook } from 'lucide-react'
import { BlogPost } from '../api/blog/route'

export default function BlogPage() {
  // ===== 블로그 기능 비활성화 =====
  const BLOG_ENABLED = false // true로 변경하면 블로그 기능 활성화
  
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const categories = ['all', '리뷰', '인터뷰', '이벤트']

  useEffect(() => {
    if (BLOG_ENABLED) {
      fetchPosts()
    }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">로딩 중...</p>
        </div>
      </div>
    )
  }
  }, [])

  const fetchPosts = async () => {
    if (!BLOG_ENABLED) {
      setLoading(false)
      return
    }
    
    try {
      const response = await fetch('/api/blog')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // 블로그 비활성화 상태일 때 표시할 메시지
  if (!BLOG_ENABLED) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-3-3a2 2 0 01-2-2V4a2 2 0 00-2-2H9a2 2 0 00-2 2v1m6 4a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v4z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">BLOG 준비 중</h1>
            <p className="text-gray-400 leading-relaxed mb-6">
              블로그 기능을 준비하고 있습니다.
              <br />조금만 기다려주세요!
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="AURI COMMUNITY 로고"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-medium tracking-wide text-white">AURI COMMUNITY</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">ABOUT</Link>
              <Link href="/connect-worship" className="text-gray-300 hover:text-white transition-colors text-sm">CONNECT WORSHIP</Link>
              <Link href="/camp" className="text-gray-300 hover:text-white transition-colors text-sm">CAMP</Link>
              <Link href="/blog" className="text-white font-medium text-sm">BLOG</Link>
              <Link href="/donation" className="text-gray-300 hover:text-white transition-colors text-sm">후원</Link>
            </div>
            
            {/* 모바일 메뉴 버튼 */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* 모바일 메뉴 */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  href="/connect-worship"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONNECT WORSHIP
                </Link>
                <Link
                  href="/camp"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CAMP
                </Link>
                <Link
                  href="/blog"
                  className="text-white font-medium text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  BLOG
                </Link>
                <Link
                  href="/donation"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  후원
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            BLOG
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            AURI COMMUNITY의 소중한 이야기들을 만나보세요
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`pb-2 text-sm font-light tracking-wide transition-colors duration-300 border-b-2 ${
                  selectedCategory === category
                    ? 'text-white border-white'
                    : 'text-white/50 border-transparent hover:text-white/70'
                }`}
              >
                {category === 'all' ? '전체' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">게시글이 없습니다.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer">
                    {post.imageUrl && (
                      <div className="relative overflow-hidden mb-6">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 text-black px-3 py-1 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        {!post.imageUrl && (
                          <span className="bg-white/90 text-black px-3 py-1 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        )}
                        <p className="text-white/50 text-sm font-light">
                          {formatDate(post.publishedAt)}
                        </p>
                      </div>
                      <h2 className="text-xl font-light text-white group-hover:text-white/80 transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-white/60 font-light text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="pt-2">
                        <span className="text-white/40 text-sm font-light group-hover:text-white/60 transition-colors duration-300">
                          더 읽어보기 →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="AURI COMMUNITY 로고"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-light tracking-wider">
                  AURI COMMUNITY
                </span>
              </div>
              <p className="text-white/60 leading-relaxed font-light text-sm">
                하나님의 사랑으로 하나 되는 공동체
              </p>
            </div>
            <div>
              <h4 className="font-light text-white mb-6 text-sm tracking-wide">MENU</h4>
              <div className="space-y-3">
                <Link href="/about" className="block text-white/60 hover:text-white transition-colors duration-300 text-sm font-light">
                  ABOUT
                </Link>
                <Link href="/connect-worship" className="block text-white/60 hover:text-white transition-colors duration-300 text-sm font-light">
                  CONNECT WORSHIP
                </Link>
                <Link href="/camp" className="block text-white/60 hover:text-white transition-colors duration-300 text-sm font-light">
                  CAMP
                </Link>
                <Link href="/blog" className="block text-white/60 hover:text-white transition-colors duration-300 text-sm font-light">
                  BLOG
                </Link>
                <Link href="/donation" className="block text-white/60 hover:text-white transition-colors duration-300 text-sm font-light">
                  후원
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4 text-sm">CONTACT</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>02-1234-5678</p>
                <p>auricommunity@gmail.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-light text-white mb-6 text-sm tracking-wide">SOCIAL</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/auri_community/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@AURICOMMUNITY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.facebook.com/p/%EC%95%84%EC%9A%B0%EB%A6%AC%EA%B3%B5%EB%8F%99%EC%B2%B4-100077341464707/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2025 AURI COMMUNITY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
