 # rn-smart-render

[![npm version](https://img.shields.io/npm/v/rn-smart-render.svg)](https://www.npmjs.com/package/rn-smart-render)
[![npm downloads](https://img.shields.io/npm/dw/rn-smart-render.svg)](https://www.npmjs.com/package/rn-smart-render)
[![MIT license](https://img.shields.io/badge/license-MIT-green)](https://github.com/Praveennayak877/rn-smart-render/blob/main/LICENSE)

> 🚀 A React and React Native utility library to detect unnecessary re-renders and optimize performance with helpful hooks.

---

## 📦 Install

```bash
npm install rn-smart-render

OR
yarn add rn-smart-render

⚙️ Usage
✅ Track Renders in Your Component

import React from 'react';
import { Text, View } from 'react-native'; // or use div, p for web
import { useRenderLogger } from 'rn-smart-render';

const MyComponent = (props) => {
  useRenderLogger('MyComponent', props); // Logs on every render in dev

  return (
    <View>
      <Text>Hello from MyComponent!</Text>
    </View>
  );
};

🔍 Features
🧠 useRenderLogger(name: string, props?: any)
Logs to the console when the component re-renders. Useful in development to catch unnecessary renders.

🧠 useDeepCompareMemo(factoryFn, deps)
Memoizes a value with deep comparison on dependencies (not just shallow).

const result = useDeepCompareMemo(() => compute(data), [data]);

🧠 useMemoizedCallback(callbackFn, deps)
Stable callback with deep dependency comparison.

const onPress = useMemoizedCallback(() => {
  console.log('Pressed!');
}, [someObject]);


🚧 Roadmap
useRenderCount – track number of re-renders

withRenderLogger() – HOC for class components

Support for render count heatmaps in devtools

🤝 Contributing
We welcome contributions!
Feel free to fork, improve, and PR on GitHub

📜 License
MIT © Praveen Nayak

