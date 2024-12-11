# Next.js 15 Production Error: Undefined Environment Variable

This repository demonstrates a common error encountered in Next.js 15 applications when using environment variables within pages.  The error occurs in the production build because environment variables defined in the `.env.local` file are not automatically available in the pages directory during the build process.

**Problem:**
The `about.js` file attempts to access an environment variable, `process.env.MY_CUSTOM_VARIABLE`, which is not defined in the production environment. This results in a runtime error.

**Solution:**
To fix this, use the `next/config` module to access environment variables, or use them inside the `getStaticProps` or `getServerSideProps` functions to ensure they are available during the build process.  This solution utilizes `next/config` for a cleaner approach to accessing environment variables, this avoids the need to alter the pages directory.