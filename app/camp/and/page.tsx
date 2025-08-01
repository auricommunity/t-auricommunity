"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Users, Clock, ArrowLeft, Instagram, Youtube, Facebook } from 'lucide-react'

export default function AndCampPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const BLOG_ENABLED = false // 블로그 기능 활성화 여부
  // 모집 상태 설정 - AND 캠프는 운영 중단
  const recruitmentStatus = {
    type: 'closed', // 'recruiting' | 'closed' | 'full' | 'upcoming'
    text: '운영 종료',
    color: 'red' // 'green' | 'red' | 'orange' | 'blue'
  }

  // 상태별 스타일 설정
  const getStatusStyle = () => {
    switch (recruitmentStatus.color) {
      case 'green':
        return 'bg-green-900 border-green-600 text-green-400'
      case 'red':
        return 'bg-red-900 border-red-600 text-red-400'
      case 'orange':
        return 'bg-orange-900 border-orange-600 text-orange-400'
      case 'blue':
        return 'bg-blue-900 border-blue-600 text-blue-400'
      default:
        return 'bg-green-900 border-green-600 text-green-400'
    }
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
              <Link href="/camp" className="text-white font-medium text-sm">CAMP</Link>
              {/* BLOG - 비활성화됨 */}
              {BLOG_ENABLED ? (
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">BLOG</Link>
              ) : (
                <span className="text-gray-500 text-sm cursor-not-allowed">BLOG (준비 중)</span>
              )}
              <Link href="/donation" className="text-gray-300 hover:text-white transition-colors text-sm">후원</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-24 pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/camp" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            캠프 목록으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              AND 캠프
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              지난 10년과 미래를 잇는, AURI의 특별한 AND 캠프
            </p>
            
            {/* Camp Date & Status */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <div className="bg-gray-900 rounded-lg px-6 py-3 border border-gray-800">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">과거 진행 (현재 중단)</span>
                </div>
              </div>
              <div className={`rounded-lg px-6 py-3 border ${getStatusStyle()}`}>
                <div className="flex items-center space-x-2">
                  {recruitmentStatus.type === 'recruiting' && (
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                  {recruitmentStatus.type === 'closed' && (
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  )}
                  {recruitmentStatus.type === 'full' && (
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  )}
                  {recruitmentStatus.type === 'upcoming' && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                  <span className="font-medium">{recruitmentStatus.text}</span>
                </div>
              </div>
            </div>
            
            {/* Basic Info Cards */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">기간</div>
                <div className="text-white font-medium">2박 3일</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">장소</div>
                <div className="text-white font-medium">가평 힐링캠프</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">대상</div>
                <div className="text-white font-medium">중1 ~ 고3</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">상태</div>
                <div className="text-white font-medium">운영 중단</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-gray-800 sticky top-20 z-40 bg-black/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: '소개' },
              { id: 'program', label: '프로그램' },
              { id: 'instructors', label: '강사소개' },
              { id: 'schedule', label: '일정' },
              { id: 'location', label: '장소' },
              { id: 'poster', label: '포스터' },
              { id: 'info', label: '캠프안내' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-2/3 space-y-6">
                  <h2 className="text-2xl font-bold text-white">이어지는 이야기, 멈추지 않는 발걸음</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      2024년, AURI는 10년의 걸음을 돌아보며
                      <br/>단 한 번의 특별한 캠프, AND를 열었습니다.
                      <br/>
                      <br/>AND.
                      <br/>시간과 시간을 잇고,
                      <br/>세대와 세대를 연결하며,
                      <br/>놀이와 예배, 마음과 마음을 하나로 묶는 말.
                      <br/>그 한 단어 안에 AURI의 어제와 내일이 담겨 있습니다.
                      <br/>우리는 지금, 그 다음을 향해 걷기 시작했습니다.
                      <br/>
                      <br/>AND 캠프는 끝이 아닌 시작입니다.
                      <br/>AURI는 앞으로도,
                      <br/>다음세대의 마음을 열고
                      <br/>예배로 채우는 여정을 계속해 나가겠습니다.
                    </p>
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <Image
                    src="/images/andcampimage.jpg"
                    alt="AND 캠프"
                    width={900}
                    height={700}
                    className="w-full h-[470px] rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg?height=350&width=500&text=AURI+캠프';
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Program Tab */}
          {activeTab === 'program' && (
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-white">프로그램 특징</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <Image
                    src="/images/andcampprogram-1.png"
                    alt="andcamp 말씀 프로그램"
                    width={300}
                    height={200}
                    className="w-full rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg?height=200&width=300&text=말씀+프로그램';
                    }}
                  />
                  <h3 className="text-lg font-semibold text-white">말씀 중심 프로그램</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    놀이와 결합한 말씀 중심 프로그램으로 하나님께 가까이 나아갑니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <Image
                    src="/images/andcampprogram-2.png"
                    alt="andcamp 찬양과 워십"
                    width={300}
                    height={200}
                    className="w-full rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg?height=200&width=300&text=찬양+워십';
                    }}
                  />
                  <h3 className="text-lg font-semibold text-white">찬양과 워십</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Connect Worship팀과 함께 하나님께 마음껏 찬양을 올려드립니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <Image
                    src="/images/andcampprogram-3.jpg"
                    alt="andcamp 공동체 활동"
                    width={300}
                    height={200}
                    className="w-full rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg?height=200&width=300&text=공동체+활동';
                    }}
                  />
                  <h3 className="text-lg font-semibold text-white">공동체 활동</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    소그룹 나눔과 야외 활동을 통해 건강한 공동체의 
                    가치를 배우고 실천합니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white text-center">상세 일정</h2>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/images/andcampschedule.jpg"
                  alt="AND 캠프 상세 일정표"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg?height=600&width=800&text=상세+일정표';
                  }}
                />
              </div>
            </div>
          )}

          {/* Instructors Tab */}
          {activeTab === 'instructors' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white text-center">강사 소개</h2>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/images/andcamp people.jpg"
                  alt="AND 캠프 강사진 소개"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg?height=600&width=800&text=강사진+소개';
                  }}
                />
              </div>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === 'location' && (
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-white">캠프 장소</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">가평 힐링캠프</h3>
                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-start space-x-2">
                        <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>경기 가평군 상면 임초밤안골로 153-42</span>
                      </p>
                      <p>🚗 서울에서 차로 2시간 30분 거리</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">시설 안내</h4>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div>
                        <span className="text-green-400 font-medium">숙박시설:</span>
                        <span className="ml-2">4인실 기준 10개 방 (에어컨, 난방, 전용 화장실)</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">식당:</span>
                        <span className="ml-2">150석 규모 대형 식당</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">강당:</span>
                        <span className="ml-2">200석 규모 메인 강당</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">기타:</span>
                        <span className="ml-2">의무실, 매점, WiFi 완비</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Google Map */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1083.5502041805196!2d127.37184222003778!3d37.75378013648946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35632de559b1eee3%3A0xc2d739d9a3a25a8a!2z6rCA7Y-J7Z6Q66eB7Lqg7ZSE!5e0!3m2!1sko!2skr!4v1753938072128!5m2!1sko!2skr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AURI 수련원 위치"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-medium mb-2">위치 안내</h4>
                      <p className="text-gray-400 text-sm">강원도 평창군 대관령면 수련원길 123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Poster Tab */}
          {activeTab === 'poster' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white text-center">캠프 포스터</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <Image
                    src="/images/andcampposter.jpg"
                    alt="AND 캠프 공식 포스터"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg?height=800&width=600&text=AURI+캠프+포스터';
                    }}
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>포스터 다운로드</span>
                  </button>
                  <p className="text-gray-400 text-sm mt-2">현재 포스터는 다운로드를 지원하지 않습니다.</p>
                </div>
              </div>
            </div>
          )}

          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-white">참가 안내</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-4">캠프 기본 정보</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-800">
                      <span className="text-gray-400">개최 일정</span>
                      <span className="text-white">2024년 7월 31일 ~ 8월 2일</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-800">
                      <span className="text-gray-400">캠프 기간</span>
                      <span className="text-white">2박 3일</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-800">
                      <span className="text-gray-400">참가 대상</span>
                      <span className="text-white">중학교 1학년 ~ 고등학교 3학년</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-800">
                      <span className="text-gray-400">모집 정원</span>
                      <span className="text-white">모집중단</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">참가비</span>
                      <span className="text-white font-semibold">모집중단</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-4">자주 묻는 질문</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Q. 캠프 참가 조건이 있나요?</h4>
                      <p className="text-gray-400 text-sm leading-relaxed pl-4">
                        A. 중학교 1학년부터 고등학교 3학년까지 참가 가능합니다. 신앙 유무는 상관없으며, 캠프에 대한 열린 마음과 적극적인 참여 의지만 있으면 됩니다.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Q. 준비물은 무엇인가요?</h4>
                      <p className="text-gray-400 text-sm leading-relaxed pl-4">
                        A. 개인 세면도구, 2박 3일분 의류, 성경, 필기도구, 개인 상비약, 운동화를 준비해 주세요.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Q. 캠프비는 무엇이 포함되나요?</h4>
                      <p className="text-gray-400 text-sm leading-relaxed pl-4">
                        A. 2박 3일 숙박비, 6회 식사비, 모든 프로그램 비용 등이 포함됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

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
