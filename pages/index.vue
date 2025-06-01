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

  github:KevinDamm/sayhey/pages/index.vue
-->

<template>
  <main class="container">
    <div v-if="status === 'pending'">
      <article aria-busy="true" />
    </div>
    <div v-else-if="status === 'error'">
      <p>Oh no!</p>
      <p>{{ error?.message }}</p>
    </div>

    <div class="cta">
      <svg
        v-if="showMicButton"
        class="mic-input"
        @click="record"
      >
        <!-- mic -->
      </svg>
      <button
        :disabled="toggleKeyboard"
        class="key-input"
        @click="write"
      >
        Keyboard
      </button>
    </div>

    <div v-if="!toggleKeyboard">
      <textarea
        v-model="noteText"
        class="text-entry"
      />
    </div>

    <div v-if="notes && notes?.length > 0">
      <h1>Recent Notes</h1>
      <article
        v-for="note of notes"
        :key="note.id"
        v-text="note.text"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Note } from '~/shared/types/note'

const showMicButton = ref(true)
const showMicStatus = ref(false)
const toggleKeyboard = ref(false)
const noteText = ref('')

const { data: notes, error, status } = await useFetch<Note[]>('/api/notes', {
  lazy: true,
})

const record = () => {
  showMicButton.value = false
  showMicStatus.value = true
  // unhide the MicRecording component
}

const write = () => {
  // unhide the NoteEntry text area
}
</script>

<style>
.cta {
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
}

.mic-input {
  width: 70cqmin;
  height: 70cqmin;
  margin: auto;
}

.key-input {
  width: 42cqmin;
  margin: auto;
}
</style>
