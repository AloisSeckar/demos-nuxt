<template>
  <div>
    <div>
      {{ formState }}
    </div>
    <div>
      <TheForm @save="handleSave" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Bio from '@/types/Bio'

// reactive property for monitoring form submission
const formState = ref('form was not submitted')

// handler listening to form submissions
function handleSave (formData: Bio) {
  formState.value = 'form was submitted @ ' + new Date().toDateString()
  // just test output
  // in real-world scenario you'd probably call some backend function to persist the data
  console.log(formState.value)
  console.log('Submited values:')
  console.log(formData)
}
</script>
