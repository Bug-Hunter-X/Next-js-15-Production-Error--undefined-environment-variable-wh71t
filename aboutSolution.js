```javascript
// pages/about.js
import {useRouter} from 'next/router';
import config from '../next.config';

export default function About() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log(config.env.MY_CUSTOM_VARIABLE);

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. My custom variable is: {config.env.MY_CUSTOM_VARIABLE}</p>
    </div>
  );
}
```
```javascript
// next.config.js
module.exports = {
  env: {
    MY_CUSTOM_VARIABLE: process.env.MY_CUSTOM_VARIABLE,
  },
};
```