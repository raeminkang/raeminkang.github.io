## YAML 이란

.md 파일의 구조는 다음과 같은 구조를 가지고 있습니다. ( [Markdown에 대한 설명](https://raeminkang.github.io/intro/2019/08/22/md-%ED%8C%8C%EC%9D%BC-%EB%AC%B8%EB%B2%95.html) )

```shell
---
YAML data format
...
---

Markdown language
...

```

YAML이란, 데이터 정렬 양식 중에 하나입니다. 데이터에 데이터를 쉽게 대입하고, 사용하기 위한 양식 중에 하나인 것입니다.  

`변수: 값`의 형태로 이루어 져 있으며 변수에 값을 대입하는 형식이고, 이 정보들은 md파일의 정보를 홈페이지를 생성 할 때 jekyll에 알려주는 용도로 사용됩니다.  

예를 들면 어떤 글에서 `layout: `이라는 데이터에 `posts`를 입력한 경우엔 홈페이지를 생성 할 때 해당 글에선 `_layouts/posts.html`이라는 양식 파일을 찾습니다.

하지만 `_layouts/posts.html`라는 파일은 없습니다. `_layouts/post.html`라는 파일이 존재하죠.

이러한 경우 불러올 양식이 없어 화면이 엉망으로 보일 수 있습니다.

또한 각각의 파일의 용도에 따라 필요한 데이터들이 다를 수 있습니다.  

글을 쓰기 위해 파일을 생성할 때에는 `작성자`라는 데이터가 필요하지만 글을 정리하기 위한 카테고리를 생성하기 위해 파일을 생성 할 때에는 `작성자`는 필요 없기 때문입니다.  

또한 홈페이지 화면 생성을 위해 파일을 불러 올 때 md파일의 위치가 다를 수 있습니다.

규칙이 없다면 파일을 제대로 불러오지 못하는 구조기 때문입니다.

따라서 이번 글에서 **데이터를 입력 할 때의 규칙** / **작성 용도별로 필요한 데이터에 대한 규칙** / **파일을 저장하는 규칙** 총 세가지 규칙을 설명드리겠습니다.  

***

## post에 글을 쓸 때 ( 기술 블로그에 게시글을 작성 할 때 )

```shell
---
layout: post
title: post에 글쓰기
tags: [글쓰기 대장]
categories: Intro
author: raemin
image: youtube-sample/homer.jpg
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
반드시 해당 카테고리 중 하나를 선택 해 주세요, 없다면 생성 해 줄 수 있습니다.    
카테고리를 선택하지 않으시면 카테고리끼리 모아놓은 곳에서 해당 글을 볼 수 없습니다.  
카테고리 명은 파일명과 반드시 일치시켜 주세요.  
카테고리 항목을 생성하는 방법은 [여기](#Category)에 서술되어 있습니다.  

### author
작성자를 적는 공간입니다. _authors 폴더에 있는 자신의 정보가 담긴 md 파일에 적혀있는 name을 적어주시면 됩니다. [참고] (#author)  

### image
게시글 상단에 보일 이미지 파일을 적어주는 공간입니다.  
입력하지 않으시면 기본 이미지가 들어가게 됩니다.  
반드시 ( 해당 파일의 날짜 제외 이름을 가진 폴더 )에 이미지를 생성 해 주세요. 폴더가 없다면 폴더를 생성 해주시면 됩니다.  
ex_ 2019-07-30-youtube-sample.md 파일에서는 ( youtube-sample )이라는 폴더에 이미지가 들어가 있어야 합니다.

### 글 저장 시 Naming Rule ( 저장 폴더 위치 : _post )
저장하실떄의 형식은 포스팅 될 날짜( yyyy-MM-dd 형식 )-제목.md 입니다. 띄어쓰기가 들어 갈 경우엔 "-"를 사용해주시면 됩니다.  
( ex_ yyyy-MM-dd-제목을-띄어쓰기할땐-이렇게요.md )

_post_ 폴더에 저장 해주시면 됩니다.

***

## author을 추가 하기 {#author}

```shell
---
name: IceBear
nickname: Alonzo
profileImage: polarbear.png
bio: 아이스베어 소개소개
cover: polarbear.png
position: 마케팅
---
```

### name
이름을 적는 항목입니다.

### nickname
별명을 적는 항목입니다.  

### profileImage
작성자의 프로필 사진 항목입니다.

images/authors 폴더에 반드시 폴더명을 (name에 적으셨던 이름)으로 생성 해 주셔야 합니다. 그렇지 않으면 제대로 프로필이 표시되지 않습니다.  
위에서 생성한 (name에 적으셨던 이름)폴더에 프로필로 사용하실 이미지를 넣습니다.    
이미지를 넣으신 후에 profileImage 옆에 확장자를 포함하여 이미지의 파일 이름을 적어 주시면 됩니다.  

### bio
간단한 자기소개를 적는 항목입니다.

### cover
현재는 사용하지 않으니 안적으셔도 됩니다

### position
직무를 적으시면 됩니다.

### author 저장 시 Naming Rule ( 저장 폴더 위치 : _authors )  
해당 파일을 저장 하실 때 파일 명은 반드시 (name에 적으셨던 이름).md 파일로 저장 해 주세요  **중요 ! 파일명(name에 적으셨던 이름)에 영어가 들어갈경우 대소문자를 일치시켜주세요 !**
( ex_ 위의 예에선 IceBear.md )  

***

## Category 추가하기 {#Category}

`_category/machine learning.md` file  
```shell
---
name: machine learning
description: Machine Learning desc
---
```

### name
카테고리의 명칭을 적는 항목입니다.

### description
카테고리에 대한 설명을 적는 항목입니다. ( 현재는 사용하지 않으니 안적으셔도 됩니다 )

### Category 저장 시 Naming Rule ( 저장 폴더 위치 : _category )  
해당 파일을 저장 하실 때 파일 명은 반드시 (name에 적으셨던 이름).md 파일로 저장 해 주세요 **중요 ! 파일명에 영어가 들어갈경우 모두 소문자로 해주세요 !**
( ex_ 위의 예에선 machine learning.md )

***

## Tag 추가하기 {#Category}

`_tags/machine learning.md` file  

```shell
---
name: machine learning
description: machine learning desc
---
```

### name
카테고리의 명칭을 적는 항목입니다.

### description
카테고리에 대한 설명을 적는 항목입니다. ( 현재는 사용하지 않으니 안적으셔도 됩니다 )

### Category 저장 시 Naming Rule ( 저장 폴더 위치 : _tags )  
해당 파일을 저장 하실 때 파일 명은 반드시 (name에 적으셨던 이름).md 파일로 저장 해 주세요 **중요 ! 파일명에 영어가 들어갈경우엔 모두 소문자로 해주세요 !**
( ex_ 위의 예에선 machine learning.md )
