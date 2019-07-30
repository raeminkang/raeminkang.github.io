---
title: "Feature Engineering"
last_modified_at: 2019-07-27 T20:35:00-05:00
categories:
  - Machine Learning
tags:
  - Machine Learning
  - Kaggle Study
author: homerSimpson
toc: true
toc_label: "목차"
video_link: "https://raeminkang.github.io/assets/video/BigBunny/samplevideo.mp4"
---
Feature Engineering

(  [http://hero4earth.com/blog/learning/2018/01/29/Feature_Engineering_Basic/](http://hero4earth.com/blog/learning/2018/01/29/Feature_Engineering_Basic/) )

## 정의
- 데이터에 대한 도메인 지식을 활용하여 특징을 만들어 내는 과정
- 모델을 위한 데이터 테이블의 컬럼을 생성 / 선택 하는 작업
- ex_ Hands-On Chapter 2 에서 했던 rooms_per_housing 컬럼 생성 하는 작업

## 방식
- 특징 선택 ( Feature Selection )
- 차원 감소 ( Dimension Reduction )
- 도메인 전문성 측면에서의 특징 생성 ( Feature Generation ) / 특징 구축 ( Feature Construction )

## 1. 특징 선택
- Feature Ranking / Feature Importance라고도 불림
- Decision Tree 같은 경우엔 상단에 있을 수록 특징 중요도 높음
- 회귀 모델의 경우 Forward Selection / Backward elimination 알고리즘을 통해 특징 선택

## 2. 차원감소
- Feature Extraction ( 특징 추출 )
- 단순히 데이터의 압축이나 잡음을 제거하는것이 목표가 아님 -> 관측 데이터를 잘 설명할 수 있는 잠재공간을 찾는것
- ex_ PCA ( 주성분분석 )

## 3. 특징 생성 / 특징 구축
- 흔히 말하는 Feature Engineering
- 모델링 성능을 높이는 새로운 특성을 만드는 과정
- 분야 전문성이 요구됨
- 특징 생성 / 구축 Process

	1. Brainstorming or Testing features
	2. Deciding what features to create
	3. Creating features
	4. Checking how the features work with your model
	5. Improving your features if needed
	6. Go back to brain storming / creating more features until the work is done

- 구체적인 방법

1. Business / Data Driven Features

- 사업 현장의 비즈니스 관점에서 데이터를 분석하여 특징을 만들어 내는 방식 ( Business )
- 비즈니스 관점이 없이도 주어진 데이터를 다루는 과정에서 특징을 만들어 내는 방식 ( Data )

2. 변수 생성 방법

- 지표 변수 ( Indicator Variables ) : 지표변수 생성 ( 나이 특성으로부터 21세 이상일 경우 성인으로 구분 )
- 중복 특징 ( Interaction Features ) : 두 개의 특징을 결합하여 새로운 특징 생성 ( 클릭 수와 접속 수를 결합하여 클릭당 방문자수 라는 Feature 생성 -> Feature explosion 주의 )
- 대표 특징 ( Feature Representation ) : 특징들로부터 대표성을 갖는 새로운 특징을 만듬 ( 미국의 12학년 데이터를 초등학교 / 중학교 / 고등학교와 같이 대표성을 가지는 특징을 생성 )
- 외부데이터 ( External Data ) : 기존의 주어진 데이터 이외의 다른 데이터 활용 ( 영화데이터 분석 할 때 개봉 월 에 대한 데이터가 없다면 크롤링 등으로 가져오기 )
- 에러 분석 ( Error Analysis - Post-Modeling ) : 모델을 통해 나온 결과를 바탕으로 특징을 만드는 방법
- Start with larger errors : 모델을 통해 나온 모든값을 확인하는 것이 아니라 Error값이 큰 feature 부터 확인
- Segment By classes : 평균 Error를 기준으로 Segment 나누어 비교하면서 분석
- Unsupervised clustering : 패턴 발견이 명확하지 않은 경우 clustering을 통해 error의 원인을 찾는 방법
- Ask colleagues or domain experts : If you cannot find errors in data -> Please ask domain expert
