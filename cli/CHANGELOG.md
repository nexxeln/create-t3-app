# Changelog

## 7.38.2

### Patch Changes

- [#2034](https://github.com/t3-oss/create-t3-app/pull/2034) [`9310dc5aa9f09c6b2b998b60146642bcbfaef699`](https://github.com/t3-oss/create-t3-app/commit/9310dc5aa9f09c6b2b998b60146642bcbfaef699) Thanks [@programming-with-ia](https://github.com/programming-with-ia)! - fix: cli cancel not working

- [#2044](https://github.com/t3-oss/create-t3-app/pull/2044) [`cd4cf334e786191f36d699dd9ecdca20903d23f9`](https://github.com/t3-oss/create-t3-app/commit/cd4cf334e786191f36d699dd9ecdca20903d23f9) Thanks [@ImBIOS](https://github.com/ImBIOS)! - fix: simplify session user check in protected procedures

- [#2038](https://github.com/t3-oss/create-t3-app/pull/2038) [`d0a710a65095bc3145a92f13970937af625cb140`](https://github.com/t3-oss/create-t3-app/commit/d0a710a65095bc3145a92f13970937af625cb140) Thanks [@acharlop](https://github.com/acharlop)! - start-database.sh script gets DB_NAME and DB_CONTAINER_NAME based off of DATABASE_URL in .env

## 7.38.1

### Patch Changes

- [#2010](https://github.com/t3-oss/create-t3-app/pull/2010) [`12fccae15d08bc11168fe6b462d978a6787b5c7c`](https://github.com/t3-oss/create-t3-app/commit/12fccae15d08bc11168fe6b462d978a6787b5c7c) Thanks [@swyckoff](https://github.com/swyckoff)! - Added an import for crypto in the cli envVars.ts to support older node versions.

## 7.38.0

### Minor Changes

- [#2000](https://github.com/t3-oss/create-t3-app/pull/2000) [`41de302b5a76966741d1dc270ba5da27064f82e8`](https://github.com/t3-oss/create-t3-app/commit/41de302b5a76966741d1dc270ba5da27064f82e8) Thanks [@ronanru](https://github.com/ronanru)! - update to next.js 15 and next-auth v5

- [#2002](https://github.com/t3-oss/create-t3-app/pull/2002) [`54b66484692b76d325f59dc233eb27e0aee59af2`](https://github.com/t3-oss/create-t3-app/commit/54b66484692b76d325f59dc233eb27e0aee59af2) Thanks [@devotoare](https://github.com/devotoare)! - Change drizzle with PostgresQL to use identity columns

### Patch Changes

- [#1969](https://github.com/t3-oss/create-t3-app/pull/1969) [`e08dbe307b4e37c7cc7e0cbf6243c008771ef4f8`](https://github.com/t3-oss/create-t3-app/commit/e08dbe307b4e37c7cc7e0cbf6243c008771ef4f8) Thanks [@Guria](https://github.com/Guria)! - fix issue with prefetch protected procedure in auth templates

- [#1997](https://github.com/t3-oss/create-t3-app/pull/1997) [`fe85a233c62af607e8a39bf5ca1b2358d43c6587`](https://github.com/t3-oss/create-t3-app/commit/fe85a233c62af607e8a39bf5ca1b2358d43c6587) Thanks [@programming-with-ia](https://github.com/programming-with-ia)! - Add more scripts in `package.json`

- [#1975](https://github.com/t3-oss/create-t3-app/pull/1975) [`78cb06f99f15f4f4f90b57e3545f1dc0b222eaf3`](https://github.com/t3-oss/create-t3-app/commit/78cb06f99f15f4f4f90b57e3545f1dc0b222eaf3) Thanks [@0pilatos0](https://github.com/0pilatos0)! - Resolved issue where database startup script did not check for docker daemon being up and running

## 7.37.0

### Minor Changes

- [#1936](https://github.com/t3-oss/create-t3-app/pull/1936) [`2d1878e53767e35ab4b22a37622fbf0d5fdb4da7`](https://github.com/t3-oss/create-t3-app/commit/2d1878e53767e35ab4b22a37622fbf0d5fdb4da7) Thanks [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)! - upgrade to typescript eslint v8

- [#1936](https://github.com/t3-oss/create-t3-app/pull/1936) [`2d1878e53767e35ab4b22a37622fbf0d5fdb4da7`](https://github.com/t3-oss/create-t3-app/commit/2d1878e53767e35ab4b22a37622fbf0d5fdb4da7) Thanks [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)! - upgrade to drizzle-orm@0.33 and corresponding drizzle-kit version

### Patch Changes

- [#1954](https://github.com/t3-oss/create-t3-app/pull/1954) [`f9f96d069af87d4372dc917e3625409859e4e615`](https://github.com/t3-oss/create-t3-app/commit/f9f96d069af87d4372dc917e3625409859e4e615) Thanks [@ronanru](https://github.com/ronanru)! - fix typo

## 7.36.2

### Patch Changes

- [#1945](https://github.com/t3-oss/create-t3-app/pull/1945) [`9eea9fb5f6d26d42944a660bfcee5f7fb33438ad`](https://github.com/t3-oss/create-t3-app/commit/9eea9fb5f6d26d42944a660bfcee5f7fb33438ad) Thanks [@datasalaryman](https://github.com/datasalaryman)! - resolve client error during getLatest trpc call

- [#1948](https://github.com/t3-oss/create-t3-app/pull/1948) [`3a1b94d29a3addc783e2d6645c2e88a5b7273174`](https://github.com/t3-oss/create-t3-app/commit/3a1b94d29a3addc783e2d6645c2e88a5b7273174) Thanks [@keyding](https://github.com/keyding)! - Update seed.ts in prisma in documentation

- [#1940](https://github.com/t3-oss/create-t3-app/pull/1940) [`46a4e2d144da8b184bf39444b19e0b1bd00bab2b`](https://github.com/t3-oss/create-t3-app/commit/46a4e2d144da8b184bf39444b19e0b1bd00bab2b) Thanks [@KrishanGoyal1](https://github.com/KrishanGoyal1)! - changed default password error message for `start-database` script

## 7.36.1

### Patch Changes

- [#1937](https://github.com/t3-oss/create-t3-app/pull/1937) [`5a0cbc53afb8597d6da2bc6d184ea1427e741cec`](https://github.com/t3-oss/create-t3-app/commit/5a0cbc53afb8597d6da2bc6d184ea1427e741cec) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: dependency bumps

## 7.36.0

### Minor Changes

- [#1932](https://github.com/t3-oss/create-t3-app/pull/1932) [`42a485a29370fbfe4f03e5f756d97c0fee0b09e8`](https://github.com/t3-oss/create-t3-app/commit/42a485a29370fbfe4f03e5f756d97c0fee0b09e8) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: add trpc rsc prefetching

### Patch Changes

- [#1934](https://github.com/t3-oss/create-t3-app/pull/1934) [`1cfbb117c892905ea956a597aa6d48e9984b1190`](https://github.com/t3-oss/create-t3-app/commit/1cfbb117c892905ea956a597aa6d48e9984b1190) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - remove duplicate `<main>` tags

- [#1931](https://github.com/t3-oss/create-t3-app/pull/1931) [`a1a4b8707b95b82e755733b2853ac595bb9d4829`](https://github.com/t3-oss/create-t3-app/commit/a1a4b8707b95b82e755733b2853ac595bb9d4829) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: unify drizlze schema and fix sqlite timestamps

## 7.35.0

### Minor Changes

- [#1905](https://github.com/t3-oss/create-t3-app/pull/1905) [`b22e2e10d005689faa7b1db771a217b59c88635f`](https://github.com/t3-oss/create-t3-app/commit/b22e2e10d005689faa7b1db771a217b59c88635f) Thanks [@jessedelira](https://github.com/jessedelira)! - Add .idea to .gitignore

### Patch Changes

- [#1909](https://github.com/t3-oss/create-t3-app/pull/1909) [`f69fa29733d3bd0d6e5043d1200e250a938b6335`](https://github.com/t3-oss/create-t3-app/commit/f69fa29733d3bd0d6e5043d1200e250a938b6335) Thanks [@TheDevilOnLine](https://github.com/TheDevilOnLine)! - fix: Added $defaultFn to the user table's id field when using Drizzle to fix #1906

## 7.34.0

### Minor Changes

- [#1893](https://github.com/t3-oss/create-t3-app/pull/1893) [`1925236bcfcafc6c490319ab5f07b2a698e88ef5`](https://github.com/t3-oss/create-t3-app/commit/1925236bcfcafc6c490319ab5f07b2a698e88ef5) Thanks [@brandon93s](https://github.com/brandon93s)! - Add `db:generate` and `db:migrate` scripts to drizzle and prisma installers

### Patch Changes

- [#1891](https://github.com/t3-oss/create-t3-app/pull/1891) [`4236f0dfa969ff0d8b7ce2a60b5595c43ced9043`](https://github.com/t3-oss/create-t3-app/commit/4236f0dfa969ff0d8b7ce2a60b5595c43ced9043) Thanks [@thecmdrunner](https://github.com/thecmdrunner)! - Apply drizzle rules for `ctx.db` object in tRPC context

## 7.33.1

### Patch Changes

- [#1884](https://github.com/t3-oss/create-t3-app/pull/1884) [`f148deb`](https://github.com/t3-oss/create-t3-app/commit/f148debf74e16b61dae89c684fbc9ac1d97ac2c8) Thanks [@Irere123](https://github.com/Irere123)! - fix: remove deprecated push command in drizzle package.json scripts (…
  )

## 7.33.0

### Minor Changes

- [#1821](https://github.com/t3-oss/create-t3-app/pull/1821) [`4de1927`](https://github.com/t3-oss/create-t3-app/commit/4de1927489aa2d0cf61313ea1543f85268c0e645) Thanks [@kakeWasTaken](https://github.com/kakeWasTaken)! - change default font from Inter to Geist Sans

### Patch Changes

- [#1881](https://github.com/t3-oss/create-t3-app/pull/1881) [`9e5e7d0`](https://github.com/t3-oss/create-t3-app/commit/9e5e7d0c4342542fec18fdc97552b494fe31f5a3) Thanks [@gcjbr](https://github.com/gcjbr)! - chore: update `drizzle-kit` to `0.21.0`

## 7.32.1

### Patch Changes

- [#1867](https://github.com/t3-oss/create-t3-app/pull/1867) [`304a67f`](https://github.com/t3-oss/create-t3-app/commit/304a67f5bde05116b143c86588546af02e86cfda) Thanks [@xelacast](https://github.com/xelacast)! - Parsed --dbprovider flag correctly and added related error message

- [#1860](https://github.com/t3-oss/create-t3-app/pull/1860) [`b5ced34`](https://github.com/t3-oss/create-t3-app/commit/b5ced343f8a7fbc889a113ec05bef6c5e550cd55) Thanks [@victor-falcon](https://github.com/victor-falcon)! - Load PORT in start-database script

- [#1871](https://github.com/t3-oss/create-t3-app/pull/1871) [`f29a69f`](https://github.com/t3-oss/create-t3-app/commit/f29a69fcc300db539fe0cfa9f52858551e89b869) Thanks [@xelacast](https://github.com/xelacast)! - Fixed project creation of . bug in ./start-database.sh

- [#1858](https://github.com/t3-oss/create-t3-app/pull/1858) [`29348b6`](https://github.com/t3-oss/create-t3-app/commit/29348b6b4f11d7f19915be6639e3c5aaa27b8907) Thanks [@lcabraja](https://github.com/lcabraja)! - Added drizzle's db.sqlite location to .gitignore

## 7.32.0

### Minor Changes

- [#1842](https://github.com/t3-oss/create-t3-app/pull/1842) [`088a773`](https://github.com/t3-oss/create-t3-app/commit/088a773103a03e0ec34cbe22329ead33cd80c5ff) Thanks [@nick22985](https://github.com/nick22985)! - Infers tRPC input & output types to the client for app router

- [#1841](https://github.com/t3-oss/create-t3-app/pull/1841) [`41bd524`](https://github.com/t3-oss/create-t3-app/commit/41bd5240276f1029633cde588b0ca08301c4e78c) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - mark app router as stable

### Patch Changes

- [#1838](https://github.com/t3-oss/create-t3-app/pull/1838) [`ff886b3`](https://github.com/t3-oss/create-t3-app/commit/ff886b3fed4b193b8fc85882a71c7e8085457cf0) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - bump zod and t3-env

## 7.31.0

### Minor Changes

- [#1830](https://github.com/t3-oss/create-t3-app/pull/1830) [`3257d0a`](https://github.com/t3-oss/create-t3-app/commit/3257d0a2fe73847b501bdf36f09053638b4a41a4) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: replace better-sqlite3 with libsql

### Patch Changes

- [`ab5fa95`](https://github.com/t3-oss/create-t3-app/commit/ab5fa95afce2a0feb8567aed6bb02beeef1401e5) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: pin zod version

- [#1835](https://github.com/t3-oss/create-t3-app/pull/1835) [`f66e30a`](https://github.com/t3-oss/create-t3-app/commit/f66e30a0c84eb4f74182d79b23e3c5e900788e10) Thanks [@Inshiku-Han](https://github.com/Inshiku-Han)! - Only install @trpc/next when router style is page router

## 7.30.2

### Patch Changes

- [#1817](https://github.com/t3-oss/create-t3-app/pull/1817) [`d49300a`](https://github.com/t3-oss/create-t3-app/commit/d49300a4230835f6a771ed1a6b759c61c8902d7e) Thanks [@kxzazz](https://github.com/kxzazz)! - fix: `start-database.sh` is marked optional

- [#1823](https://github.com/t3-oss/create-t3-app/pull/1823) [`f5c5db9`](https://github.com/t3-oss/create-t3-app/commit/f5c5db99dbd86010369b26e55dd65973ccd0db05) Thanks [@t3dotgg](https://github.com/t3dotgg)! - chore: update next to 14.2.1

## 7.30.1

### Patch Changes

- [#1802](https://github.com/t3-oss/create-t3-app/pull/1802) [`41380d1`](https://github.com/t3-oss/create-t3-app/commit/41380d1cbf29418c3d60a2dcefd3eaf3f7e7bc28) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - fix: non planetscale env.js refers to YOUR_MYSQL_URL_HERE

- [#1808](https://github.com/t3-oss/create-t3-app/pull/1808) [`fedd7b3`](https://github.com/t3-oss/create-t3-app/commit/fedd7b3926540fdf3137f327cac917237a438943) Thanks [@thecmdrunner](https://github.com/thecmdrunner)! - Apply drizzle-orm lint rules for `db` keyword only

## 7.30.0

### Minor Changes

- [#1741](https://github.com/t3-oss/create-t3-app/pull/1741) [`5de586d`](https://github.com/t3-oss/create-t3-app/commit/5de586da1933064c9eef84ddae47d795e71afc53) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: use trpc 11

## 7.29.0

### Minor Changes

- [#1785](https://github.com/t3-oss/create-t3-app/pull/1785) [`57dc6ab`](https://github.com/t3-oss/create-t3-app/commit/57dc6ab0625d7cd56bf8f6b5c4d3b844421ffe48) Thanks [@thecmdrunner](https://github.com/thecmdrunner)! - Include ESLlint rules for `drizzle-orm`.

- [#1794](https://github.com/t3-oss/create-t3-app/pull/1794) [`3cca996`](https://github.com/t3-oss/create-t3-app/commit/3cca9965739d29cc010e586406d40fff471a9bed) Thanks [@thecmdrunner](https://github.com/thecmdrunner)! - Use portable shebangs in scripts for nix systems

## 7.28.0

### Minor Changes

- [#1777](https://github.com/t3-oss/create-t3-app/pull/1777) [`640a0e0`](https://github.com/t3-oss/create-t3-app/commit/640a0e086d1515f4f88315d3295b44296fe7bbd0) Thanks [@limegorilla](https://github.com/limegorilla)! - Warning about planetscale's serverless driver now only shown if using mySQL

### Patch Changes

- [#1778](https://github.com/t3-oss/create-t3-app/pull/1778) [`01badfb`](https://github.com/t3-oss/create-t3-app/commit/01badfb38caec5d0d211d7f93c6e288d55f2a751) Thanks [@DerTimonius](https://github.com/DerTimonius)! - fix: add missing default font in pagesDir

- [#1766](https://github.com/t3-oss/create-t3-app/pull/1766) [`d7695df`](https://github.com/t3-oss/create-t3-app/commit/d7695df89a77ea5add1d703b63b9aeda5b5ef0c5) Thanks [@fuegoio](https://github.com/fuegoio)! - fix: cache database connection during development to prevent `Too many connections` due to HMR

## 7.27.0

### Minor Changes

- [#1773](https://github.com/t3-oss/create-t3-app/pull/1773) [`8f29eb9`](https://github.com/t3-oss/create-t3-app/commit/8f29eb990ccbc36c018ce596d2de0205b3c7edac) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat(prisma): support correct typings when using `.extends()`

### Patch Changes

- [#1774](https://github.com/t3-oss/create-t3-app/pull/1774) [`0418663`](https://github.com/t3-oss/create-t3-app/commit/0418663ec6cc370ed1e067f1ef68f0d5ca41af53) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: update drizzle-orm

- [#1763](https://github.com/t3-oss/create-t3-app/pull/1763) [`836fccf`](https://github.com/t3-oss/create-t3-app/commit/836fccf22dc224e283a764649c16090e4ba42b18) Thanks [@skullface](https://github.com/skullface)! - fix: correct casing of “PlanetScale”

- [#1764](https://github.com/t3-oss/create-t3-app/pull/1764) [`79e361c`](https://github.com/t3-oss/create-t3-app/commit/79e361cfd8ad0740a353c7712cad8d38cbc8ee7b) Thanks [@vlxm](https://github.com/vlxm)! - fix: fix password substitution in start-database scripts

- [#1769](https://github.com/t3-oss/create-t3-app/pull/1769) [`c944c49`](https://github.com/t3-oss/create-t3-app/commit/c944c490522a3fb921d564ab55eecd8c535142c3) Thanks [@jhamill34](https://github.com/jhamill34)! - fix: generated comments in env file

- [#1772](https://github.com/t3-oss/create-t3-app/pull/1772) [`c3c4710`](https://github.com/t3-oss/create-t3-app/commit/c3c4710b2e7e6245c0afae45e1a5119d91cb9578) Thanks [@mladenovic-13](https://github.com/mladenovic-13)! - fix: use singleton pattern for client-side QueryClient to support `useSuspenseQuery` when there is no parent `<Suspense>`-element

- [#1748](https://github.com/t3-oss/create-t3-app/pull/1748) [`17c2a5e`](https://github.com/t3-oss/create-t3-app/commit/17c2a5eb52a7faff7ea9e1d1a6270c2216235ff2) Thanks [@aaronmallen](https://github.com/aaronmallen)! - add missing `pg` dev dependency when using postgres drizzle option, required for `drizzle-studio`

## 7.26.0

### Minor Changes

- [#1622](https://github.com/t3-oss/create-t3-app/pull/1622) [`06b1bca`](https://github.com/t3-oss/create-t3-app/commit/06b1bcafe8751a0fc3cfb7992dfb12cb88bf0234) Thanks [@ronanru](https://github.com/ronanru)! - add more db options

## 7.25.2

### Patch Changes

- [#1723](https://github.com/t3-oss/create-t3-app/pull/1723) [`c116281`](https://github.com/t3-oss/create-t3-app/commit/c116281f3626ae5f05191037789d7338a8fa2e5c) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: don't pass cookies to CC

- [#1728](https://github.com/t3-oss/create-t3-app/pull/1728) [`06ec5b3`](https://github.com/t3-oss/create-t3-app/commit/06ec5b37784c305d18a775b64d34cecb5de45bf2) Thanks [@Nsttt](https://github.com/Nsttt)! - fix missuse of binary expressions

## 7.25.1

### Patch Changes

- [#1713](https://github.com/t3-oss/create-t3-app/pull/1713) [`e34b082`](https://github.com/t3-oss/create-t3-app/commit/e34b08245cc3c1288f90b289577e7c18b37acb1c) Thanks [@daikiejp](https://github.com/daikiejp)! - remove unused @types/inquirer

- [#1703](https://github.com/t3-oss/create-t3-app/pull/1703) [`b6ccded`](https://github.com/t3-oss/create-t3-app/commit/b6ccdedd11b22b64e7bb6f1c55997362fa2915a4) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - update eslint setup for next 14.0.4

- [#1714](https://github.com/t3-oss/create-t3-app/pull/1714) [`ba352ef`](https://github.com/t3-oss/create-t3-app/commit/ba352ef73823eb6413cf251bd7111db6fcb3a585) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: update drizzle dep to remove invalid expo peerDep

- [#1707](https://github.com/t3-oss/create-t3-app/pull/1707) [`26efe48`](https://github.com/t3-oss/create-t3-app/commit/26efe482bdcb309796a2bf207c50ebc844233106) Thanks [@esize](https://github.com/esize)! - chore: update drizzle-orm and drizzle-kit

- [#1708](https://github.com/t3-oss/create-t3-app/pull/1708) [`8f379b4`](https://github.com/t3-oss/create-t3-app/commit/8f379b4df75e56b98973aabcc2097b62be80d0c7) Thanks [@KATT](https://github.com/KATT)! - chore: drop `t.middleware()`

## 7.25.0

### Minor Changes

- [#1702](https://github.com/t3-oss/create-t3-app/pull/1702) [`62fa8dc`](https://github.com/t3-oss/create-t3-app/commit/62fa8dcad2e0d3d6bad04bb6167d7580a754049c) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - update drizzle-kit and change connectionString to uri

### Patch Changes

- [#1690](https://github.com/t3-oss/create-t3-app/pull/1690) [`6efb99a`](https://github.com/t3-oss/create-t3-app/commit/6efb99a94f29d28243fa7c625b099995e84e4db2) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - fix typo in env.mjs

## 7.24.2

### Patch Changes

- [#1687](https://github.com/t3-oss/create-t3-app/pull/1687) [`6461090`](https://github.com/t3-oss/create-t3-app/commit/6461090a029dd2094065493e513a289a1b414673) Thanks [@sinasab](https://github.com/sinasab)! - chore: reuse existing AppRouter type #1687

## 7.24.1

### Patch Changes

- [#1673](https://github.com/t3-oss/create-t3-app/pull/1673) [`b80188e`](https://github.com/t3-oss/create-t3-app/commit/b80188eaecc64e564909ed7ee566790f5e56e59f) Thanks [@ahkhanjani](https://github.com/ahkhanjani)! - fix: Use the correct types for `prettier-plugin-tailwindcss`

## 7.24.0

### Minor Changes

- [#1670](https://github.com/t3-oss/create-t3-app/pull/1670) [`32e0747`](https://github.com/t3-oss/create-t3-app/commit/32e0747a027be16cc36ad5bead062eea696e4012) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: trpc server caller without http

### Patch Changes

- [#1661](https://github.com/t3-oss/create-t3-app/pull/1661) [`ef8f99f`](https://github.com/t3-oss/create-t3-app/commit/ef8f99f65443e48284bc54699eeddc9d10c43a8c) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - update sharp

- [#1667](https://github.com/t3-oss/create-t3-app/pull/1667) [`43cc10b`](https://github.com/t3-oss/create-t3-app/commit/43cc10b0e4ddd6c1b3eb175309df3aebe0571285) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: bump some deps

- [#1666](https://github.com/t3-oss/create-t3-app/pull/1666) [`3317a41`](https://github.com/t3-oss/create-t3-app/commit/3317a41546728509543d8fc44a8fe715b04f09e8) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - refactor: use `type: module` for more modern setup

- [#1664](https://github.com/t3-oss/create-t3-app/pull/1664) [`66213b0`](https://github.com/t3-oss/create-t3-app/commit/66213b04cf03fd7d4d0602bbb34a3de2ab703daa) Thanks [@piousdeer](https://github.com/piousdeer)! - chore: replace a `2` with `"error"` in eslint config

## 7.23.2

### Patch Changes

- [#1651](https://github.com/t3-oss/create-t3-app/pull/1651) [`4834ec3`](https://github.com/t3-oss/create-t3-app/commit/4834ec3cd16c8dba4be1bcd2a9b162c37a0bc7d2) Thanks [@mattpocock](https://github.com/mattpocock)! - tidy up and modernize tsconfig

## 7.23.1

### Patch Changes

- [#1644](https://github.com/t3-oss/create-t3-app/pull/1644) [`e6649f1`](https://github.com/t3-oss/create-t3-app/commit/e6649f18963086b2d016815e60cc9915711a85d8) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: only forward required cookie header

## 7.23.0

### Minor Changes

- [#1628](https://github.com/t3-oss/create-t3-app/pull/1628) [`57a82d2`](https://github.com/t3-oss/create-t3-app/commit/57a82d2f4c1a34068280a1f01c1f2618af260650) Thanks [@CarlosZiegler](https://github.com/CarlosZiegler)! - Update Next to use last version (14.0.0)

## 7.22.0

### Minor Changes

- [#1567](https://github.com/t3-oss/create-t3-app/pull/1567) [`e71bedd`](https://github.com/t3-oss/create-t3-app/commit/e71bedde0d6944fa7719a5f97cd27a1503156faa) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: add app router option

- [#1595](https://github.com/t3-oss/create-t3-app/pull/1595) [`d7824e0`](https://github.com/t3-oss/create-t3-app/commit/d7824e0e2523703662b731945229e2fae88708ae) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - show callout when scaffolding with app router

## 7.21.0

### Minor Changes

- [#1584](https://github.com/t3-oss/create-t3-app/pull/1584) [`9614d84`](https://github.com/t3-oss/create-t3-app/commit/9614d8424d810278facf012fb99d1da51d2238e6) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - bump deps and add `emptyStringAsUndefined` option for `t3-env`

## 7.20.2

### Patch Changes

- [#1564](https://github.com/t3-oss/create-t3-app/pull/1564) [`58ee08e`](https://github.com/t3-oss/create-t3-app/commit/58ee08e850d985b5ef1b7e5bf0cc164cfaff3f3f) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: block drizzle apps when the example database url hasn't been changed yet

## 7.20.1

### Patch Changes

- [#1561](https://github.com/t3-oss/create-t3-app/pull/1561) [`b8507dc`](https://github.com/t3-oss/create-t3-app/commit/b8507dc64ee91b8423de2ab6145cb3e7d8072528) Thanks [@Nsttt](https://github.com/Nsttt)! - Add packageManager field in package.json at app creation

## 7.20.0

### Minor Changes

- [#1461](https://github.com/t3-oss/create-t3-app/pull/1461) [`8034db0`](https://github.com/t3-oss/create-t3-app/commit/8034db042b9ed12f5ba01c1f779c5ee77d78afc4) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: add drizzle

  This release adds a new option to use [`drizzle-orm`](https://orm.drizzle.team/docs/overview) as an alternative to Prisma.

  To make the different ORM options as similar as possible, some minor changes has also been made to the Prisma installer:

  - a new script `db:push` has been added and is included in both ORM options.
  - the prisma client has been renamed to `db` in the trpc context - you now access your database client like
    ```ts
    examples: publicProcedure.query((opts) => {
       // prisma
       opts.ctx.db.example.findMany()
       // drizzle
       opts.ctx.db.query.example.findMany()
    }),
    ```

  You cannot choose the two options in the same app.

### Patch Changes

- [#1461](https://github.com/t3-oss/create-t3-app/pull/1461) [`8034db0`](https://github.com/t3-oss/create-t3-app/commit/8034db042b9ed12f5ba01c1f779c5ee77d78afc4) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - refactor: swap inquirer for clack

## 7.19.0

### Minor Changes

- [#1375](https://github.com/t3-oss/create-t3-app/pull/1375) [`d781f08`](https://github.com/t3-oss/create-t3-app/commit/d781f0861ba05aee6b3d460fc53e126868409fb5) Thanks [@Zeko369](https://github.com/Zeko369)! - feat: detect and support usage of Bun as package manager

## 7.18.0

### Minor Changes

- [#1532](https://github.com/t3-oss/create-t3-app/pull/1532) [`941a0fc`](https://github.com/t3-oss/create-t3-app/commit/941a0fc79bcfb24c894525c93aab87c2860b2ad4) Thanks [@spicybackend](https://github.com/spicybackend)! - chore(deps): upgrade Prisma to v5.1.1, bump patch versions of other dependencies

- [#1507](https://github.com/t3-oss/create-t3-app/pull/1507) [`fe5755c`](https://github.com/t3-oss/create-t3-app/commit/fe5755c2d575ce27e8e9c86e6fc79e7903af0390) Thanks [@LevinUncu](https://github.com/LevinUncu)! - If the project is not in a Git repo, the next steps will show git init instead of git commit -m "initial commit".

## 7.17.0

### Minor Changes

- [#1523](https://github.com/t3-oss/create-t3-app/pull/1523) [`c441a9e`](https://github.com/t3-oss/create-t3-app/commit/c441a9ecfaeb61866a76379712b297fc6c2c36b3) Thanks [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)! - reduced stylistic linting

## 7.16.0

### Minor Changes

- [#1476](https://github.com/t3-oss/create-t3-app/pull/1476) [`f3fd50f`](https://github.com/t3-oss/create-t3-app/commit/f3fd50fbd5dfd705507b1a2b53e8e6fd39b2dadb) Thanks [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)! - Upgraded typescript-eslint to v6, with reworked ESLint configurations

- [#1508](https://github.com/t3-oss/create-t3-app/pull/1508) [`e9c862e`](https://github.com/t3-oss/create-t3-app/commit/e9c862e7e114214139f05572d62af45d87d3fc1c) Thanks [@Sn0wye](https://github.com/Sn0wye)! - chore(deps): bump prisma to v5.0.0

## 7.15.0

### Minor Changes

- [#1484](https://github.com/t3-oss/create-t3-app/pull/1484) [`23a9d60`](https://github.com/t3-oss/create-t3-app/commit/23a9d60cd013c40d76ab96d0340425e1e3d8efa2) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - reminder to git commit after creating an application with the CLI

### Patch Changes

- [#1493](https://github.com/t3-oss/create-t3-app/pull/1493) [`a230d9f`](https://github.com/t3-oss/create-t3-app/commit/a230d9f7bb3a78669f2003ae9084c868f06639b7) Thanks [@dcottr](https://github.com/dcottr)! - Remove trailing newlines in generated app that aren't allowed by the generated prettier config

## 7.14.1

### Patch Changes

- [#1479](https://github.com/t3-oss/create-t3-app/pull/1479) [`bb7324c`](https://github.com/t3-oss/create-t3-app/commit/bb7324c9503995949c61c0a5abe736c38f07b815) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - use custom error class for IsTTYError

## 7.14.0

### Minor Changes

- [#1466](https://github.com/t3-oss/create-t3-app/pull/1466) [`e8b68d9`](https://github.com/t3-oss/create-t3-app/commit/e8b68d92af093361bf73eed7eacd7ed6848500c3) Thanks [@brunoeduardodev](https://github.com/brunoeduardodev)! - Ignore trailing slashes when prompting the app name.

## 7.13.2

### Patch Changes

- [#1469](https://github.com/t3-oss/create-t3-app/pull/1469) [`547f504`](https://github.com/t3-oss/create-t3-app/commit/547f504b91c3da9b6419ea7f9f43d03e6c243839) Thanks [@ericshively](https://github.com/ericshively)! - Replace React.FC with basic function syntax

## 7.13.1

### Patch Changes

- [#1436](https://github.com/t3-oss/create-t3-app/pull/1436) [`b0facee`](https://github.com/t3-oss/create-t3-app/commit/b0facee2736e3e0afc909c3d80b38499174fd84c) Thanks [@harrismcc](https://github.com/harrismcc)! - When using NextAuth but not Prisma, the session user's id is now set to `token.sub` instead of `user.id` because `user` is undefined when not using database sessions.

- [#1433](https://github.com/t3-oss/create-t3-app/pull/1433) [`7fbe991`](https://github.com/t3-oss/create-t3-app/commit/7fbe991175f4da02184e0e43a5439515d1ef7439) Thanks [@FinnDore](https://github.com/FinnDore)! - fix: SKIP_ENV_VALIDATION not skipping env validation

## 7.13.0

### Minor Changes

- [#1397](https://github.com/t3-oss/create-t3-app/pull/1397) [`be9a834`](https://github.com/t3-oss/create-t3-app/commit/be9a83483339f8bb799be7a3d69cf67e64882daf) Thanks [@brieyla1](https://github.com/brieyla1)! - feat: Added JsonProtocol as the Default Prisma Engine for Serverless speedups

  modified:

      - cli/template/extras/prisma/schema/base.prisma

      - cli/template/extras/prisma/schema/with-auth.prisma

  Description: This pull request proposes the enabling of the JsonProtocol by default. The rationale for this change is based on the performance improvements provided by the JsonProtocol without compromising stability, even though it is still a preview feature. Empirical evidence gathered from large-scale projects, with 100+ Prisma calls, demonstrates the significant time reductions enabled by this optimization, particularly in serverless environments such as Vercel. Another point worth adding is that most projects using nextJS create-t3-app will be deployed on serverless platforms such as vercel, where the real impact is.

## 7.12.3

### Patch Changes

- [#1404](https://github.com/t3-oss/create-t3-app/pull/1404) [`48dd89a`](https://github.com/t3-oss/create-t3-app/commit/48dd89adb33ff9625dba82f6e149cf111f02e488) Thanks [@michalbundyra](https://github.com/michalbundyra)! - update nextjs dependency to ^13.4.1

## 7.12.2

### Patch Changes

- [#1401](https://github.com/t3-oss/create-t3-app/pull/1401) [`b1a35dd`](https://github.com/t3-oss/create-t3-app/commit/b1a35dd66c5c9abab13daebfee93c08b67317272) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - temporarily pin next to fix vercel build error

## 7.12.1

### Patch Changes

- [#1377](https://github.com/t3-oss/create-t3-app/pull/1377) [`00018ff`](https://github.com/t3-oss/create-t3-app/commit/00018ff0cbe5904f0bb37b8cb0a64814ca5f9410) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - move env validation logic out to a separate package

- [#1385](https://github.com/t3-oss/create-t3-app/pull/1385) [`ac12abb`](https://github.com/t3-oss/create-t3-app/commit/ac12abb92a77d251b2c4bc72caceb422ab4ca706) Thanks [@iAverages](https://github.com/iAverages)! - Fixed issue with creating git repository with git versions below 2.28
  Fixed bug with check to use --inital-branch set in git v2.28

## 7.12.0

### Minor Changes

- [#1370](https://github.com/t3-oss/create-t3-app/pull/1370) [`18bc6a7`](https://github.com/t3-oss/create-t3-app/commit/18bc6a73a77b0b48191792ddfd0c296b58cc8221) Thanks [@chungweileong94](https://github.com/chungweileong94)! - Enforce `NEXT_PUBLIC_` env key on client

## 7.11.0

### Minor Changes

- [#1358](https://github.com/t3-oss/create-t3-app/pull/1358) [`1a8a97e`](https://github.com/t3-oss/create-t3-app/commit/1a8a97e42b8991596fc70e50dd6870c987a59075) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - improve boolean coercion of `SKIP_ENV_VALIDATION` environment variable

  If defined, "0" and "false" are now considered falsey values, all other values are considered truthy.

### Patch Changes

- [#1352](https://github.com/t3-oss/create-t3-app/pull/1352) [`c48b38f`](https://github.com/t3-oss/create-t3-app/commit/c48b38f522b81097e2f0e883ede053dbac620c12) Thanks [@Tungetyt](https://github.com/Tungetyt)! - refactor: make destructuring consistent

## 7.10.3

### Patch Changes

- [#1330](https://github.com/t3-oss/create-t3-app/pull/1330) [`85997e0`](https://github.com/t3-oss/create-t3-app/commit/85997e0cc26a2ae6fbcd08458734bd6335ba467a) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: create a new object for the session callback

## 7.10.2

### Patch Changes

- [#1329](https://github.com/t3-oss/create-t3-app/pull/1329) [`5429989`](https://github.com/t3-oss/create-t3-app/commit/54299895517d3c406637efec8f0512cf1ba2da5a) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - temporarily pin next-auth version

- [#1321](https://github.com/t3-oss/create-t3-app/pull/1321) [`7fcb41c`](https://github.com/t3-oss/create-t3-app/commit/7fcb41c95d24567040b72409a576d8c694f910a1) Thanks [@JingLi1998](https://github.com/JingLi1998)! - Update the type for global prisma instance

## 7.10.1

### Patch Changes

- [#1312](https://github.com/t3-oss/create-t3-app/pull/1312) [`2fb3a51`](https://github.com/t3-oss/create-t3-app/commit/2fb3a51b8b91cf2eb992a3af49ff52588f1e9c95) Thanks [@FinnDore](https://github.com/FinnDore)! - feat: bumped tailwind from 3.2.7 -> 3.3.0

## 7.10.0

### Minor Changes

- [#1295](https://github.com/t3-oss/create-t3-app/pull/1295) [`d0a8143`](https://github.com/t3-oss/create-t3-app/commit/d0a8143587c935819790521533e7cfa0862d300c) Thanks [@iAverages](https://github.com/iAverages)! - Replace Git Bash check with Mintty check

### Patch Changes

- [#1304](https://github.com/t3-oss/create-t3-app/pull/1304) [`2cb41e6`](https://github.com/t3-oss/create-t3-app/commit/2cb41e676f01d4e8bfb8c7fc41bf0d5c4a1c0689) Thanks [@PiotrekPKP](https://github.com/PiotrekPKP)! - fix: replace trpc links

## 7.9.0

### Minor Changes

- [#1284](https://github.com/t3-oss/create-t3-app/pull/1284) [`a2af1a2`](https://github.com/t3-oss/create-t3-app/commit/a2af1a2b7d4fd3005f8efe0e297b871d6b1747ff) Thanks [@michalbundyra](https://github.com/michalbundyra)! - chore: bump typescript - 5.0.2

## 7.8.0

### Minor Changes

- [#1273](https://github.com/t3-oss/create-t3-app/pull/1273) [`10a5e0b`](https://github.com/t3-oss/create-t3-app/commit/10a5e0b2fe91b887526960515c6422791a77c724) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: add errorformatter for zod errors

### Patch Changes

- [#1263](https://github.com/t3-oss/create-t3-app/pull/1263) [`8dc6e33`](https://github.com/t3-oss/create-t3-app/commit/8dc6e33ea149851de97f84e8d8388accdd5547d9) Thanks [@mkreuzmayr](https://github.com/mkreuzmayr)! - search for tsconfig relative to eslintrc

- [#1279](https://github.com/t3-oss/create-t3-app/pull/1279) [`ae5cd40`](https://github.com/t3-oss/create-t3-app/commit/ae5cd405c9d5bb672e3971c496d437a7a05b3f8f) Thanks [@arielconti10](https://github.com/arielconti10)! - fix: remove //@ts-check comment in next.config

## 7.7.0

### Minor Changes

- [#1268](https://github.com/t3-oss/create-t3-app/pull/1268) [`db394ed`](https://github.com/t3-oss/create-t3-app/commit/db394edf396288dd754f5743ae2fe26a39c70ef5) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - ignore unused vars that begin with underscore

## 7.6.0

### Minor Changes

- [#1255](https://github.com/t3-oss/create-t3-app/pull/1255) [`601cbb2`](https://github.com/t3-oss/create-t3-app/commit/601cbb23075cd33170c5b3ea2b1b0dbb0f2d5716) Thanks [@justasam](https://github.com/justasam)! - Add import alias validation

## 7.5.9

### Patch Changes

- [#1252](https://github.com/t3-oss/create-t3-app/pull/1252) [`d8be181`](https://github.com/t3-oss/create-t3-app/commit/d8be181fd71dafba8c4c1358fea38b70bca8171a) Thanks [@ggrochow](https://github.com/ggrochow)! - Rename \_eslint.cjs before intializing git repo to ensure .eslint.cjs is added by default

## 7.5.8

### Patch Changes

- [#1249](https://github.com/t3-oss/create-t3-app/pull/1249) [`2432d76`](https://github.com/t3-oss/create-t3-app/commit/2432d76acb337e215743e712d12969b141b22879) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: bump nextjs

## 7.5.7

### Patch Changes

- [#1232](https://github.com/t3-oss/create-t3-app/pull/1232) [`9c82f86`](https://github.com/t3-oss/create-t3-app/commit/9c82f862f5f5227c48e355a8fc31f83d88b0baeb) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: bind configs to variables before exporting to make sure typeerrors are reported

## 7.5.6

### Patch Changes

- [#1222](https://github.com/t3-oss/create-t3-app/pull/1222) [`7baa339`](https://github.com/t3-oss/create-t3-app/commit/7baa339b36b40760443083e0a378d8fe04dddb40) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: detect and handle git bash environment

## 7.5.5

### Patch Changes

- [#1218](https://github.com/t3-oss/create-t3-app/pull/1218) [`4f8d41a`](https://github.com/t3-oss/create-t3-app/commit/4f8d41ae2f41bef197cab13a332034e0ddffc955) Thanks [@bai](https://github.com/bai)! - feat: change eslint config to use `.cjs` format and typecheck it

- [#1217](https://github.com/t3-oss/create-t3-app/pull/1217) [`55c87af`](https://github.com/t3-oss/create-t3-app/commit/55c87af37f64fbf778a5091b9cca75f9c9546468) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: add autofix to eslint type rule

## 7.5.4

### Patch Changes

- [#1191](https://github.com/t3-oss/create-t3-app/pull/1191) [`aabb9a4`](https://github.com/t3-oss/create-t3-app/commit/aabb9a41aa8acce4b3b02e2341b83cd78b802924) Thanks [@bai](https://github.com/bai)! - Use ~/\* import alias

## 7.5.3

### Patch Changes

- [#1213](https://github.com/t3-oss/create-t3-app/pull/1213) [`ab3c7cb`](https://github.com/t3-oss/create-t3-app/commit/ab3c7cb4d4e78ab646a645bc28b4fe3496ba7831) Thanks [@michalbundyra](https://github.com/michalbundyra)! - fix: update comment regarding schema definition of env vars

## 7.5.2

### Patch Changes

- [#1189](https://github.com/t3-oss/create-t3-app/pull/1189) [`bf12635`](https://github.com/t3-oss/create-t3-app/commit/bf1263576866116a904f3d1fa741c5496a535cb9) Thanks [@p13lgst](https://github.com/p13lgst)! - fix: remove ts-ignores on env.mjs

## 7.5.1

### Patch Changes

- [#1187](https://github.com/t3-oss/create-t3-app/pull/1187) [`e111fb5`](https://github.com/t3-oss/create-t3-app/commit/e111fb5cb816de9b2d87bdf4ffcf84f446fd2023) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - remove old env files

## 7.5.0

### Minor Changes

- [#1092](https://github.com/t3-oss/create-t3-app/pull/1092) [`aa44574`](https://github.com/t3-oss/create-t3-app/commit/aa44574680bf380cf4cf7f255fb547e5d9ced7d7) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - single env file

### Patch Changes

- [#1171](https://github.com/t3-oss/create-t3-app/pull/1171) [`efe8b7f`](https://github.com/t3-oss/create-t3-app/commit/efe8b7f54cf0fe5448dc52118745668ae4913547) Thanks [@esotuvaka](https://github.com/esotuvaka)! - fix: swap `@ts-check` comments to `checkJs: true` in scaffolded app's tsconfig

## 7.4.1

### Patch Changes

- [#1155](https://github.com/t3-oss/create-t3-app/pull/1155) [`90955a5`](https://github.com/t3-oss/create-t3-app/commit/90955a50390eee8a23e1c1b35e10c860e4341fed) Thanks [@christopher-kapic](https://github.com/christopher-kapic)! - Change unstable_getServerSession to match the updated getServerSession from next-auth (introduced in next-auth 4.19.0)

## 7.4.0

### Minor Changes

- [#1136](https://github.com/t3-oss/create-t3-app/pull/1136) [`715f6e8`](https://github.com/t3-oss/create-t3-app/commit/715f6e8e795685c054145149acff427a1b46172f) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: colocate auth config/dts/session-getter into a single file

- [#1134](https://github.com/t3-oss/create-t3-app/pull/1134) [`4cb2e4e`](https://github.com/t3-oss/create-t3-app/commit/4cb2e4e5020f93636889499bf71029ce7fcb5fce) Thanks [@PiotrekPKP](https://github.com/PiotrekPKP)! - feat: added package installation progress

### Patch Changes

- [#1131](https://github.com/t3-oss/create-t3-app/pull/1131) [`ab0790e`](https://github.com/t3-oss/create-t3-app/commit/ab0790e95194291cab65dee458982a2b637a4d15) Thanks [@bastibuck](https://github.com/bastibuck)! - fix: fix types of serverEnv and clientEnv

- [#1140](https://github.com/t3-oss/create-t3-app/pull/1140) [`fc445bf`](https://github.com/t3-oss/create-t3-app/commit/fc445bfaa72e2de2880fb286cee71ff2b26a72a6) Thanks [@Zamiell](https://github.com/Zamiell)! - chore: add descriptive comments and format .env prettier

## 7.3.2

### Patch Changes

- [#1097](https://github.com/t3-oss/create-t3-app/pull/1097) [`2ed36cd`](https://github.com/t3-oss/create-t3-app/commit/2ed36cd624cba2032ba70c465cd47c49a962bb0d) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: bump nextjs and add a note about appDir+i18n being incompat

## 7.3.1

### Patch Changes

- [#1084](https://github.com/t3-oss/create-t3-app/pull/1084) [`7490a34`](https://github.com/t3-oss/create-t3-app/commit/7490a34a3f46d8e912f996843d27ae5933f26164) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - fix: undo env changes

## 7.3.0

### Minor Changes

- [#1071](https://github.com/t3-oss/create-t3-app/pull/1071) [`34d6c5b`](https://github.com/t3-oss/create-t3-app/commit/34d6c5b0431ea7baa922a27768d0c82b05c12bdc) Thanks [@ JacobADevore](https://github.com/JacobADevore)! - feat: automatically destructure env objects

## 7.2.0

### Minor Changes

- [#1021](https://github.com/t3-oss/create-t3-app/pull/1021) [`78dfdc9`](https://github.com/t3-oss/create-t3-app/commit/78dfdc9b480ea19ac90270827653400e31300e6e) Thanks [@iduuck](https://github.com/iduuck)! - construct `serverEnv`, like we do with `clientEnv` #1000

### Patch Changes

- [#1060](https://github.com/t3-oss/create-t3-app/pull/1060) [`a8cc106`](https://github.com/t3-oss/create-t3-app/commit/a8cc106c3ef507e275f38c09a5d6a7a14336c254) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: cleanup context type in `initTRPC`

## 7.1.0

### Minor Changes

- [#1036](https://github.com/t3-oss/create-t3-app/pull/1036) [`c5ca65e`](https://github.com/t3-oss/create-t3-app/commit/c5ca65e03e2a9d1c3c7f6844eb678402b0fa8993) Thanks [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)! - use typescript-eslint's recommended-required-type-checking

## 7.0.2

### Patch Changes

- [#1056](https://github.com/t3-oss/create-t3-app/pull/1056) [`c6704fb`](https://github.com/t3-oss/create-t3-app/commit/c6704fbeef1473e77ad62543770f1804645389a8) Thanks [@prashantrahul141](https://github.com/prashantrahul141)! - fix: update `package.json->name` before installing dependencies.

## 7.0.1

### Patch Changes

- [#1043](https://github.com/t3-oss/create-t3-app/pull/1043) [`6fe7e1e`](https://github.com/t3-oss/create-t3-app/commit/6fe7e1e1025f46ea8fe6cc82bee7a68e96864078) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix(cli): exit with error code when aborting installation
  fix(cli): don't log when scaffolding in current directory and it's empty

## 7.0.0

### Major Changes

- [#934](https://github.com/t3-oss/create-t3-app/pull/934) [`c20ec70`](https://github.com/t3-oss/create-t3-app/commit/c20ec705a6d3d3005da24d072cc9be04370ab822) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat!: implement new folder structure

  create-t3-app has decided to switch out the folder structure of the generated t3-app to, what is to us, a more minimal, logical and easier to understand structure.

## 6.12.0

### Minor Changes

- [#1031](https://github.com/t3-oss/create-t3-app/pull/1031) [`61ba991`](https://github.com/t3-oss/create-t3-app/commit/61ba991ea92f5eb3e971d34769df0ba470310990) Thanks [@complexengine](https://github.com/complexengine)! - The CLI now stages the files on project initialization.

## 6.11.6

### Patch Changes

- [#1024](https://github.com/t3-oss/create-t3-app/pull/1024) [`fcf59b0`](https://github.com/t3-oss/create-t3-app/commit/fcf59b077d80fdf0728ab7a4ea12a4b3b5521da3) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: allow dot name in name prompt

## 6.11.5

### Patch Changes

- [#1010](https://github.com/t3-oss/create-t3-app/pull/1010) [`9eddbab`](https://github.com/t3-oss/create-t3-app/commit/9eddbabb9e045b2a8a668ec1389218020360b305) Thanks [@maxmellen](https://github.com/maxmellen)! - chore(create-t3-app): add @types/prettier package to tailwind installer and bump prettier versions

## 6.11.4

### Patch Changes

- [#981](https://github.com/t3-oss/create-t3-app/pull/981) [`ac32b6d`](https://github.com/t3-oss/create-t3-app/commit/ac32b6d09df6d7b3620a41ace8cd2612bd909cc8) Thanks [@balazsorban44](https://github.com/balazsorban44)! - fix(cli): prompt TS first

## 6.11.3

### Patch Changes

- [#939](https://github.com/t3-oss/create-t3-app/pull/939) [`77cfb4b`](https://github.com/t3-oss/create-t3-app/commit/77cfb4bd156ca3d97cbb70cf51ec8e12a632bd64) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - use next-auth 4.18.3 and undo hotfix

- [#932](https://github.com/t3-oss/create-t3-app/pull/932) [`c04a35a`](https://github.com/t3-oss/create-t3-app/commit/c04a35a2b215c8537cf7f0d9ff9760c831720514) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - fix next-auth error

## 6.11.2

### Patch Changes

- [#917](https://github.com/t3-oss/create-t3-app/pull/917) [`eb55d19`](https://github.com/t3-oss/create-t3-app/commit/eb55d19ae0204f6e61fb65b82057b93ed485e880) Thanks [@sharkby7e](https://github.com/sharkby7e)! - feat: add blank target to base template

## 6.11.1

### Patch Changes

- [#914](https://github.com/t3-oss/create-t3-app/pull/914) [`1037d14`](https://github.com/t3-oss/create-t3-app/commit/1037d1472764080a5641d657cac75adec2bbd3f1) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - temporarily pin next-auth

## 6.11.0

### Minor Changes

- [#901](https://github.com/t3-oss/create-t3-app/pull/901) [`9b6ae5c`](https://github.com/t3-oss/create-t3-app/commit/9b6ae5cc1c8fe85becd367d36b61828b06a0a6a9) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - include env files in all apps

### Patch Changes

- [#895](https://github.com/t3-oss/create-t3-app/pull/895) [`91362db`](https://github.com/t3-oss/create-t3-app/commit/91362db87a50fe7f09807aa9950acc5c60ba80dc) Thanks [@Mvmo](https://github.com/Mvmo)! - When initializing a new git repo the git config value 'init.defaultBranch' will be used as the branch name

- [#897](https://github.com/t3-oss/create-t3-app/pull/897) [`272b954`](https://github.com/t3-oss/create-t3-app/commit/272b9547f42f70df3c24dc9d438a7cd88a244773) Thanks [@AyanavaKarmakar](https://github.com/AyanavaKarmakar)! - fix(cli): fix wrong prompt when setting up project name

## 6.10.3

### Patch Changes

- [#869](https://github.com/t3-oss/create-t3-app/pull/869) [`cd93b98`](https://github.com/t3-oss/create-t3-app/commit/cd93b98d00e559721da0674b81978a00870e68ff) Thanks [@meech-ward](https://github.com/meech-ward)! - docs: add notes about env vars

- [#878](https://github.com/t3-oss/create-t3-app/pull/878) [`9abaf80`](https://github.com/t3-oss/create-t3-app/commit/9abaf80d20620e3399c3a1ae51e06a41e2990e28) Thanks [@AyanavaKarmakar](https://github.com/AyanavaKarmakar)! - feat: update scaffolded README.md

- [#845](https://github.com/t3-oss/create-t3-app/pull/845) [`c387187`](https://github.com/t3-oss/create-t3-app/commit/c38718768661944807daee92b21aae2789649ecb) Thanks [@GabrielPedroza](https://github.com/gabrielpedroza)! - fix: typo in env-schema comments

## 6.10.2

### Patch Changes

- [#834](https://github.com/t3-oss/create-t3-app/pull/834) [`3ace6c8`](https://github.com/t3-oss/create-t3-app/commit/3ace6c8149b01d68c1503c6b3087f2a8e5ebc865) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - use trpc 10.0.0

## 6.10.1

### Patch Changes

- [#784](https://github.com/t3-oss/create-t3-app/pull/784) [`f10ce0e`](https://github.com/t3-oss/create-t3-app/commit/f10ce0e9badd3ad6ed45b8dca272bdfc5fbfbff6) Thanks [@AyanavaKarmakar](https://github.com/AyanavaKarmakar)! - fix(t3-app): fix broken links

- [#786](https://github.com/t3-oss/create-t3-app/pull/786) [`4d70f04`](https://github.com/t3-oss/create-t3-app/commit/4d70f048955cd75aa67f0ba91fd5cec5d0311d08) Thanks [@skuridin](https://github.com/skuridin)! - Add next-env.d.ts to .gitignore

- [#800](https://github.com/t3-oss/create-t3-app/pull/800) [`d5d5a2f`](https://github.com/t3-oss/create-t3-app/commit/d5d5a2f7503cf9d7c3bfab4609aeb6a0188d6af1) Thanks [@HatulaPro](https://github.com/HatulaPro)! - fix: removing redundant optional chaining in templates

## 6.10.0

### Minor Changes

- [#711](https://github.com/t3-oss/create-t3-app/pull/711) [`da760c7`](https://github.com/t3-oss/create-t3-app/commit/da760c7d4b96fb783ca1621aed933d63f0d51d4e) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - create new index pages

### Patch Changes

- [#754](https://github.com/t3-oss/create-t3-app/pull/754) [`b6cdcb3`](https://github.com/t3-oss/create-t3-app/commit/b6cdcb3f21feeec6153601d420177b0ada490f2e) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - fix: rename example env file

## 6.9.0

### Minor Changes

- [#727](https://github.com/t3-oss/create-t3-app/pull/727) [`57cb2b5`](https://github.com/t3-oss/create-t3-app/commit/57cb2b5881c31182acc6918cf86330dda26d0586) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: add warning message when not using latest

## 6.8.1

### Patch Changes

- [#717](https://github.com/t3-oss/create-t3-app/pull/717) [`7f8e706`](https://github.com/t3-oss/create-t3-app/commit/7f8e70643c3de0ba8c457833a54c4700bd974816) Thanks [@robotkutya](https://github.com/robotkutya)! - feat: update NEXTAUTH_SECRET validator and set a default

- [#719](https://github.com/t3-oss/create-t3-app/pull/719) [`b359802`](https://github.com/t3-oss/create-t3-app/commit/b359802f128297f0048ae587453031d05e49b566) Thanks [@AyanavaKarmakar](https://github.com/AyanavaKarmakar)! - fix: update NEXTAUTH_SECRET validator to be optional in dev

## 6.8.0

### Minor Changes

- [#673](https://github.com/t3-oss/create-t3-app/pull/673) [`44a107b`](https://github.com/t3-oss/create-t3-app/commit/44a107b8d5345023bafc8a773322e5ee39ba8580) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - remove node 18 and next 13 checks

### Patch Changes

- [#684](https://github.com/t3-oss/create-t3-app/pull/684) [`a707c4b`](https://github.com/t3-oss/create-t3-app/commit/a707c4ba9ffedb8991fc14976e352ff83f4502ac) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: version bumps

## 6.7.0

### Minor Changes

- [#667](https://github.com/t3-oss/create-t3-app/pull/667) [`fde5b76`](https://github.com/t3-oss/create-t3-app/commit/fde5b7628860b305c95f70f5cc42ae3c37ad59a9) Thanks [@Pegasust](https://github.com/Pegasust)! - Add documentation on how to generate NEXTAUTH_SECRET in .env file for clarity

- [#675](https://github.com/t3-oss/create-t3-app/pull/675) [`5d20745`](https://github.com/t3-oss/create-t3-app/commit/5d207453497c327b5c54cd3a55c824d59b80effe) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - only try to get secret message if there is a user

### Patch Changes

- [#676](https://github.com/t3-oss/create-t3-app/pull/676) [`a497e47`](https://github.com/t3-oss/create-t3-app/commit/a497e4765b17e686482ef5b5701766b2299ea0b2) Thanks [@nexxeln](https://github.com/nexxeln)! - update next to 13.0.1

- [#654](https://github.com/t3-oss/create-t3-app/pull/654) [`3dfc27d`](https://github.com/t3-oss/create-t3-app/commit/3dfc27d7edc8dfedee6ed06e9b381cbd791ae0e7) Thanks [@nexxeln](https://github.com/nexxeln)! - Make experimental flags booleans and not require the name to be "double passed"

## 6.6.0

### Minor Changes

- [#657](https://github.com/t3-oss/create-t3-app/pull/657) [`f1673eb`](https://github.com/t3-oss/create-t3-app/commit/f1673ebbf58033746b9a020b7f0b72d976988f84) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: update dependency Next.js to 13

## 6.5.2

### Patch Changes

- [#649](https://github.com/t3-oss/create-t3-app/pull/649) [`6a21032`](https://github.com/t3-oss/create-t3-app/commit/6a210329136d089d61d41acaf99519223003f606) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - chore: version bumps

## 6.5.1

### Patch Changes

- [#642](https://github.com/t3-oss/create-t3-app/pull/642) [`9639419`](https://github.com/t3-oss/create-t3-app/commit/9639419f1f24f8c3f5418680d9d8a214e16c8cd6) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - get next-auth to work with node 18

## 6.5.0

### Minor Changes

- [#623](https://github.com/t3-oss/create-t3-app/pull/623) [`cf99211`](https://github.com/t3-oss/create-t3-app/commit/cf992110e7d7e741e56561a728ee0f2dee6fc614) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - consistent cli text color

### Patch Changes

- [#619](https://github.com/t3-oss/create-t3-app/pull/619) [`1122720`](https://github.com/t3-oss/create-t3-app/commit/112272083e6130209bfbac0cd350e985dcd9f19f) Thanks [@nexxeln](https://github.com/nexxeln)! - Added `createdAt` and `updatedAt` fields to the Example model in the Prisma schema.

- [#621](https://github.com/t3-oss/create-t3-app/pull/621) [`1cc6735`](https://github.com/t3-oss/create-t3-app/commit/1cc67350c626db3c67f012a84d1a73a7a0f03a91) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - fix git spinner

## 6.4.0

### Minor Changes

- [#613](https://github.com/t3-oss/create-t3-app/pull/613) [`135ee5b`](https://github.com/t3-oss/create-t3-app/commit/135ee5b469c575e3fa0d7729a9a545811cc9cf74) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - add inference helper for v10

### Patch Changes

- [#611](https://github.com/t3-oss/create-t3-app/pull/611) [`78a0da3`](https://github.com/t3-oss/create-t3-app/commit/78a0da3d08b9e4468fecbae29cccde7ec43801ab) Thanks [@nexxeln](https://github.com/nexxeln)! - fix(cli): make `installDependencies` step async to make loader spin

## 6.3.0

### Minor Changes

- [#606](https://github.com/t3-oss/create-t3-app/pull/606) [`7f73518`](https://github.com/t3-oss/create-t3-app/commit/7f73518b488b0391f19c8d4d31f583e2be71195a) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - rename index.ts to \_app.ts

## 6.2.1

### Patch Changes

- [#602](https://github.com/t3-oss/create-t3-app/pull/602) [`9f86e39`](https://github.com/t3-oss/create-t3-app/commit/9f86e391fded7bb196ac40b83ac633d996bf035f) Thanks [@nexxeln](https://github.com/nexxeln)! - feat(template): add prettier.Config type to prettier config and resolve prettier-plugin-tailwindcss import

## 6.2.0

### Minor Changes

- [#581](https://github.com/t3-oss/create-t3-app/pull/581) [`dd0e172`](https://github.com/t3-oss/create-t3-app/commit/dd0e172579d0436f5bdb5d29b721dd55362f620e) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - export helper procedures for trpc instead of the `t`-object

## 6.1.2

### Patch Changes

- [#593](https://github.com/t3-oss/create-t3-app/pull/593) [`c8e2753`](https://github.com/t3-oss/create-t3-app/commit/c8e2753b916d15f3ce1103e7fa89dbd046150474) Thanks [@nexxeln](https://github.com/nexxeln)! - chore(template): remove the mention of @next in template readme

## 6.1.1

### Patch Changes

- [#591](https://github.com/t3-oss/create-t3-app/pull/591) [`c90a695`](https://github.com/t3-oss/create-t3-app/commit/c90a6957de7a644e1669762c7a0d19bfbd300715) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - bump next-auth dependency to ^4.12

## 6.1.0

### Minor Changes

- [#582](https://github.com/t3-oss/create-t3-app/pull/582) [`e562ee8`](https://github.com/t3-oss/create-t3-app/commit/e562ee89401307d92177573a9ead1b45373b63c7) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - move prettier from base to tailwind installer

- [#587](https://github.com/t3-oss/create-t3-app/pull/587) [`8c0267f`](https://github.com/t3-oss/create-t3-app/commit/8c0267f98bb7c71e0d90644a9f6af97f1599c723) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - Add .env-example to scaffolded app

## 6.0.1

### Patch Changes

- [#578](https://github.com/t3-oss/create-t3-app/pull/578) [`befc7f4`](https://github.com/t3-oss/create-t3-app/commit/befc7f4f74faeb1538cb6cad6191a1849bf34987) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - upgrade trpc to beta.15 and typescript to 4.8.4

## 6.0.0

### Major Changes

- [#575](https://github.com/t3-oss/create-t3-app/pull/575) [`75fcb49`](https://github.com/t3-oss/create-t3-app/commit/75fcb49f338fbf783a1b157332a803f7c51048c6) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - upgrades trpc to v10 and improves cli performance by making it synchronous

### Minor Changes

- [#575](https://github.com/t3-oss/create-t3-app/pull/575) [`75fcb49`](https://github.com/t3-oss/create-t3-app/commit/75fcb49f338fbf783a1b157332a803f7c51048c6) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - enable vercel_url to pass default env-schema

## 5.15.0

### Minor Changes

- [#533](https://github.com/t3-oss/create-t3-app/pull/533) [`a3a168a`](https://github.com/t3-oss/create-t3-app/commit/a3a168a5a2c54a51e841b2fce5786ec94d72b0fb) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - Tailor .env to only include relevant keys

## 5.14.1

### Patch Changes

- [#510](https://github.com/t3-oss/create-t3-app/pull/510) [`39d766d`](https://github.com/t3-oss/create-t3-app/commit/39d766d3b384c3420c6c058c27be775e961a9319) Thanks [@EkkoKo](https://github.com/EkkoKo)! - fix: resolve target area of `Documentation` links in TechnologyCard

## 5.14.0

### Minor Changes

- [#517](https://github.com/t3-oss/create-t3-app/pull/517) [`2b434bb`](https://github.com/t3-oss/create-t3-app/commit/2b434bb181dc346f299591ddf5465d3175df5c07) Thanks [@gabrielelpidio](https://github.com/gabrielelpidio)! - Add prettier and prettier-plugin-tailwindcss

## 5.13.1

### Patch Changes

- [#506](https://github.com/t3-oss/create-t3-app/pull/506) [`f371ef8`](https://github.com/t3-oss/create-t3-app/commit/f371ef8f0b64205cbbfb5dc6f3416da01a673a71) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - temp fix for next-auth peer deps issue

## 5.13.0

### Minor Changes

- [#485](https://github.com/t3-oss/create-t3-app/pull/485) [`ecc7642`](https://github.com/t3-oss/create-t3-app/commit/ecc764264eff0cf5062fee4f7e4bd9f75975ef41) Thanks [@nexxeln](https://github.com/nexxeln)! - bump next to 12.3.1 and fix AppType

## 5.12.0

### Minor Changes

- [#446](https://github.com/t3-oss/create-t3-app/pull/446) [`6f63ec6`](https://github.com/t3-oss/create-t3-app/commit/6f63ec65201a077e534ec89c4ef18bfa07a30331) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - feat: better cli text when scaffolding in '.'

## 5.11.0

### Minor Changes

- [#430](https://github.com/t3-oss/create-t3-app/pull/430) [`306777a`](https://github.com/t3-oss/create-t3-app/commit/306777a5513c365dfb3525c1484459236734a289) Thanks [@benmarg](https://github.com/benmarg)! - feat: direct developer to add schema from .env to schema.mjs for zod validation

### Patch Changes

- [#416](https://github.com/t3-oss/create-t3-app/pull/416) [`14b6d4a`](https://github.com/t3-oss/create-t3-app/commit/14b6d4a0764f57ece45749724c5b12a85544733e) Thanks [@xpressivecode](https://github.com/xpressivecode)! - fix(template): missing ctx when using ssr with trpc

## 5.10.3

### Patch Changes

- [#419](https://github.com/t3-oss/create-t3-app/pull/419) [`554de8f`](https://github.com/t3-oss/create-t3-app/commit/554de8f2838a8d539d81bcb520f121a7e14e3c84) Thanks [@sor4chi](https://github.com/sor4chi)! - Remove unnecessary singlequote in tailwind classname

## 5.10.2

### Patch Changes

- [#387](https://github.com/t3-oss/create-t3-app/pull/387) [`0f8f59c`](https://github.com/t3-oss/create-t3-app/commit/0f8f59c30155ddf4f6be90f3713ff5d5379f0cbb) Thanks [@Vallerem](https://github.com/Vallerem)! - feat: add basic i18n configuration in next.config

## 5.10.1

### Patch Changes

- [#396](https://github.com/t3-oss/create-t3-app/pull/396) [`30f3db6`](https://github.com/t3-oss/create-t3-app/commit/30f3db64c3a81475488c712fa16682076ba3f18b) Thanks [@rhenriquez28](https://github.com/rhenriquez28)! - fixing ssr by forwarding client's headers

## 5.10.0

### Minor Changes

- [#388](https://github.com/t3-oss/create-t3-app/pull/388) [`86d053c`](https://github.com/t3-oss/create-t3-app/commit/86d053c440ed3c5d5101faf8d73574b6d24bf99e) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - feat: non-tw index.tsx with styling

* [#381](https://github.com/t3-oss/create-t3-app/pull/381) [`773b27e`](https://github.com/t3-oss/create-t3-app/commit/773b27e1399970992e232975830d327100316e74) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - feat: include all cards on all index.tsx files

- [#383](https://github.com/t3-oss/create-t3-app/pull/383) [`e05bc3d`](https://github.com/t3-oss/create-t3-app/commit/e05bc3da9867fcf8d8262b4e8dd976565650cf8f) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - add safeguards for overwriting git repos

* [#375](https://github.com/t3-oss/create-t3-app/pull/375) [`296c79b`](https://github.com/t3-oss/create-t3-app/commit/296c79b9617142d727a12e9a5c4250f68f437d9d) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - feat: add option to continue and overwrite on existing directory

  for reference see: https://github.com/t3-oss/create-t3-app/issues/230

### Patch Changes

- [#394](https://github.com/t3-oss/create-t3-app/pull/394) [`52e9db7`](https://github.com/t3-oss/create-t3-app/commit/52e9db7be8eacbb1e0bb2196647f646f8af617ea) Thanks [@nadilas](https://github.com/nadilas)! - Extending the warning message for invalid client environment variables by including the reason

## 5.9.0

### Minor Changes

- [#366](https://github.com/t3-oss/create-t3-app/pull/366) [`1f43f83`](https://github.com/t3-oss/create-t3-app/commit/1f43f83261c0e6f91b6af0fb39f579845889b724) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - Thanks [@hnqg](https://github.com/hnqg) for the initial PR. add wrapper function for unstable_getServerSession

## 5.8.5

### Patch Changes

- [#357](https://github.com/t3-oss/create-t3-app/pull/357) [`b032074`](https://github.com/t3-oss/create-t3-app/commit/b03207434484d7ec3411b2d7c062a22cf425badc) Thanks [@virtuoushub](https://github.com/virtuoushub)! - chore: Sort package.json when in noInstallMode

* [#365](https://github.com/t3-oss/create-t3-app/pull/365) [`b3ce004`](https://github.com/t3-oss/create-t3-app/commit/b3ce004affb9474e53e845e8507f676e3a771de0) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - revert prisma cleint teardown from #353

## 5.8.4

### Patch Changes

- [#353](https://github.com/t3-oss/create-t3-app/pull/353) [`7a20de9`](https://github.com/t3-oss/create-t3-app/commit/7a20de9f19dfd9ae64143da112a4e3e1bfe30f52) Thanks [@Gejsi](https://github.com/Gejsi)! - Added loggers during development

## 5.8.3

### Patch Changes

- [#345](https://github.com/t3-oss/create-t3-app/pull/345) [`8ee2ea0`](https://github.com/t3-oss/create-t3-app/commit/8ee2ea0c6ca4e49f2bb9b0f5c988471947c8a7ff) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - Include `cjs` and `mjs` files in tsconfig. Thanks @timfee for reporting!

## 5.8.2

### Patch Changes

- [#330](https://github.com/t3-oss/create-t3-app/pull/330) [`5ba03fd`](https://github.com/t3-oss/create-t3-app/commit/5ba03fdf801265668c7bb89b757840ef1f8410f8) Thanks [@nexxeln](https://github.com/nexxeln)! - use auth instead of question while merging the router

## 5.8.1

### Patch Changes

- [#335](https://github.com/t3-oss/create-t3-app/pull/335) [`5745ad7`](https://github.com/t3-oss/create-t3-app/commit/5745ad796ed5647a7103bfb91e16f981152bcbe5) Thanks [@julianread](https://github.com/julianread)! - Fix invalid typeof window comparison to undefined

* [#334](https://github.com/t3-oss/create-t3-app/pull/334) [`a107f14`](https://github.com/t3-oss/create-t3-app/commit/a107f14c5981a233d118252a57066bdf1938b96c) Thanks [@c-ehrlich](https://github.com/c-ehrlich)! - fix: build fails on trpc, trpc+next

## 5.8.0

### Minor Changes

- [#324](https://github.com/t3-oss/create-t3-app/pull/324) [`fb5498c`](https://github.com/t3-oss/create-t3-app/commit/fb5498ceda6d3c528c2fe4e9a5ba4adf3dd36b10) Thanks [@juliusmarminge](https://github.com/juliusmarminge)! - feat: wrap createContext with helper function to make it independent of req/res

## 5.7.0

### Minor Changes

- 7a76c95: feat(app): add lint config for typescript

## [5.6.0](https://github.com/t3-oss/create-t3-app/compare/v5.5.0...v5.6.0) (2022-08-11)

### Features

- Include ct3a version as metadata in generated app ([#305](https://github.com/t3-oss/create-t3-app/issues/305)) ([0be4a97](https://github.com/t3-oss/create-t3-app/commit/0be4a97fdf1c7bfab78d7be2051c2b21e665c491))

### Bug Fixes

- change ! reversion to equality in env validation ([#293](https://github.com/t3-oss/create-t3-app/issues/293)) ([7822c43](https://github.com/t3-oss/create-t3-app/commit/7822c433df18011f0cc6748e2c499c0e4283386c))
- parse path returned from process.cwd() before using it ([#303](https://github.com/t3-oss/create-t3-app/issues/303)) ([b55f196](https://github.com/t3-oss/create-t3-app/commit/b55f196d0146c5c3969de4c25e7732046aad6284))

## [5.5.0](https://github.com/t3-oss/create-t3-app/compare/v5.4.0...v5.5.0) (2022-08-07)

### Features

- make session.user.id non-nullable ([#282](https://github.com/t3-oss/create-t3-app/issues/282)) ([6a81f03](https://github.com/t3-oss/create-t3-app/commit/6a81f03bfafdf77c1c82b7972a97e3e54d77935c))

## [5.4.0](https://github.com/t3-oss/create-t3-app/compare/v5.3.0...v5.4.0) (2022-08-02)

### Features

- add deployment strategy to generated README ([#258](https://github.com/t3-oss/create-t3-app/issues/258)) ([c7d4dce](https://github.com/t3-oss/create-t3-app/commit/c7d4dce182b1c306dc2a41d42483994c336843f4))
- set appName to directory on 'npx create-t3-app .' ([#273](https://github.com/t3-oss/create-t3-app/issues/273)) ([2179f2d](https://github.com/t3-oss/create-t3-app/commit/2179f2d38f74de0e3fda5661f5125d049eb4d238))

### Bug Fixes

- height on small screens ([#256](https://github.com/t3-oss/create-t3-app/issues/256)) ([fe86915](https://github.com/t3-oss/create-t3-app/commit/fe86915ced72dc979e5fe68bd56b038d9c714928))
- missing next-auth types ([#255](https://github.com/t3-oss/create-t3-app/issues/255)) ([ed42629](https://github.com/t3-oss/create-t3-app/commit/ed42629be5fb9be72abd40bbe784f2bda99eec99)), closes [#254](https://github.com/t3-oss/create-t3-app/issues/254)
- **prisma:** make db changes for next-auth on mysql obvious ([#275](https://github.com/t3-oss/create-t3-app/issues/275)) ([e9507c8](https://github.com/t3-oss/create-t3-app/commit/e9507c887e135f3e44357c618689f5cdb2f13c43))

## [5.3.0](https://github.com/t3-oss/create-t3-app/compare/v5.2.1...v5.3.0) (2022-07-25)

### Features

- add typesafe client side env variables ([#209](https://github.com/t3-oss/create-t3-app/issues/209)) ([d4cf879](https://github.com/t3-oss/create-t3-app/commit/d4cf879df811ded012a5f7cb3d91ff0bb95d87ac))
- improved logo typography ([#238](https://github.com/t3-oss/create-t3-app/issues/238)) ([48c6720](https://github.com/t3-oss/create-t3-app/commit/48c67207da48c901822e214a00285c99bb785fd8))
- updating tailwind and postcss config's to use .cjs ([#242](https://github.com/t3-oss/create-t3-app/issues/242)) ([5b97367](https://github.com/t3-oss/create-t3-app/commit/5b973670cae729c9e93b6c3c6f0b3e5b48dda904))

### Bug Fixes

- added JSDoc type to clientEnv in all env-schema ([#240](https://github.com/t3-oss/create-t3-app/issues/240)) ([9cb5ebb](https://github.com/t3-oss/create-t3-app/commit/9cb5ebbb2a0147ce15726c7e1a6c6be4065bc2dc))
- clarify some comments and rename some files in env ([#245](https://github.com/t3-oss/create-t3-app/issues/245)) ([2048783](https://github.com/t3-oss/create-t3-app/commit/2048783bd26f7f0522357a3ab1e74e6f560a221c))
- remove semicolon in \_app.tsx with next-auth to avoid early return ([1be7713](https://github.com/t3-oss/create-t3-app/commit/1be771393628631b818b46d3f3bf1ca41ad99dce))
- title being offset when using yarn/pnpm ([c881f00](https://github.com/t3-oss/create-t3-app/commit/c881f00430f606040a448eecc41e779ab0c728a7))

### [5.2.1](https://github.com/t3-oss/create-t3-app/compare/v5.2.0...v5.2.1) (2022-07-19)

### Bug Fixes

- update url in auth prisma schema ([97c9e27](https://github.com/t3-oss/create-t3-app/commit/97c9e279bf7465a47f29add10c8a6d4c9b7339a5))

## [5.2.0](https://github.com/t3-oss/create-t3-app/compare/v5.1.1...v5.2.0) (2022-07-19)

### Features

- add db.sqlite-journal to gitignore ([#221](https://github.com/t3-oss/create-t3-app/issues/221)) ([0604d21](https://github.com/t3-oss/create-t3-app/commit/0604d217f0dfe3d165013395c1a801e6bc32a17c))

### Bug Fixes

- handle pkg with version in noInstall mode ([#220](https://github.com/t3-oss/create-t3-app/issues/220)) ([5737beb](https://github.com/t3-oss/create-t3-app/commit/5737bebaab3ff6f955bf825274e25419a91642d6))
- missing DATABASE_URL ([#222](https://github.com/t3-oss/create-t3-app/issues/222)) ([b6164d8](https://github.com/t3-oss/create-t3-app/commit/b6164d8944330564e9911e47f36d82620986c8c5))
- typo - rename 'varibles' to 'variables' ([#223](https://github.com/t3-oss/create-t3-app/issues/223)) ([fc6519f](https://github.com/t3-oss/create-t3-app/commit/fc6519f66d067e4e348c7f4c00f6287dc5c40c3d))
- typo in readme ([9390400](https://github.com/t3-oss/create-t3-app/commit/9390400b8720240c650e5dbde7ca0718b7835757))

### [5.1.1](https://github.com/t3-oss/create-t3-app/compare/v5.1.0...v5.1.1) (2022-07-18)

### Bug Fixes

- add missing trpc import ([37b6283](https://github.com/t3-oss/create-t3-app/commit/37b6283bb56e44092fc9ef2d65c84e5298e51d22))

## [5.1.0](https://github.com/t3-oss/create-t3-app/compare/v5.0.0...v5.1.0) (2022-07-18)

### Features

- add trpc inference helpers ([1fcec81](https://github.com/t3-oss/create-t3-app/commit/1fcec81a74372ce5cfaf6503d63f16d5e2b12e3c))
- migrate env + next config to esm ([#205](https://github.com/t3-oss/create-t3-app/issues/205)) ([59f8ad4](https://github.com/t3-oss/create-t3-app/commit/59f8ad4f2104aa1f11508b55da75c333dce03625))

### Bug Fixes

- **#218:** lock react-query to v3 ([15ea5f1](https://github.com/t3-oss/create-t3-app/commit/15ea5f1dc8b86430a720f2eaeb6ccdfaab629892)), closes [#218](https://github.com/t3-oss/create-t3-app/issues/218)
- move gitignore rename call ([#215](https://github.com/t3-oss/create-t3-app/issues/215)) ([7111033](https://github.com/t3-oss/create-t3-app/commit/7111033d75c858041f06d69e95c51e40515457fc))

## 5.0.0 (2022-07-16)

### Features

- add check for yarn 3 ([#173](https://github.com/t3-oss/create-t3-app/issues/173)) ([cd846e1](https://github.com/t3-oss/create-t3-app/commit/cd846e16123a6bb11549276030224ec4ff1223df))
- add ci for pull requests ([0e7cdc8](https://github.com/t3-oss/create-t3-app/commit/0e7cdc8bd307e17e95bd1874af2d0eb43211530e))
- add commitlint ([#126](https://github.com/t3-oss/create-t3-app/issues/126)) ([3672aa3](https://github.com/t3-oss/create-t3-app/commit/3672aa3f4482ef592022cd94f1300b81e3fa7429))
- add CONTRIBUTING.md for newcomers ([99f8220](https://github.com/t3-oss/create-t3-app/commit/99f8220f83a6363e5aab6c0ec33260eb059c9643))
- add db.sqlite to gitignore ([#201](https://github.com/t3-oss/create-t3-app/issues/201)) ([90371c7](https://github.com/t3-oss/create-t3-app/commit/90371c7f88258b4b3e9a2689c09f67a9e439b189))
- add environment variables validation ([#147](https://github.com/t3-oss/create-t3-app/issues/147)) ([0f0b56d](https://github.com/t3-oss/create-t3-app/commit/0f0b56d2604c1ba9dccd8d2a5213f0d2a640cd68))
- add git prompt ([#130](https://github.com/t3-oss/create-t3-app/issues/130)) ([e5be271](https://github.com/t3-oss/create-t3-app/commit/e5be271612db741e3a692cd780ef84455faa115c))
- add inferQueryResponse helper for tRPC ([748800f](https://github.com/t3-oss/create-t3-app/commit/748800f060031da58ce2b45bd65e4fd83266ce5c))
- add main as initial branch ([7b94005](https://github.com/t3-oss/create-t3-app/commit/7b94005fd515d140176e639a487ab5035a290125))
- add next-auth config to env-example [#108](https://github.com/t3-oss/create-t3-app/issues/108) ([c3ab997](https://github.com/t3-oss/create-t3-app/commit/c3ab997f149ee3635d2d33a67650e95e04877d5b))
- add noInstall flag and prompt ([#133](https://github.com/t3-oss/create-t3-app/issues/133)) ([7ff0fca](https://github.com/t3-oss/create-t3-app/commit/7ff0fcacc3b94a4fd15d0db25e2efc09131d73c9))
- add standard-version ([#125](https://github.com/t3-oss/create-t3-app/issues/125)) ([0fc6b47](https://github.com/t3-oss/create-t3-app/commit/0fc6b479c99c76ab830a81d011ba0e4ef90ce849))
- add tRPC inference helper docs commment on utils ([3e784cb](https://github.com/t3-oss/create-t3-app/commit/3e784cbf3f9b4f6eeb4441a881ebbd028f311957))
- added windows build support ([29acbf8](https://github.com/t3-oss/create-t3-app/commit/29acbf816c69f980454568946fba1afea6be114c))
- better ui for templates ([e2e8c7e](https://github.com/t3-oss/create-t3-app/commit/e2e8c7eeeab576d730cd1c7e397497460c1787e0))
- better validation and add path support ([#135](https://github.com/t3-oss/create-t3-app/issues/135)) ([e50cb8a](https://github.com/t3-oss/create-t3-app/commit/e50cb8a3e13126de628d098e00650a52753681f3))
- check if dir is empty ([71bbdba](https://github.com/t3-oss/create-t3-app/commit/71bbdbae564d6e7df4b08645db59a8364b891b99))
- make the ui symmetric ([19df71e](https://github.com/t3-oss/create-t3-app/commit/19df71ec53fd64e60b27ecd055cd9f0c6acc4a63))

### Bug Fixes

- add newline at the end of the file ([64eee1c](https://github.com/t3-oss/create-t3-app/commit/64eee1c8058aa5d2ec29fc1903ee63819fa8fc9d))
- add scripts for CI ([539f3fd](https://github.com/t3-oss/create-t3-app/commit/539f3fdc44e1d96e5429f21afbb74f71bf4d963d))
- add semantic elements and update tw classes on tw pages ([#151](https://github.com/t3-oss/create-t3-app/issues/151)) ([61d6819](https://github.com/t3-oss/create-t3-app/commit/61d6819f14ac5b65c779081c91ca894f724f7b16))
- bumped package.json for beta-release ([3fe35f1](https://github.com/t3-oss/create-t3-app/commit/3fe35f14313da611cb16e26141e06d1afb5efb78))
- change comment in .env to discord ([d992713](https://github.com/t3-oss/create-t3-app/commit/d992713cad08c08267a0f018fa8582b569a554db))
- **cli:** use correct spelling, fix short choices ([7776aa9](https://github.com/t3-oss/create-t3-app/commit/7776aa9fc03293f27d9e27808cd03810f96ccc33))
- conditionally run envVars installer ([#196](https://github.com/t3-oss/create-t3-app/issues/196)) ([f5f4f62](https://github.com/t3-oss/create-t3-app/commit/f5f4f6275c1a967f6de2e7c6d40d9a7731a3830b))
- docs wrong format ([3d2dbb0](https://github.com/t3-oss/create-t3-app/commit/3d2dbb06cadb42d24f134ce09edc5a371d79aff9))
- dont prompt for typesafe env-vars ([2faee56](https://github.com/t3-oss/create-t3-app/commit/2faee56720c39d770ebe05d15e3fb2aaacaf704e))
- eslint warning (import/no-anonymous-default-export) ([a1cce55](https://github.com/t3-oss/create-t3-app/commit/a1cce5546a8fd6efb79c65a2f2b52d4c597dafd0))
- fixed some typos ([#131](https://github.com/t3-oss/create-t3-app/issues/131)) ([a86466e](https://github.com/t3-oss/create-t3-app/commit/a86466eb0bc1ef51a1c8ba1b96938dc1bd7dfbbb))
- format contributing.md ([4111476](https://github.com/t3-oss/create-t3-app/commit/41114766582ca33fb2a3fd0b566e609a6dd3e861))
- handle git projects correctly ([3ed897f](https://github.com/t3-oss/create-t3-app/commit/3ed897ff49c06f6d70d49aee31d5c3741fced96e))
- incompatible git version ([#127](https://github.com/t3-oss/create-t3-app/issues/127)) ([34f44f8](https://github.com/t3-oss/create-t3-app/commit/34f44f817df52b317afea5b8d55c87eea487833f))
- invalid pnpm action version ([2a1f6e3](https://github.com/t3-oss/create-t3-app/commit/2a1f6e32aedb8f86ee7ca403e481be8e474b76b2))
- language prompt short answer should both be ts ([#142](https://github.com/t3-oss/create-t3-app/issues/142)) ([5e4f80d](https://github.com/t3-oss/create-t3-app/commit/5e4f80d7aa930f16add3bb2273a23f5829548f49))
- **markup:** multiple h1 replaced to h2 ([6bf9040](https://github.com/t3-oss/create-t3-app/commit/6bf90407b9a9774348a77927d37c47f3ded5552a))
- **prompts:** show correct package manager in prompts ([#153](https://github.com/t3-oss/create-t3-app/issues/153)) ([fe66ae9](https://github.com/t3-oss/create-t3-app/commit/fe66ae9f60cbe6a2e429be406a1cd548c51e7bbd))
- properly display the welcome title when installing with Yarn ([#160](https://github.com/t3-oss/create-t3-app/issues/160)) ([a5b9d53](https://github.com/t3-oss/create-t3-app/commit/a5b9d534e6395e494dcfab8419e71bf201b7326b))
- provide cwd inside git init exec call ([9679492](https://github.com/t3-oss/create-t3-app/commit/9679492ebd9175973c99d647cf11a4f1b979a505))
- reapply style fixes on tw pages ([#189](https://github.com/t3-oss/create-t3-app/issues/189)) ([af1067b](https://github.com/t3-oss/create-t3-app/commit/af1067b196205b0dd70a44571c62012d9667987e)), closes [#178](https://github.com/t3-oss/create-t3-app/issues/178)
- remove changeset from repo ([#134](https://github.com/t3-oss/create-t3-app/issues/134)) ([d58b380](https://github.com/t3-oss/create-t3-app/commit/d58b380ed4310021a771e05037a6054176c14b91))
- remove duplicated types ([#138](https://github.com/t3-oss/create-t3-app/issues/138)) ([e4c8e33](https://github.com/t3-oss/create-t3-app/commit/e4c8e336fff94bd125cac06f4bfa4d5eb365dd54))
- remove unncesary import on auth router ([abdc61f](https://github.com/t3-oss/create-t3-app/commit/abdc61ffc18dd4f1e82f3fc02cd87a2144d0cc03))
- run prettier ([9961645](https://github.com/t3-oss/create-t3-app/commit/99616456d54abde5b458d57add1132dcb2b68256))
- standardize log messages ([83a13b9](https://github.com/t3-oss/create-t3-app/commit/83a13b9963f83317a62e3eeaed14dd5e2cb45344))
- **template:** converting to use tech props and remove tw from template ([#183](https://github.com/t3-oss/create-t3-app/issues/183)) ([b2d542a](https://github.com/t3-oss/create-t3-app/commit/b2d542a44eed0aa699fe91e52f25f6ac68a0021c))
- **templates:** h1 restored ([e51e03d](https://github.com/t3-oss/create-t3-app/commit/e51e03d93a899674bef839ddb215a36e62397e26))
- type entrire app and not just the props ([908630e](https://github.com/t3-oss/create-t3-app/commit/908630e5cc14789b88a0ddf6dd097fb14eb9068a))
- typo in "Javascript" ([#136](https://github.com/t3-oss/create-t3-app/issues/136)) ([6873a7a](https://github.com/t3-oss/create-t3-app/commit/6873a7a5ff17c6efda1b78fe73597ec43821552c))
- update templates ([4418f1d](https://github.com/t3-oss/create-t3-app/commit/4418f1db06a29050293f0d4dd16a1347d34c6cf9))
- use components for the tech within the splash screen ([#178](https://github.com/t3-oss/create-t3-app/issues/178)) ([c436382](https://github.com/t3-oss/create-t3-app/commit/c4363821664fe95b4301d46b3e2d34fbeb14952d))
- with-tw removed unused styles and added motion saftey ([#148](https://github.com/t3-oss/create-t3-app/issues/148)) ([598ed0e](https://github.com/t3-oss/create-t3-app/commit/598ed0eda73e5218658ff7d574e28ecc25a4e2cb))

## 4.4.1

### Patch Changes

- changed ui for template

## 4.4.0

### Minor Changes

- improve ui examples of template app

## 4.3.5

### Patch Changes

- add warning for old git versions

## 4.3.4

### Patch Changes

- improve template styling

## 4.3.3

### Patch Changes

- Add description for packages in the template

## 4.3.2

### Patch Changes

- Redesign pages

## 4.3.0

### Minor Changes

- added Next-Auth protected routes when using tRPC

## 4.2.12

### Patch Changes

- upgrade next to 12.2.0

## 4.2.11

### Patch Changes

- modified the title to print a colorful ascii art

## 4.2.10

### Patch Changes

- add warning about next-auth when using Node 18

## 4.2.9

### Patch Changes

- fix resolved path to package root

## 4.2.8

### Patch Changes

- diable version flag

## 4.2.2

### Patch Changes

- fix esm issues

## 4.2.1

### Patch Changes

- trying to fix esm error

## 4.2.0

### Minor Changes

- a548f22: added cli args, esm support

## 4.1.1

### Patch Changes

- Updated package to full ESM support

## 4.1.0

### Minor Changes

- Create-t3-app now accepts args!

  When calling create-t3-app, you can specify the app name and directory directly from the cli.

  Additonal options are visable by passing -h or --help into the command line

## 4.0.8

### Patch Changes

- added loading spinners

## 4.0.7

### Patch Changes

- added tsup as build tool

## 4.0.6

### Patch Changes

- Added dev tooling.
