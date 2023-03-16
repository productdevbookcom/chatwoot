<script setup>
import { useChatWoot } from '@productdevbook/chatwoot'
const { isModalVisible, toggle, toggleBubbleVisibility } = useChatWoot()
</script>

<template>
  <div>
    <div>Is Modal Open: {{ isModalVisible }}</div>
    <br>
    <h3>Events</h3>
    <button class="btn" @click="toggle('open')">
      Open Chatwoot chat window.
    </button>
    <button class="btn" @click="toggle('close')">
      Close Chatwoot chat window.
    </button>
    <button class="btn" @click="toggleBubbleVisibility('hide')">
      Hide Bubble
    </button>
    <button class="btn" @click="toggleBubbleVisibility('show')">
      Show Bubble
    </button>
  </div>
</template>

<style>
:root {
    --btn-bg: #e5e5e5;
    --btn-text: #262626;
}

@media (prefers-color-scheme: dark) {
    :root {
        --btn-bg: #262626;
        --btn-text: #e5e5e5;
    }
}

.btn {
    background-color: var(--btn-bg);
    color: var(--btn-text);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.45rem;
    display: block;
    cursor: pointer;
    margin-bottom: 0.5rem;
}
</style>
