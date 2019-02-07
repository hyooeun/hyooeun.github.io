# blog

회사 블로그 개발 및 글 작성을 관리합니다.

## renewal

회사 홈페이지에 새로운 디자인과 내용을 적용합니다

## Jekyll

---

### 설치

```
brew install ruby-all-dev nodejs
sudo gem install bundler
bundle install
```

저장소에 따라 Ruby 및 Gem에 대해 별도의 버전 일치 여부 확인이 필요할 수 있습니다.

### 테스트 및 운용

```
bundle exec jekyll serve
```

- 이후 http://localhost:4000 주소로 접속하여 확인 할 수 있습니다.
- 운용 시 `--detach` 명령을 주어 백그라운드에서 실행되도록 할 수 있습니다.
- 신규 설치 후 정상적인 동작을 위해서는 `_config.yml`의 `url` 값을 도메인에 맞춰 변경해주세요.
