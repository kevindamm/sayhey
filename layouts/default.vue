<!-- Copyright (c) 2025 Kevin Damm
  MIT License

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the “Software”), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  github:KevinDamm/sayhey/layouts/default.vue
-->

<template>
  <body>
    <header>
      <nav>
        <ul>
          <li>
            <strong>
              <NuxtLink
                to="/"
                replace
              >Say Hey!</NuxtLink>
            </strong>
          </li>
        </ul>

        <ul>
          <li><NuxtLink to="/about">What?</NuxtLink></li>
          <li><NuxtLink to="/guide">How?</NuxtLink></li>
          <li><NuxtLink to="/auth">Sign In</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p class="copyright">
        &copy; 2025 Kevin Damm - All Rights Reserved
      </p>
      <div class="policy-links">
        <NuxtLink to="/privacy.html">Privacy Policy</NuxtLink>
        |
        <NuxtLink to="/tos.html">Terms of Service</NuxtLink>
        |
        (MIT Licensed) <NuxtLink
          external
          href="https://github.com/kevindamm/sayhey"
        >Source</NuxtLink>
      </div>
    </footer>
  </body>
</template>

<style>
header {
  margin: auto;
  max-width: 95vw;
}

footer {
  font-size: 70%;
}

.copyright {
  text-align: center;
}

.policy-links {
  text-align: center;
}
</style>
