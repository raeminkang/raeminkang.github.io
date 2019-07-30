---
title: "Kaggle Competition Study"
last_modified_at: 2019-07-27 T20:35:00-05:00
categories:
  - Machine Learning
tags:
  - Kaggle Study
author: bartSimpson
---

[https://www.kaggle.com/chocozzz/house-price-prediction-eda/output](https://www.kaggle.com/chocozzz/house-price-prediction-eda/output)

해당 커널의 문제풀이 순서

	1. 데이터 탐색
	1.1 문제 정의
	-> 어떠한 것을 요구하는 문제인가
	-> 어떠한 평가지표를 사용하는가

	1.2 변수 설명
	-> 각 변수가 어떠한 것을 의미하는지 설명  
	-> 각 변수에서 어떠한 부분이 나에게 필요한지 탐색 ( ex_ date에서 yyyy-mm-dd 만 필요 )
	-> 전처리해야 할 부분과 피쳐 엔지니어링을 할 아이디어 고민
		-> Feature Engineering ?

	1.3 변수 시각화 ( 목적변수 / 반응변수 )
		목적변수 ( Price )
		-> 목적변수의 분포 그리기 및 통계적 지표 확인 ( Skewness / Kurtosis )
		-> 정규분포 따르지 않고, 분산이 큰것을 확인
		-> 회귀모델을 사용 할 것이기 때문에 Normalize를 통해 목적변수 정규화
		-> 만약 하지 않으면 ?

		반응변수 ( 나머지 )
		-> 선형성 조사  
			->회귀모델을 사용 할 것이기 때문에, 목적변수와의 선형성 조사 ( 피어슨 / 스피어만 correlation )
			-> 여기서 위도가 상관관계가 있는것 처럼 보이는데, 왜 그런지는 나중에 탐사 한다
		-> 이상치 탐지
			-> Price 와의 관계 플롯을 통해 -> 범주형 ( 이산형 )  / 연속형 데이터는 Boxplot / Scatterplot 으로 플롯팅
			-> 어떤 데이터가 이상치가 있는지 / 그 이유는 무엇인지 데이터 자체의 의미를 가지고 생각해봄

	1.4 결측치 탐색
		-> 결측치가 있는지 없는지 탐색

	1.5 유니크한 개수
		-> 범주형 데이터의 범주가 몇개인지 세는것으로 추측됨


	2. 데이터 전처리
	2.1 이상치 제거
	-> 각 중요한 변수들에 대해 시각화를 해 보았을 때, 눈에 보이는 이상치들을 직접 확인 후 이상치가 확실하다고 판단되면 해당 데이터 제거
		2.1.1 sqft_living
		2.1.2 grade
		2.1.3 bedrooms

	2.2 정규화
	-> 정규화가 필요한 컬럼 ( 해당 커널에선 sqft_living, sqft_lot, sqft_above, sqft_basement )에 대한 로그 정규화 진행
	-> log1p 진행 ( [https://www.kaggle.com/kcs93023/2019-ml-month-2nd-baseline](https://www.kaggle.com/kcs93023/2019-ml-month-2nd-baseline) )

	2.3 변수 수정
	-> date에서 앞의 8자리만 필요하기 때문에 ( yyyy - mm - dd ) 8자리만 가져오도록 변경
	-> renovated ( 재건축 ) 년도가 0 인경우에 nan으로 바꾸고, yr_built로 변경

	3. 변수생성
	-> 새로운 변수 생성 ( Feature Engineering )

	4. 모델링
	4.1 릿지 회귀
	4.2 GBM
		4.2.1 LightGBM
	4.3 앙상
