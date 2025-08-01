"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Facebook, X } from 'lucide-react'

export default function CampPage() {
  // ===== 블로그 기능 비활성화 =====
  const BLOG_ENABLED = false // true로 변경하면 블로그 기능 활성화
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [showInquiryModal, setShowInquiryModal] = useState(false)

  // 신청 기간 설정 (AURI 캠프 기준)
  const isApplicationPeriod = false // true로 변경하면 신청 가능
  const applicationFormUrl = "https://forms.gle/YOUR_FORM_ID" // 실제 신청폼 링크
  
  // ===== 캠프 카드 설정 =====
  // 상태별 색상 설정 (쉽게 수정 가능)
  const STATUS_COLORS = {
    '정기캠프': {
      bg: 'bg-green-500/30',
      text: 'text-green-200'
    },
    '지난캠프': {
      // 배경 색상 옵션들:
      // bg-red-500/30 (빨간색), bg-orange-500/30 (주황색), bg-yellow-500/30 (노란색)
      // bg-green-500/30 (초록색), bg-blue-500/30 (파란색), bg-purple-500/30 (보라색)
      // bg-pink-500/30 (핑크색), bg-gray-500/30 (회색), bg-slate-500/30 (슬레이트)
      bg: 'bg-yellow-500/30',
      
      // 텍스트 색상 옵션들:
      // text-red-200 (빨간색), text-orange-200 (주황색), text-yellow-200 (노란색)
      // text-green-200 (초록색), text-blue-200 (파란색), text-purple-200 (보라색)
      // text-pink-200 (핑크색), text-gray-200 (회색), text-slate-200 (슬레이트)
      text: 'text-yellow-200'
    }
  }
  
  // 히어로 섹션 미디어 설정
  const heroMedia = {
    type: "video", // "image" 또는 "video"
    image: "/placeholder.svg?height=1080&width=1920", // 이미지일 때 또는 비디오 썸네일
    video: "/videos/campmain.mp4", // 로컬 비디오 파일 또는 YouTube URL
    alt: "캠프 히어로 영상"
  }

  const camps = [
    {
      id: 1,
      title: "AURI 캠프",
      subtitle: "하나님의 사랑 안에서 하나 되는 다음세대",
      period: "매년 여름/겨울",
      location: "미정",
      participants: "중학생~고등학생",
      price: "문의",
      status: "정기캠프",
      slug: "auri",
      description: "AURI 공동체의 대표 정기 캠프로, 다음세대를 위한 특별한 영적 성장의 시간입니다.",
      features: ["말씀 집회", "찬양 워십", "공동체 활동", "개인 기도 시간"],
      image: "/images/auricamp main.jpg?height=300&width=400"
    },
    {
      id: 2,
      title: "AND 캠프",
      subtitle: "And 함께하는 은혜의 시간",
      period: "과거 진행 (현재 중단)",
      location: "가평 힐링캠프",
      participants: "중학생~고등학생",
      price: "-",
      status: "지난캠프",
      slug: "and",
      description: "2024년, AURI는 10년의 걸음을 돌아보며, 단 한 번의 특별한 캠프, AND를 열었습니다.",
      features: ["말씀 나눔", "공동체 교제", "자연 체험", "문화 활동"],
      image: "/images/andcamp main.jpg?height=300&width=400"
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png" // 로고 이미지 경로
                  alt="AURI COMMUNITY 로고"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-light tracking-wider">
                AURI COMMUNITY
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link
                href="/about"
                className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
              >
                ABOUT
              </Link>
              <Link
                href="/connect-worship"
                className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
              >
                CONNECT WORSHIP
              </Link>
              <Link
                href="/camp"
                className="text-white hover:text-white/80 transition-all duration-300 text-sm font-light tracking-wide"
              >
                CAMP
              </Link>
              {/* BLOG - 비활성화됨 */}
              {BLOG_ENABLED ? (
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
                >
                  BLOG
                </Link>
              ) : (
                <span className="text-white/30 text-sm font-light tracking-wide cursor-not-allowed">
                  BLOG (준비 중)
                </span>
              )}
              <Link
                href="/donation"
                className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
              >
                후원
              </Link>
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
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  href="/connect-worship"
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONNECT WORSHIP
                </Link>
                <Link
                  href="/camp"
                  className="text-white hover:text-white/80 transition-all duration-300 text-sm font-light tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CAMP
                </Link>
                {/* BLOG - 비활성화됨 */}
                {BLOG_ENABLED ? (
                  <Link
                    href="/blog"
                    className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BLOG
                  </Link>
                ) : (
                  <span className="text-white/30 text-sm font-light tracking-wide cursor-not-allowed">
                    BLOG (준비 중)
                  </span>
                )}
                <Link
                  href="/donation"
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light tracking-wide"
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
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {heroMedia.type === 'video' && heroMedia.video ? (
            /* 비디오 배경 */
            <div className="relative w-full h-full">
              {heroMedia.video.includes('youtube.com') || heroMedia.video.includes('youtu.be') ? (
                /* YouTube 비디오 */
                <iframe
                  src={heroMedia.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    pointerEvents: 'none',
                    border: 'none'
                  }}
                />
              ) : (
                /* 로컬 비디오 파일 */
                <>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ pointerEvents: 'none' }}

                  >
                    <source src={heroMedia.video} type="video/mp4" />
                    비디오를 로드할 수 없습니다.
                  </video>
                  {/* 폴백 이미지 */}
                  <img 
                    src={heroMedia.image} 
                    alt={heroMedia.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ display: 'none' }}
                  />
                </>
              )}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ) : (
            /* 이미지 배경 */
            <>
              <Image
                src={heroMedia.image}
                alt={heroMedia.alt}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </>
          )}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-wider mb-12">
            CAMP
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-light mb-12">
            하나님과 함께하는 특별한 시간, 믿음의 친구들과 함께 성장하는 캠프
          </p>
        </div>
      </section>

      {/* Camp Introduction */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin tracking-wide text-white mb-8">
              하나님과 함께하는 특별한 시간
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              아름다운 자연 속에서 하나님의 사랑을 깊이 경험하고, 
              믿음의 친구들과 함께 성장하며 소중한 추억을 만들어가는 캠프입니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {camps.map((camp, index) => (
              <div 
                key={camp.id} 
                className="bg-zinc-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={camp.image}
                    alt={camp.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      STATUS_COLORS[camp.status as keyof typeof STATUS_COLORS]?.bg || 'bg-blue-500/30'
                    } ${
                      STATUS_COLORS[camp.status as keyof typeof STATUS_COLORS]?.text || 'text-blue-200'
                    }`}>
                      {camp.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-2">{camp.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{camp.subtitle}</p>
                  
                  <div className="space-y-2 text-sm text-white/70 mb-6">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h.5A2.5 2.5 0 0119 9.5v6A2.5 2.5 0 0116.5 18H7.5A2.5 2.5 0 015 15.5v-6A2.5 2.5 0 017.5 7H8z" />
                      </svg>
                      <span>{camp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{camp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>{camp.participants}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {camp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {camp.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white font-light">{camp.price}</span>
                    <Link 
                      href={`/camp/${camp.slug}`}
                      className="px-4 py-2 bg-white/20 text-white rounded-lg text-sm font-light hover:bg-white/30 transition-colors"
                    >
                      더보기
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Benefits */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-thin text-white mb-8">캠프를 통해 얻는 것들</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-light text-white mb-2">말씀 배움</h4>
              <p className="text-white/60 text-sm">성경을 통해 하나님의 마음을 알아가요</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-light text-white mb-2">진정한 친구</h4>
              <p className="text-white/60 text-sm">믿음 안에서 평생 친구를 만나요</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-light text-white mb-2">영적 성장</h4>
              <p className="text-white/60 text-sm">하나님의 사랑 안에서 성장해요</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-light text-white mb-2">소중한 추억</h4>
              <p className="text-white/60 text-sm">평생 기억에 남을 추억을 만들어요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-thin text-white mb-6">함께 캠프에 참여하세요</h3>
          <p className="text-white/70 mb-8 leading-relaxed">
            하나님의 사랑 안에서 성장하고 소중한 추억을 만들어가는 특별한 시간에 초대합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowApplicationModal(true)}
              className="bg-white text-black px-8 py-3 font-light hover:bg-gray-100 transition-colors"
            >
              캠프 신청
            </button>
            <button 
              onClick={() => setShowInquiryModal(true)}
              className="border border-white/30 text-white px-8 py-3 font-light hover:border-white/50 transition-colors"
            >
              캠프 문의
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 border border-gray-700">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-bold text-white">캠프 신청</h3>
              
              {isApplicationPeriod ? (
                <div className="space-y-4">
                  <div className="bg-green-900/30 border border-green-600 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-medium">신청 가능</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      현재 AURI 캠프 신청을 받고 있습니다!
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        window.open(applicationFormUrl, '_blank')
                        setShowApplicationModal(false)
                      }}
                      className="flex-1 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      신청폼 작성하기
                    </button>
                    <button
                      onClick={() => setShowApplicationModal(false)}
                      className="flex-1 px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      닫기
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-orange-900/30 border border-orange-600 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-orange-400 font-medium">신청 기간 아님</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      지금은 신청기간이 아닙니다.
                      <br />다음 신청 기간을 기다려주세요.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-400 text-sm">
                      신청 시작 알림을 받고 싶으시다면 SNS를 팔로우해주세요!
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://www.instagram.com/auri_community/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Instagram className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href="https://www.youtube.com/@AURICOMMUNITY" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Youtube className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowApplicationModal(false)}
                    className="w-full px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    확인
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 border border-gray-700">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">캠프 문의</h3>
                <button
                  onClick={() => setShowInquiryModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 font-medium">문의 가능</span>
                </div>
                <p className="text-gray-300 text-sm">
                  캠프에 대해 궁금한 점이 있으시면
                  <br />언제든지 문의해주세요!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:010-4820-9155"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">전화문의</span>
                  </a>
                  <a
                    href="mailto:auricommunity@gmail.com"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">이메일</span>
                  </a>
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-400 text-sm font-medium">SNS 메신저로 문의</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="https://www.instagram.com/auri_community/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="https://www.facebook.com/p/%EC%95%84%EC%9A%B0%EB%A6%AC%EA%B3%B5%EB%8F%99%EC%B2%B4-100077341464707/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  <p className="text-gray-500 text-xs">
                    DM으로 문의하시면 빠른 답변을 받으실 수 있습니다
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 text-left">
                  <h4 className="text-white font-medium mb-2 text-sm">📞 전화 문의 시간</h4>
                  <div className="space-y-1 text-gray-300 text-xs">
                    <p>평일: 오전 10시 ~ 오후 6시</p>
                    <p>주말: 오후 2시 ~ 오후 5시</p>
                    <p className="text-orange-400 mt-1">* 공휴일 휴무</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <Link href="/camp" className="block text-white hover:text-white/60 transition-colors duration-300 text-sm font-light">
                  CAMP
                </Link>
                {/* BLOG - 비활성화됨 */}
                {BLOG_ENABLED ? (
                  <Link href="/blog" className="block text-white/60 hover:text-white transition-colors duration-300 text-sm font-light">
                    BLOG
                  </Link>
                ) : (
                  <span className="block text-white/30 text-sm font-light cursor-not-allowed">
                    BLOG (준비 중)
                  </span>
                )}
                <Link href="/donation" className="block text-white/60 hover:text-white transition-colors duration-300 text-sm font-light">
                  후원
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-light text-white mb-6 text-sm tracking-wide">CONTACT</h4>
              <div className="space-y-2 text-white/60 text-sm font-light">
                <p>서울시 강남구 테헤란로 123</p>
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
            <p className="text-white/40 text-sm font-light">&copy; 2025 AURI & AURI COMMUNITY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
