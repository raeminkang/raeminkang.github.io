## 설치 및 실행 (로컬)

[Jekyll]: https://jekyllrb.com

1. [Jekyll] 설치
2. git pull ( repo link : https://github.com/quriously/quriously.github.io )
3. pull 받은 폴더로 이동 
4. bundle install 
5. bundle exec jekyll serve 
6. open http://localhost:4001

## 배포

github repo ( repo link : https://github.com/quriously/quriously.github.io )에 push  

## 공통  

아래의 규칙들은 md파일을 생성 하신 후 md파일을 작성하실때의 규칙들입니다.  
규칙에 따라 파일을 생성 하신 뒤 규칙에 서술된 위치에 파일을 저장해주시면 됩니다. 

## post에 글을 쓸 때 ( 기술 블로그에 게시글을 작성 할 때 )

```shell
---
layout: post
title: post에 글쓰기
tags: [글쓰기 대장]
categories: Intro
author: raemin
---
```

### layout
글이 보일 형식을 정하는 항목입니다. 게시글을 적을땐 반드시 post 로 적어주세요.  

### title
글의 제목값입니다.  

### tags
해당 글이 가질 태그 항목을 적을 수 있습니다. 태그는 여러개 기입할 수 있으며 [tag1, tag2, tag3 ... ]의 형식으로 기입 해 주세요  

### categories
해당 글이 포함될 카테고리를 적는 항목입니다.
카테고리는 제한적이며 카테고리 항목은 _category 폴더에서 확인 할 수 있습니다.   
반드시 카테고리 중 하나를 선택 해 주세요.
카테고리를 선택하지 않으시면 카테고리별로 게시글을 모아놓은 곳에서 해당 글을 볼 수 없습니다.  

### author
작성자를 적는 공간입니다. _authors 폴더에 있는 자신의 정보가 담긴 md 파일에 적혀있는 name을 적어주시면 됩니다.  

게시글 본문에 대한 구체적인 내용은 링크를 참조 해주세요. [링크](https://raeminkang.github.io/intro/2019/08/22/md-%ED%8C%8C%EC%9D%BC-%EB%AC%B8%EB%B2%95.html)

### post 저장 시 Naming Rule ( md파일 저장 폴더 위치 : `_post` )  
저장하실떄의 형식은 포스팅 될 날짜( yyyy-MM-dd 형식 )-제목.md 입니다. 띄어쓰기가 들어 갈 경우엔 "-"를 사용해주시면 됩니다.  
( ex_ yyyy-MM-dd-제목을-띄어쓰기할땐-이렇게요.md )


## author을 추가 하기

```shell
---
name: IceBear
profileImage: polarbear.png
position: 마케팅
---
```

### name
이름을 적는 항목입니다.

### profileImage
작성자의 프로필 사진 항목입니다.  
assets/authors 폴더에 반드시 사용하실 이미지를 (name에 적으셨던 이름)으로 생성 해 주셔야 합니다.  
이미지를 넣으신 후에 profileImage 옆에 확장자를 포함하여 이미지의 파일 이름을 적어 주시면 됩니다.  

### position
직무를 적으시면 됩니다.

### author 저장 시 Naming Rule ( md파일 저장 폴더 위치 : `_authors` )  
해당 파일을 저장 하실 때 파일 명은 반드시 (name에 적으셨던 이름).md 파일로 저장 해 주세요  
**중요 ! 파일명(name에 적으셨던 이름)에 영어가 들어갈경우 대소문자를 일치시켜주세요 !**  
( ex_ 위의 예에선 IceBear.md )  

## Category 추가하기

```shell
---
name: machine learning
---
```

### name
카테고리의 명칭을 적는 항목입니다.

### Category 저장 시 Naming Rule ( 저장 폴더 위치 : `_category` )  
해당 파일을 저장 하실 때 파일 명은 반드시 (name에 적으셨던 이름).md 파일로 저장 해 주세요  
**중요 ! 파일명에 영어가 들어갈경우 모두 소문자로 해주세요 !**  
( ex_ 위의 예에선 machine learning.md )

## Tag 추가하기

```shell
---
name: machine learning
---
```

### name
카테고리의 명칭을 적는 항목입니다.

### Category 저장 시 Naming Rule ( 저장 폴더 위치 : `_tags` )  
해당 파일을 저장 하실 때 파일 명은 반드시 (name에 적으셨던 이름).md 파일로 저장 해 주세요  
**중요 ! 파일명에 영어가 들어갈경우엔 모두 소문자로 해주세요 !**  
( ex_ 위의 예에선 machine learning.md )
