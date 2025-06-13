<template>
  <div>
    <h1>nuxt-valibot</h1>
    <div>
      This demo shows <a href="https://valibot.dev">Valibot</a> in <a href="https://nuxt.com">Nuxt</a>.
    </div>
    <div>
      Valid object: {{ validObject }}
    </div>
    <div>
      Invalid object: {{ invalidObject }}
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
type Login = v.InferOutput<typeof LoginSchema>;

// parse an object using the schema
// this will throw an error if the object is invalid
let validObject: Login
let invalidObject: Login
try {
  validObject = v.parse(LoginSchema, { email: "jane.doe@example.com", password: "12345" });
  invalidObject = v.parse(LoginSchema, { email: "jane.doe@example.com", password: 12345 });
} catch (error) {
  // ValiError: Invalid type: Expected string but received 12345
  console.log((error as Error).message);
}
</script>