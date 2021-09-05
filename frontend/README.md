# README

## コーディング例

1. import 類は習慣的に一番上。import は類はアルファベット順でソートする。

## atomic デザイン採用

最終的にテンプレートはなくす。：ｗ
src/
├ components/
│ 　 └ atoms/ # 原子（個々のパーツ）
│ 　 └ molecules/ # 分子（原子の集合体）
│ 　 └ organisms/ # 生体（分子の集合体）
│ 　 └ templates/ # テンプレート（ページの雛形）
│ 　 └ pages/ # ページ

### Atom の条件

- コンポーネントを import しない
- 単一の function component または class で、独自の state で完結するもの

### Molecules の条件

- Atom を 2 つ以上 import する分子
- Atom を Loop させるもの
- MobX Store をインジェクトが必要な最小単位(レンダリングの回数を減らす目的で、molecules では inject 可)

### Organisms の条件

- 分子を 2 つ以上 import する有機体
