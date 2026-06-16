# shunrises.github.io

이시윤의 개인 블로그 및 포트폴리오 사이트입니다.

공부한 내용, 개발 과정에서의 고민, 프로젝트 경험을 기록하며 기술과 좋아하는 문화를 연결하는 공간입니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | [Astro 6](https://astro.build) |
| UI | [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com) |
| 검색 | [Pagefind](https://pagefind.app) |
| OG 이미지 | [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com) |
| 애니메이션 | [GSAP](https://gsap.com) |
| 배포 | [Cloudflare Pages](https://pages.cloudflare.com) |

## 로컬 실행

```bash
pnpm install
pnpm dev
```

개발 서버: `http://localhost:4321`

검색 기능 포함 테스트:

```bash
pnpm build:serve
```

## 빌드 & 배포

```bash
pnpm build
```

`dist/`에 정적 파일 생성 + Pagefind 인덱싱까지 포함됩니다.

Cloudflare Pages 설정:
- **Build command**: `pnpm build`
- **Output directory**: `dist`
- **Node.js version**: `22`

## 출처

[Ryze](https://github.com/A58361/ryze) 템플릿을 기반으로 제작되었습니다.

## 라이선스

[GNU General Public License v3.0](LICENSE.md)
