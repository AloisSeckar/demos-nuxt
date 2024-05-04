<template>
  <div>
    <FormKit
      v-slot="{ value }"
      type="form"
      submit-label="Odeslat"
      @submit="saveForm"
    >
      Current form data:
      <pre>{{ value }}</pre>
      <br>
      <FormKit
        id="name"
        v-model="bio.name"
        type="text"
        name="name"
        label="Name:"
        validation="required"
        help="Insert text"
      />
      <FormKit
        id="age"
        v-model="bio.age"
        type="number"
        name="age"
        label="Age:"
        validation="required"
        help="Select number"
      />
      <FormKit
        id="gender"
        v-model="bio.gender"
        name="gender"
        type="radio"
        label="Gender:"
        :options="{ m: 'male', f: 'female', x: 'other' }"
        validation="required"
        help="Pick one"
      />
      <FormKit
        id="bio"
        v-model="bio.bio"
        type="textarea"
        name="bio"
        label="Bio:"
        validation="required"
        help="Write text"
      />
      <FormKit
        id="completed"
        v-model="bio.completed"
        type="checkbox"
        name="completed"
        label="Completed"
        help="Check to mark as completed"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type { Bio } from '@/types/Bio'

// reactive property for the form values
const bio = ref({} as Bio)

// detect and handle form submission event
const emit = defineEmits<{ (e: 'save', data: Bio): void }>()
const saveForm = (input: Bio) => {
  // export as new object to disconnect from reactivity
  // this might or might not be a desired behaviour
  // based on the application structure and requirements
  emit('save', JSON.parse(JSON.stringify(input)))
}
</script>
