<template>
  <div>
    <h1>nuxt-valibot</h1>
    <div style="margin-bottom: 1rem;">
      This demo shows <a href="https://valibot.dev">Valibot</a> in <a href="https://nuxt.com">Nuxt</a>.
    </div>
    <div style="margin-bottom: 1rem;">
      Valid object: {{ validObject }}
    </div>
    <div style="margin-bottom: 1rem;">
      Invalid object: {{ invalidObject || 'See console output' }}
    </div>
    <div style="margin-bottom: 1rem;">
      Safely parsed object: {{ safeObject }}
    </div>
  </div>
</template>

<script setup lang="ts">
// import using wildcard notation
// this allows to use all Valibot features in a predictable (Zod-like) way
import * as v from 'valibot'

// define a Valibot schema
const LoginSchema = v.object({
  email: v.string(),
  password: v.string(),
})

// inferred type for using in app
type Login = v.InferOutput<typeof LoginSchema>

// parse an object using the schema
// this will throw an error if the object is invalid
let validObject: Login
let invalidObject: Login
try {
  validObject = v.parse(LoginSchema, { email: 'jane.doe@example.com', password: '12345' })
  invalidObject = v.parse(LoginSchema, { email: 'jane.doe@example.com', password: 12345 })
}
catch (error) {
  console.info('Valibot error when using parse:')
  // ValiError: Invalid type: Expected string but received 12345
  console.error((error as Error).message)
}

// alternative safe parsing which avoids throwing an error
// v.SafeParseResult<typeof LoginSchema>
const safeObject = v.safeParse(LoginSchema, { email: 'jane.doe@example.com', password: 12345 })
if (!safeObject.success) {
  console.info('Valibot warning when using safeParse:')
  // human-readable error info via "summarize"
  console.warn(v.summarize(safeObject.issues))
}
</script>
