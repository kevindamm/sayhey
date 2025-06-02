<template>
  <div>
    TODO similar component construction but defanged and with "help" annotations
    (debug) #{{ stage }}

    <p>
      Contents will have cascading "help-*" props enabled from the root component,
      making it easier to define the helpful props alongside the components, and
      removing the need to mirror the entire component tree here.
    </p>

    <note-entry-ui help-enabled="true" />
  </div>
</template>

<script lang="ts" setup>
const stage = ref(0)

// TODO stages defined in terms of 1) comonent focused, 2) popup text, 3)
</script>
